import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Companies = () => {

    return (
        <section className="transition-all section">
            <div className="hero-section">
                <h2 className="text-3xl sm:text-4xl font-bold pt-5 text-center text-white">
                    Featured In
                </h2>
                <div className=" grid xl:grid-cols-5 grid-cols-2 md:grid-cols-4 justify-center items-center gap-3 p-5 md:p-10">
                    <div className="bg-white p-4">
                        <img
                            src="https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg"
                            alt="outlookindia"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://www.telegraphindia.com/assets/images/tt_online_logo.png?v=1"
                            alt="telegraphindia"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://www.asianage.com/images/logo.jpg"
                            alt="asianage"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.webp"
                            alt="deccanchronicle"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://www.theweek.in/content/dam/week/logo/The-Week-Logo-Big.png"
                            alt="theweek"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://www.tribuneindia.com/Content/images/Logo_eng.png"
                            alt="tribuneindia"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://img.etimg.com/photo/msid-74451948,quality-100/et-logo.jpg"
                            alt="the-economics-time"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://www.joshtalks.com/wp-content/themes/josh_talks/img/josh-logo.svg"
                            alt="joshtalks"
                            className="h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://i.postimg.cc/nVYVbVkD/download-12.png"
                            alt="ted"
                            className="h-5 sm:h-8 mx-auto"
                        />
                    </div>
                    <div className="bg-white p-4">
                        <img
                            src="https://i.postimg.cc/c1Dj8V1z/download-11.png"
                            alt="hindustan-times"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Companies;