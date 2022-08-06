import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Social = () => {

    return (
        <section className="transition-all section">
            <div className="hero-section">
                <div>
                    <div className="flex items-center justify-center flex-wrap p-5">
                        <button className="bg-[#FF0000] px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
                            <FaYoutube className="w-10 h-10 fill-current" />
                            <span className="text-2xl">1.1M</span>
                        </button>
                        <button className="bg-[#E1306C]  px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
                            <FaInstagram className="w-10 h-10 fill-current" />
                            <span className="text-2xl">86.6K</span>
                        </button>
                        <button className="bg-[#0077b5]  px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
                            <FaLinkedinIn className="w-10 h-10 fill-current" />
                            <span className="text-2xl">15.2K</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Social;
