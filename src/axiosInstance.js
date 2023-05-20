
import axios from 'axios';

// Create a new instance of Axios with custom configuration
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json'
  },
});

export default instance;
