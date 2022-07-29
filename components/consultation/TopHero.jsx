import Image from 'next/image'
import { useState } from 'react';
import HeroImg from '../../public/imgs/heroImg.png'
import FloatingAstraunotBlack from '../../public/imgs/floatingAstraunotWhite.png'
import Rocket from '../../public/imgs/spaceship.png'
import CloseIcon from '../../public/svgs/close.svg'
import Link from 'next/link';


const TopHero = ({ comp }) => {

    const [slide, setSlide] = useState(false);

    return (
        <section className="section">
            <div className='relative flex h-full py-8 px-6'>
                <div
                    className={`${slide ? "w-full" : "w-0"
                        } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#d14b39]/95`}
                >

                    <div className='relative w-60 hidden lg:block' id='flyingAstroImg'>
                        <Image src={FloatingAstraunotBlack} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <a target="_blank" href="https://course.lapaas.com/" rel="noopener noreferrer" className={`liteYellow-btn mt-auto`}>Course</a>
                </div>
                <div
                    className={`${slide ? "w-0 opacity-0" : "w-3/5 opacity-100"
                        } overflow-hidden transition-all duration-1000 relative flex justify-center items-center`}
                >
                    <div className="flex flex-col py-12 max-w-xl">
                        <div className="justify-center items-center">
                            <h1 className="heading"><div className="text-left">TRANSFORM YOUR BUSINESS WITH BUSINESS CONSULTING SERVICES</div></h1>
                            <p className='space-y-2 text-base md:text-lg tracking-wider text-left'>
                                If you’re ready to take the next step toward success then it’s time to get Business consulting services! Whether it be launching a new product or simply getting more leads and sales, Entrepreneur Sahil Khanna has the expertise necessary to make it happen.
                            </p>
                        </div>
                        <div class="mt-6">
                            <button type='button' className='red-btn mt-2 w-auto mx-2' onClick={() => setSlide(true)}>Get Quote</button>
                        </div>
                    </div>
                </div>
                <div
                    className={`${slide ? "w-full" : "w-2/5"} relative origin-right overflow-hidden transition-all duration-1000 flex py-12 flex-col justify-center items-center`}
                >
                    <div className='relative w-60 hidden lg:block' id='heroImg'>
                        <Image src={Rocket} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <button type='button' className={`red-btn transition-all mt-auto duration-1000 ${slide ? 'opacity-100 visible' : 'opacity-0 hidden'}`} onClick={() => {
                        comp.fullpageApi.moveSectionDown()
                    }}>Services</button>
                </div>
                <div
                    className={`${slide ? "w-full" : "w-0"
                        } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#193247]/95`}
                >

                    <div className='relative w-48 hidden lg:block' id='flyingAstroImg'>
                        <Image src={Rocket} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <Link href="/consultance">
                        <a className={`liteYellow-btn mt-auto`}>Consultance</a>
                    </Link>
                    {/* <button type='button' className='liteYellow-btn mt-auto'>Consultance</button> */}
                </div>

                {
                    slide && <div className='absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer' onClick={() => setSlide(false)}>
                        <div className='w-10'>
                            <Image src={CloseIcon} alt='close' className='w-full h-full' />
                        </div>
                    </div>
                }
            </div>

        </section>
    )
}

export default TopHero