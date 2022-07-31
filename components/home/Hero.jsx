import Image from 'next/image'
import { useState } from 'react';
import HeroImg from '../../public/imgs/heroImg.png'
import FloatingAstraunotBlack from '../../public/imgs/floatingAstraunotWhite.png'
import Rocket from '../../public/imgs/spaceship.png'
import CloseIcon from '../../public/svgs/close.svg'
import Link from 'next/link';


const Hero = ({ comp }) => {

    const [slide, setSlide] = useState(false);

    return (
        <section className="section active">
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
                    <div className="flex flex-col max-w-xl py-12">
                        <div className="items-center justify-center">
                            <h1 className="heading">
                                <div className="text-left">Transform Your Business with Lapaas</div>
                            </h1>
                            <p className='space-y-2 text-base tracking-wider text-left md:text-lg'>
                                We pride ourselves on being able to provide high quality work at affordable prices without sacrificing any quality.
                                If you want a digital marketing agency that truly cares about your success then look no further than Lapaas!
                            </p>
                        </div>
                        <div className="flex gap-6  mt-6">
                            <button type='button' className='w-auto mt-2 red-btn' onClick={() => setSlide(true)}>Services</button>
                            <button type='button' className='w-auto mt-2 red-btn' onClick={() => {
                                comp.fullpageApi.moveTo(5)
                            }}>Get Quote</button>
                        </div>
                    </div>
                </div>
                <div
                    className={`${slide ? "w-full" : "w-2/5"} relative origin-right overflow-hidden transition-all duration-1000 flex py-12 flex-col justify-center items-center`}
                >
                    <div className={`${slide ? "w-60" : "w-1/2"} relative hidden lg:block`} id='heroImg'>
                        <Image src={HeroImg} alt="HeroImg" className='w-full h-full' />
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

export default Hero


/*

<div className="section-wrapper w-full mx-auto flex px-10 justify-center lg:justify-between items-center h-full">
                <div className=" flex flex-col justify-center items-center py-12">
                    <h1 className="heading">astronaut</h1>
                    <div className="space-y-2 text-lg md:text-xl tracking-wider">
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem</p>
                    </div>
                    <button type='button' className='red-btn' onClick={() => transtion()}>astronaut</button>
                </div>
                <div className='relative w-80 hidden lg:block' id='heroImg'>
                    <Image src={HeroImg} alt="HeroImg" className='w-full h-full' />
                </div>
            </div>
            <div>

            </div>



**/