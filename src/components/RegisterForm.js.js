import { useState } from 'react';

const RechargeForm = () => {
    const [tab, setTab] = useState('nap');

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex border-b border-gray-600">
                <button
                    className={`flex-1 py-2 text-center text-xl font-bold ${tab === 'nap' ? 'bg-gray-900' : 'bg-gray-800'}`}
                    onClick={() => setTab('nap')}
                >
                    NẠP THẺ
                </button>
                <button
                    className={`flex-1 py-2 text-center text-xl font-bold ${tab === 'top' ? 'bg-gray-900' : 'bg-gray-800'}`}
                    onClick={() => setTab('top')}
                >
                    THÔNG BÁO
                </button>
            </div>
            {tab === 'nap' ? (
                <form className="p-4">
                    <select className="w-full p-2 mb-2 bg-gray-900 text-white rounded border border-gray-600">
                        <option value="">Chọn Nhà Mạng</option>
                        <option value="VIETTEL">Viettel</option>
                        <option value="VINAPHONE">Vina</option>
                        <option value="MOBIFONE">Mobi</option>
                        <option value="GATE">GATE</option>
                        <option value="ZING">Zing</option>
                        <option value="VNMOBI">Vietnammobi</option>
                        <option value="GARENA">Garena</option>
                        <option value="VCOIN">Vcoin</option>
                    </select>
                    <select className="w-full p-2 mb-2 bg-gray-900 text-white rounded border border-gray-600">
                        <option value="">Chọn Mệnh Giá</option>
                        <option value="10000">10.000 VNĐ - (Nhận 100%)</option>
                        <option value="20000">20.000 VNĐ - (Nhận 100%)</option>
                        <option value="30000">30.000 VNĐ - (Nhận 100%)</option>
                        <option value="50000">50.000 VNĐ - (Nhận 100%)</option>
                        <option value="100000">100.000 VNĐ - (Nhận 100%)</option>
                        <option value="200000">200.000 VNĐ - (Nhận 100%)</option>
                        <option value="300000">300.000 VNĐ - (Nhận 100%)</option>
                        <option value="500000">500.000 VNĐ - (Nhận 100%)</option>
                        <option value="1000000">1.000.000 VNĐ - (Nhận 100%)</option>
                    </select>
                    <input type="number" placeholder="Mã Số Thẻ" className="w-full p-2 mb-2 bg-gray-900 text-white rounded border border-gray-600" />
                    <input type="number" placeholder="Số Serial" className="w-full p-2 mb-2 bg-gray-900 text-white rounded border border-gray-600" />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        Nạp Thẻ
                    </button>
                    <p className="text-center text-white text-sm mt-2">
                        Nạp Thẻ Cào: 100K Thẻ Cào = 100K Shop.<br />
                        Nạp ATM/MoMo KHUYẾN MÃI 25%: 100K ATM/MoMo = 125K Shop.
                    </p>
                </form>
            ) : (
                <div className="p-4 text-gray-900 max-h-96 overflow-auto">
                    <p className="text-red-600 font-bold">TRI ÂN KHÁCH HÀNG - <a href="https://shoplmht.vn/" className="text-green-500">SHOPLMHT.VN</a> | GIẢM GIÁ TOÀN BỘ ACC</p>
                    <p className="text-lg text-green-500">SHOP ÁP DỤNG TỪ NGÀY: 09/06/2025 - 23/06/2025</p>
                    <p className="text-green-600">MỌI NGƯỜI TRANH THỦ LỰA CHỌN ACC ĐỂ GIẢI TRÍ NHÉ</p>
                    <p>Tất cả tài khoản <a href="https://shoplmht.vn/TFT/pet-dtcl" className="text-red-600">ĐTCL</a> và <a href="https://shoplmht.vn/Riot/LMHT/1" className="text-red-600">LMHT</a> trên web là tài khoản</p>
                    <p><strong>RIOT GAME <a href="https://account.riotgames.com/" className="text-red-600">TRẮNG THÔNG TIN</a>: Đổi được Mail và Mật Khẩu</strong></p>
                    <p><a href="https://shoplmht.vn/Riot/pet-19/1" className="text-green-600 bg-red-600 px-2">MUA NGAY</a></p>
                    <p className="text-red-600 font-bold">CAM KẾT: 100% ACC AN TOÀN - VÀ ACC RẺ NHẤT THỊ TRƯỜNG</p>
                    <h1><a href="https://www.facebook.com/shopacclm247" className="text-orange-600">SĐT/ZALO</a>: <span className="text-red-600">036 226 1580 - </span><a href="https://www.facebook.com/shopacclm247" className="text-orange-600">ADMIN TÍN</a></h1>
                </div>
            )}
        </div>
    );
};

export default RechargeForm;