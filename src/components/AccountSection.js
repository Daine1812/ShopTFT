import React from 'react';

const AccountSection = ({ title, accounts }) => (
    <div className="my-8">
        <h2 className="text-center text-3xl font-bold text-gray-700 uppercase">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
            {accounts.map((account, index) => (
                <a key={index} href={account.link} className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img src={account.image} alt={account.title} className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-2 bg-gray-800 text-white text-center">
                        <h3 className="text-lg font-bold truncate">{account.title}</h3>
                        <p className="text-sm">Số Tài Khoản: <strong>{account.total}</strong></p>
                        <p className="text-sm">Đã Bán: <strong>{account.sold}</strong></p>
                        <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">XEM TẤT CẢ</button>
                    </div>
                </a>
            ))}
        </div>
    </div>
);

export default AccountSection;