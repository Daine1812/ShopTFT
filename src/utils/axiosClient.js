import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shoptft-backend.onrender.com/', // KHÔNG thêm dấu "/" ở cuối
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
