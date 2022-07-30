import Image from 'next/image'
import { useState } from 'react';
import HeroImg from '../../public/imgs/heroImg.png'
import FloatingAstraunotBlack from '../../public/imgs/floatingAstraunotWhite.png'
import Rocket from '../../public/imgs/spaceship.png'
import CloseIcon from '../../public/svgs/close.svg'
import Link from 'next/link';
import astraunotincup from '../../public/imgs/astraunot in cup with white fill.png'


const Hero = ({ comp }) => {

    const [slide, setSlide] = useState(false);

    return (
        <section className="section">
            <div className='relative flex h-full px-6 py-8'>
                <div
                    className={`${slide ? "w-full" : "w-0"
                        } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#d14b39]/95`}
                >

                    <div className='relative hidden w-60 lg:block' id='flyingAstroImg'>
                        <Image src={FloatingAstraunotBlack} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <a target="_blank" href="https://course.lapaas.com/" rel="noopener noreferrer" className={`liteYellow-btn mt-auto`}>Course</a>
                </div>
                <div
                    className={`${slide ? "w-0 opacity-0" : "w-3/5 opacity-100"
                        } overflow-hidden transition-all duration-1000 relative flex justify-center items-center`}
                >
                    <div className="flex flex-col max-w-xl py-12 ">
                        <div className="items-center justify-center">
                            <h1 className="heading"><div className="text-left">We'll help you get the most out of your marketing budget</div></h1>
                            <p className='space-y-2 text-base tracking-wider text-left md:text-lg'>We are Lapaas, a marketing agency that is 100% invested in your success. We believe that when our clients succeed, we succeed.. From start to finish, we will be there with you every step of the way to ensure that you reach your goals. We want to see you succeed and we will do everything in our power to help you get there. </p>
                        </div>
                        <div class="mt-6">
                            <button type='button' className='w-auto mx-2 mt-2 red-btn' onClick={() => comp.fullpageApi.moveTo(9)}>Get Quote</button>
                        </div>
                    </div>
                </div>
                <div
                    className={`${slide ? "w-full" : "w-2/5"} relative origin-right overflow-hidden transition-all duration-1000 flex py-12 flex-col justify-center items-center `}
                >
                    <div className='relative hidden w-8/12 lg:block' id='heroImg'>
                        <Image src={astraunotincup} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <button type='button' className={`red-btn transition-all mt-auto duration-1000 ${slide ? 'opacity-100 visible' : 'opacity-0 hidden'}`} onClick={() => {
                        comp.fullpageApi.moveSectionDown()
                    }}>Services</button>
                </div>
                <div
                    className={`${slide ? "w-full" : "w-0"
                        } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#193247]/95`}
                >

                    <div className='relative hidden w-48 lg:block' id='flyingAstroImg'>
                        <Image src={Rocket} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <Link href="/consultance">
                        <a className={`liteYellow-btn mt-auto`}>Consultance</a>
                    </Link>
                    {/* <button type='button' className='mt-auto liteYellow-btn'>Consultance</button> */}
                </div>

                {
                    slide && <div className='absolute top-0 -translate-x-1/2 cursor-pointer left-1/2' onClick={() => setSlide(false)}>
                        <div className='w-10'>
                            <Image src={CloseIcon} alt='close' className='w-full h-full' />
                        </div>
                    </div>
                }
            </div>

        </section>
    )
}

export default Hero

