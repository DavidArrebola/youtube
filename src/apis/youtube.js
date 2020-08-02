import axios from 'axios';

const KEY = 'AIzaSyDBj5c3oKvjWV9tfePOGLc72gxEBY-3geY';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})