import express from "express";
import ytdl from "ytdl-core";
import cors from "cors";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";

ffmpeg.setFfmpegPath(ffmpegPath.path);

const app = express();
app.use(cors());

const port = 3001;

app.get('/api/single/:type', async (req, res) => {
    const { type } = req.params;
    const { url } = req.query;

    if (type !== 'mp3') {
        res.status(400).send('Invalid type. Only mp3 is supported.');
        return;
    }

    try {
        let info = await ytdl.getInfo(url);
        let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
        
        // Use the video title for the file name
        let filename = `${info.videoDetails.title}.mp3`;
        // Replace any characters in the filename that are not allowed in file names
        filename = filename.replace(/[^a-z0-9\-_\.]/gi, '_');

        res.header('Content-Disposition', `attachment; filename="${filename}"`);
        let stream = ytdl(url, { format: format });
        stream.on('error', err => {
            console.error(err); 
            res.status(500).send(err.toString());
        });

        ffmpeg(stream)
            .noVideo()
            .format('mp3')
            .pipe(res);

    } catch (err) {
        console.error(err);  
        res.status(500).send(err.toString());
    }
});

app.get('/api/info', async (req, res) => {
    const { url } = req.query;

    try {
        let info = await ytdl.getInfo(url);
        res.json({
            title: info.videoDetails.title,
            thumbnail: info.videoDetails.thumbnails[0].url,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.toString());
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});