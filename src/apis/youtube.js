import axios from 'axios';

const KEY = 'AIzaSyDTlQihBVvcVE12CMDX11GeqqGF6qIK03w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});