import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- thêm dòng này
import axios from '../utils/axiosClient';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // <-- thêm dòng này

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/send-otp', { email: form.email });
      if (res.data.success) {
        setStep(2);
        setMessage('✅ Đã gửi OTP về email!');
      } else {
        setMessage(res.data.message || '❌ Gửi OTP thất bại');
      }
    } catch (err) {
      setMessage('❌ Lỗi kết nối máy chủ');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      return setMessage('❌ Mật khẩu không khớp');
    }
    setLoading(true);
    try {
      // Đăng ký
      const res = await axios.post('/auth/register', form);
      if (!res.data.success && res.data.message) {
        setMessage(res.data.message || '❌ Đăng ký thất bại');
        setLoading(false);
        return;
      }

      // Xác thực OTP
      const verify = await axios.post('/auth/verify', {
        email: form.email,
        otp: form.otp,
      });

      if (verify.data.message === 'Xác thực thành công') {
        setMessage('✅ Đăng ký và xác thực thành công! Đang chuyển trang...');
        setTimeout(() => navigate('/login'), 1500); // 👉 Chuyển về /login
      } else {
        setMessage(verify.data.message || '❌ Xác thực thất bại');
      }
    } catch (err) {
      setMessage('❌ Lỗi kết nối máy chủ');
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
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>
        {message && <div className="mb-4 text-sm text-center text-red-500">{message}</div>}

        {step === 1 ? (
          <>
            <input
              name="name"
              placeholder="Tên người dùng"
              onChange={handleChange}
              value={form.name}
              className="w-full p-3 mb-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={form.email}
              className="w-full p-3 mb-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="password"
              placeholder="Mật khẩu"
              type="password"
              onChange={handleChange}
              value={form.password}
              className="w-full p-3 mb-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              type="password"
              onChange={handleChange}
              value={form.confirmPassword}
              className="w-full p-3 mb-4 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
              onClick={sendOtp}
              disabled={loading}
            >
              {loading ? 'Đang gửi...' : 'Đăng Kí'}
            </button>
          </>
        ) : (
          <>
            <input
              name="otp"
              placeholder="Mã OTP"
              onChange={handleChange}
              value={form.otp}
              className="w-full p-3 mb-4 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? 'Đang xác nhận...' : 'Xác nhận đăng ký'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
