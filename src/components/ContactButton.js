import { useState } from 'react';

const ContactButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="contact-button" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fas fa-comment-dots"></i> Liên hệ
            </div>
            <div className={`contact-menu ${menuOpen ? 'show' : ''}`}>
                <a href="https://zalo.me/0917351112" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" /> Zalo - HOTLINE: 036 226 1580
                </a>
                <a href="https://m.me/SHOPACCLM247" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Facebook_Messenger_logo_2025.svg" alt="Messenger" /> Chat Facebook
                </a>
                <a href="https://www.facebook.com/groups/tftmobilevnm" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" /> Group Cộng Đồng TFT Mobile
                </a>
                <a href="https://www.facebook.com/groups/timbanleorankk" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" /> Group Tìm bạn chơi game
                </a>
            </div>
        </>
    );
};

export default ContactButton;