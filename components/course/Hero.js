import { FaCheckCircle } from "react-icons/fa";
import Image from 'next/image'
import Spaceship from '../../public/imgs/spaceship.png'
import { useState } from "react";
// import Whatsapp from "./Whatsapp";

const Hero = () => {

    return (
        <section className="transition-all section">
            <div className="hero-section">
                {/* <Whatsapp /> */}
                <section className=" text-white h-full text-center pb-5 sm:pb-14 px-2 sm:px-6  pt-10">
                    <h1 className="flex justify-center text-3xl sm:text-4xl md:text-5xl  font-extrabold mb-0">
                        Become Digital Marketing Scientist
                    </h1>
                    <h2 className="flex justify-center text-3xl sm:text-4xl md:text-5xl  mt-3 italic">
                        In 60 Days Learn from scratch
                    </h2>
                    <div className="flex flex-col md:flex-row mt-6 px-2 sm:px-10 lg:px-28">
                        <iframe
                            className="w-full aspect-video border-gray-50 border-8  mr-10 rounded-sm"
                            src="https://www.youtube.com/embed/LkBE8IFeFiM"
                            title="video"
                            loading="lazy"
                        ></iframe>
                        <div className="my-auto">
                            <div className="flex items-center text-lg text-left mt-8 md:mt-0">
                                <div className="text-3xl sm:text-5xl mr-2">
                                    <FaCheckCircle className="" />
                                </div>
                                <p className="text-left">Grow your own business or start consulting for others</p>
                            </div>
                            <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                                <div className="text-3xl sm:text-5xl mr-2">
                                    <FaCheckCircle className="" />
                                </div>
                                <p className="text-left">200+ Hours of Content</p>
                            </div>
                            <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                                <div className="text-3xl sm:text-5xl mr-2">
                                    <FaCheckCircle className="" />
                                </div>
                                <p className="text-left">100% Job Assistance to all the Students</p>
                            </div>
                            <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                                <div className="text-3xl sm:text-5xl mr-2">
                                    <FaCheckCircle className="" />
                                </div>
                                <p className="text-left">Practical Assignment with Hand Holding Support</p>
                            </div>
                            <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                                <div className="text-3xl sm:text-5xl mr-2">
                                    <FaCheckCircle className="" />
                                </div>
                                <p className="text-left">100% Job Placement By Jobwala99.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
