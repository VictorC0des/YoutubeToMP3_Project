import {Form, FormControl, Button} from 'react-bootstrap'; 

function SearchBar({ videoUrl, setVideoUrl }) {
    return (
        <Form inline className="justify-content-center py-3">
            <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                style={{ width: '100%' }} 
                value={videoUrl} 
                onChange={(e) => setVideoUrl(e.target.value)}
            />
        </Form>
    );
}
export default SearchBar;