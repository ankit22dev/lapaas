import Sahil_Khanna from '../../public/imgs/Sahil1.jpg'

const Section4 = () => {

    return (
        <section className="transition-all section">
            <div className="hero-section">
                <div className="my-8">
                    <h2 className="text-4xl font-extrabold text-center text-white uppercase lg:text-4xl">
                        Know Your Mentor
                    </h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 mx-8 ,mb-8 md:mx-20 lg:mx-28 pt-10 gap-6 text-white">
                        <div className="text-center md:text-left">
                            <p className="text-base md:text-xl md:leading-8">
                                <span className="mr-1 font-semibold text-[#ff5c47]">
                                    Sahil Khanna
                                </span>
                                is an Engineer turned Digital Marketer. He is the founder of
                                Intellectual Indies, a top digital marketing channel in India with
                                more than
                                <span className="ml-1 font-semibold text-[#ff5c47]">
                                    11,00,000+ entrepreneurs across the globe
                                </span>
                                .
                            </p>
                            <p className="mt-4 text-base md:text-xl md:leading-8">
                                Sahil loves to help people and his mission is to make internet
                                marketing easy and fun for everyone. Sahil started his life as a
                                perfectly imperfect child with many flaws.
                            </p>
                            <p className="mt-4 text-base md:text-xl md:leading-8">
                                But he was never concerned about the end result. In his free time,
                                <span className="mx-1 font-semibold text-[#ff5c47]">
                                    Sahil loves investing, singing and playing cricket.
                                </span>
                                Money is something that doesn’t fascinate him but the impact and
                                difference that could be created in someone’s life because of him
                                does.
                            </p>
                        </div>
                        <div className="flex">
                            <img
                                src={Sahil_Khanna.src}
                                alt="Sahil-Khanna"
                                loading="lazy"
                                className="object-contain mx-auto"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
