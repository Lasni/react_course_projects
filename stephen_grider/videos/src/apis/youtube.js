import axios from 'axios';

const KEY = 'AIzaSyC8gLF4IQR5R_271-_R-nJ9AbRVV_AGpP0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    
  }
})