import axios from 'axios';
// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: 'https://api.pito.com.sg',
});

export default APIKit;
