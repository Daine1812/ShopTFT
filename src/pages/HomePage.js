import Carousel from '../components/Carousel';
import RechargeForm from '../components/RechargeForm';
import AccountSection from '../components/AccountSection';

const HomePage = ({ lmhtAccounts, randomLmhtAccounts, randomDtclAccounts }) => (
    <div className="max-w-6xl mx-auto my-6">
        <h1 className="text-center text-3xl font-extrabold text-blue-600 py-3">Shop LMHT - Mua Bán ACC LOL, Liên Minh, TFT & DTCL Uy Tín</h1>
        <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
                <Carousel />
            </div>
            <div className="md:col-span-1">
                <RechargeForm />
            </div>
        </div>
        <div className="py-12 bg-black bg-opacity-80">
            <AccountSection title="LIÊN MINH HUYỀN THOẠI & ĐẤU TRƯỜNG CHÂN LÝ" accounts={lmhtAccounts} />
            <AccountSection title="RANDOM LIÊN MINH HUYỀN THOẠI" accounts={randomLmhtAccounts} />
            <AccountSection title="RANDOM ĐẤU TRƯỜNG CHÂN LÝ VN" accounts={randomDtclAccounts} />
        </div>
    </div>
);

export default HomePage;