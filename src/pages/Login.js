import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosClient';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/login', form);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        setMessage('✅ Đăng nhập thành công!');
        setTimeout(() => navigate('/'), 1000);
      } else {
        setMessage(res.data.message || '❌ Đăng nhập thất bại');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || '❌ Lỗi kết nối máy chủ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/upload/site/bg.png")' }}
    >
      <div className="w-full max-w-md bg-white rounded shadow-md p-8 text-black bg-opacity-90">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
        {message && <div className="mb-4 text-sm text-center text-red-500">{message}</div>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </div>
    </div>
  );
}