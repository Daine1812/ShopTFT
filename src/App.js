import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';

const App = () => {
    const lmhtAccounts = [
        { title: "LMHT TỰ CHỌN", link: "/Riot/LMHT/1", image: "/assets/upload/site/8381127f6e698667f75d6cc71539ac97.png", total: "3,868", sold: "2,828" },
        { title: "ZIN THÔNG THẠO", link: "/Riot/lmht-zin-thong-thao/1", image: "/assets/upload/site/a9f6fcdc0ab8984608ca510543a1bada.png", total: "406", sold: "130" },
        { title: "LMHT NƯỚC NGOÀI", link: "/Riot/lmht-nuoc-ngoai/1", image: "/assets/upload/site/0cb4b60a50541799f15b879081228db8.png", total: "22", sold: "17" },
        { title: "LMHT NHIỀU TƯỚNG", link: "/Riot/lmht-nhieu-tuong/1", image: "/assets/upload/site/9e5ecfe37b9071bd44861dcacdee50af.png", total: "1,712", sold: "1,170" },
        { title: "ĐTCL VIỆT NAM - ACC SIÊU NGON", link: "/Riot/dtcl-vietnam/1", image: "/assets/upload/site/838604a227b50029f8f73c0e63da7ac1.png", total: "35", sold: "171" },
        { title: "ĐTCL VIỆT NAM - ACC SIÊU RẺ", link: "/Riot/dtcl-sieu-re/1", image: "/assets/upload/site/baad28ec6c9bf25fcde515b667c72c65.png", total: "460", sold: "59" },
        { title: "ĐTCL NƯỚC NGOÀI", link: "/Riot/dtcl-nuoc-ngoai/1", image: "/assets/upload/site/1471c7bfe2821f1f215b9f442ecb8a6a.png", total: "120", sold: "26" },
        { title: "CLONE PET TÍM + SÀN TÍM", link: "/TFT/pet-dtcl", image: "/assets/upload/site/732d744d2b17cbe0152873046abad74b.png", total: "691", sold: "548" },
    ];

    const randomLmhtAccounts = [
        { title: "RANDOM LM 25K", link: "/Riot/random-lm-20k/1", image: "/assets/upload/site/0d59f7b31f651f095132373eba9821b2.png", total: "761", sold: "243" },
        { title: "RANDOM LM 125K", link: "/Riot/random-100k/1", image: "/assets/upload/site/4affb77e91172836289d4511452e20a2.png", total: "6", sold: "45" },
        { title: "RANDOM LM 200K", link: "/Riot/random-150k/1", image: "/assets/upload/site/4680f4dadb3b14c39690d549ff85c73a.png", total: "29", sold: "540" },
        { title: "RANDOM LM 250K", link: "/Riot/random-12/1", image: "/assets/upload/site/12ea8158e6535288ad9e81376c693367.png", total: "16", sold: "56" },
    ];

    const randomDtclAccounts = [
        { title: "ĐẬP TRỨNG TRÚNG LINH THÚ CHỈ 2500Đ", link: "/Riot/random-dtcl-3k/1", image: "/assets/upload/site/f8841705a7a2f8953189e2d2d7e2c843.png", total: "6,367", sold: "4,036" },
        { title: "ACC 400 KỈ VẬT - SĂN PET TÍM", link: "/Riot/random-dtcl-1/1", image: "/assets/upload/site/1a97fb3e37a9fb6ff4489a79037f2394.png", total: "1,089", sold: "1,045" },
        { title: "ACC 450 KỈ VẬT - SĂN PET TÍM", link: "/Riot/random-dtcl-2/1", image: "/assets/upload/site/1eb444a7d9457c8b6280e827cab67816.png", total: "1,974", sold: "159" },
        { title: "ACC 500 KỈ VẬT - MỞ TRÚNG PET TÍM CAO", link: "/Riot/random-dtcl-3/1", image: "/assets/upload/site/8af771a24d2da87b74c65fcf7245db77.png", total: "4,686", sold: "5,444" },
        { title: "RANDOM TFT 20K - TRÊN 2500 PHA LÊ XỨ SỞ", link: "/Riot/random-dtcl-4/1", image: "/assets/upload/site/a0017b180a7433c66103f3fb2a6f91ed.png", total: "1,832", sold: "22" },
        { title: "RandomTFT 40K: ĐTCL 5 - 10 Huy Chương", link: "/Riot/random-dtcl-5/1", image: "/assets/upload/site/e4b8d42e90293630e9b852c0223e4feb.png", total: "453", sold: "202" },
        { title: "RANDOM TFT 60K - Thử Vận May PET TÍM", link: "/Riot/random-dtcl-6/1", image: "/assets/upload/site/338539d0ace6fda7d005eb9c1089c92c.png", total: "498", sold: "167" },
        { title: "RANDOM TFT 80K - RANDOM PET CHIBI KÈM CHƯỞNG LỰC", link: "/Riot/random-dtcl-7/1", image: "/assets/upload/site/7f1e08d68cb5ca27737a3b6d9741ac94.png", total: "429", sold: "54" },
        { title: "RANDOM TFT 100k - RANDOM PET TÍM 100%", link: "/Riot/random-dtcl-9/1", image: "/assets/upload/site/373fe495d680dfc9af2969699523027a.png", total: "92", sold: "256" },
        { title: "RANDOM TFT 200K - RD PET TÍM + HC", link: "/Riot/random-dtcl-10/1", image: "/assets/upload/site/91a9e2e2d6bb33cc5f09b25702a642bf.png", total: "34", sold: "143" },
        { title: "RANDOM TFT 350K - ĐI TÌM RANDOM SÂN TÍM", link: "/Riot/random-dtcl-11/1", image: "/assets/upload/site/1c1021a56689bb86852ca35d76297588.png", total: "78", sold: "1" },
        { title: "RANDOM TFT 500K - RANDOM 10-25 HUY CHƯƠNG", link: "/Riot/random-dtcl-12/1", image: "/assets/upload/site/c6eafab930126f19a6bae4b145e40e86.png", total: "3", sold: "8" },
        { title: "RANDOM TFT 800K - TRÚNG PET TÍM + SÀN TÍM", link: "/Riot/random-dtcl-13/1", image: "/assets/upload/site/4ca1086833c1ff9a5c7add3fa571b7c7.png", total: "6", sold: "0" },
        { title: "RANDOM TFT 1200K - ĐI TÌM RANDOM PET HÀNG HIỆU", link: "/Riot/random-dtcl-14/1", image: "/assets/upload/site/d916eb1dbdd8a9cdee296ec50478cefd.png", total: "0", sold: "22" },
        { title: "ACC TFT PBE - Máy Chủ Thử Nghiệm Giá Rẻ", link: "/Riot/random-dtcl-15/1", image: "/assets/upload/site/c203c00daae92fd305047f5f7e766cf0.png", total: "0", sold: "0" },
        { title: "Dịch Vụ Nạp RP - XU - LMHT vs ĐTCL", link: "https://www.facebook.com/SHOPACCLM247", image: "/assets/upload/site/a41a46870b93322e00a8874bdaabae83.png", total: "", sold: "" },
    ];

    return (
        <div className="min-h-screen text-white">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            lmhtAccounts={lmhtAccounts}
                            randomLmhtAccounts={randomLmhtAccounts}
                            randomDtclAccounts={randomDtclAccounts}
                        />
                    }
                />
            </Routes>
            <ContactButton />
            <Footer />
        </div>
    );
};

export default App;
