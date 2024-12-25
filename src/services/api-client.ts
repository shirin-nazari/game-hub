import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '507a56a7a83b4fee8b7fa18c283bea8f',
  },
});
