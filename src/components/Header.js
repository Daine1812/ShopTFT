import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-black bg-opacity-80 text-white">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src="/assets/upload/site/55374eb380c538c13ffd0eab33d379ce.png" alt="Logo" className="h-12" />
                </a>
                <nav className="hidden lg:flex gap-4">
                    <a href="/" className="px-3 py-2 hover:text-blue-400">TRANG CHỦ</a>
                    <a href="/Blog/hd-mua-acc" className="px-3 py-2 hover:text-blue-400">HƯỚNG DẪN MUA ACC</a>
                    <a href="/Blog/hd-bao-mat" className="px-3 py-2 hover:text-blue-400">HƯỚNG DẪN BẢO MẬT</a>
                    <a href="/Blog/uy-tin" className="px-3 py-2 hover:text-blue-400">UY TÍN CỦA SHOP</a>
                    <a href="/giao-dich-gan-day" className="px-3 py-2 hover:text-blue-400">GIAO DỊCH GẦN ĐÂY</a>
                    <div className="relative group">
                        <span className="px-3 py-2 cursor-pointer hover:text-blue-400">DỊCH VỤ</span>
                        <div className="absolute hidden group-hover:block bg-black bg-opacity-80 rounded shadow-lg">
                            <a href="/Blog/nap-rp" className="block px-4 py-2 hover:bg-blue-600">NẠP GAME GIÁ RẺ</a>
                        </div>
                    </div>
                    <a href="/login" className="px-3 py-2 border rounded-full hover:bg-blue-600">Đăng Nhập</a>
                    <a href="/register" className="px-3 py-2 border rounded-full hover:bg-blue-600">Đăng Ký</a>
                </nav>
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {menuOpen && (
                <nav className="lg:hidden bg-black bg-opacity-80 px-4 py-2">
                    <a href="/" className="block py-2">TRANG CHỦ</a>
                    <a href="/Blog/hd-mua-acc" className="block py-2">HƯỚNG DẪN MUA ACC</a>
                    <a href="/Blog/hd-bao-mat" className="block py-2">HƯỚNG DẪN BẢO MẬT</a>
                    <a href="/Blog/uy-tin" className="block py-2">UY TÍN CỦA SHOP</a>
                    <a href="/giao-dich-gan-day" className="block py-2">GIAO DỊCH GẦN ĐÂY</a>
                    <a href="/Blog/nap-rp" className="block py-2">NẠP GAME GIÁ RẺ</a>
                    <a href="/login" className="block py-2 border rounded mt-2 text-center">Đăng Nhập</a>
                    <a href="/register" className="block py-2 border rounded mt-2 text-center">Đăng Ký</a>
                </nav>
            )}
        </header>
    );
};

export default Header;