import React from 'react';

const Footer = () => (
    <footer className="bg-black bg-opacity-80 text-white py-8 border-t-2 border-gray-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap">
            <div className="md:w-1/2 w-full mb-4">
                <p className="font-bold">HỆ THỐNG BÁN ACC TỰ ĐỘNG. ĐẢM BẢO UY TÍN VÀ CHẤT LƯỢNG.</p>
                <div className="mt-2">
                    <p>Tổng số account đã bán: <strong>17,562</strong></p>
                    <p>Tổng số thành viên: <strong>25,310</strong></p>
                    <p>Tổng lượt truy cập: <strong>6,745</strong></p>
                    <p>Số người đang truy cập: <strong>6</strong></p>
                    <p className="text-sm italic">Lưu ý: "Số người đang truy cập" được tính dựa trên các IP hoạt động trong vòng 1 phút.</p>
                </div>
            </div>
            <div className="md:w-1/2 w-full mb-4">
                <p>CHÚNG TÔI LUÔN LẤY UY TÍN LÀM HÀNG ĐẦU ĐỐI VỚI KHÁCH HÀNG. HI VỌNG SẼ ĐƯỢC PHỤC VỤ CÁC BẠN. CẢM ƠN!</p>
            </div>
            <div className="w-full text-center border-t border-gray-600 pt-4">
                <p>Mua Acc LOL, Acc Liên Minh & TFT, DTCL Giá Rẻ - Shop Uy Tín, Đảm Bảo Chất Lượng</p>
                <p>copyright© 2025, shoplmht.vn</p>
            </div>
        </div>
    </footer>
);

export default Footer;