import axios from 'axios';

const ACCESS_KEY = "db52687500fc6e0aaae4d0f686f3d4a7b1ca8be712260dad0e6998e0314c46c0"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
  
})


