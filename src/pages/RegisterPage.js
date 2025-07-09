import React, { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    const res = await fetch("https://shoptft-backend.onrender.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setStep(2);
  };

  const handleVerify = async () => {
    const res = await fetch("https://shoptft-backend.onrender.com/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Đăng Ký</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full mb-3 p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Đăng ký</button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Nhập mã xác minh (OTP)"
              className="w-full mb-3 p-2 border rounded"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerify} className="bg-green-500 text-white px-4 py-2 rounded w-full">Xác minh</button>
          </>
        )}

        {message && <p className="text-sm text-center mt-4 text-red-600">{message}</p>}
      </div>
    </div>
  );
}
export default RegisterPage;
