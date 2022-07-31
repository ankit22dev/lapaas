import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Image from 'next/image'
import WhyNotAstraunotBlue from '../../public/imgs/whyUsBlue.png'

const ScrollingWhyUs = () => {
    return (
        <section className='section scrolling-section'>
            <div className="flex">
                <div className='w-1/2 max-h-screen sticky top-0 left-0 flex justify-center items-center'>
                    <div className='w-[45vw] absolute left-1/2 -translate-x-1/2 bottom-0 hidden lg:block'>
                        <Image src={WhyNotAstraunotBlue} alt="HeroImg" className='w-full h-full' />
                    </div>
                </div>
                <div className='w-1/2 overflow-y-auto scrolling-whyUs'>
                    <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Experienced Developers</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>We have experienced developers who always fulfills all you needs in efficient manner.</p>
                        </div>
                    </div>
                    <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>On Time Delivery</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>We always deliver our projects on time because we know how important it is for our clients.</p>
                        </div>
                    </div>
                    <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Affordable</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>Our clients love us because we provide affordable digital marketing services without loosing the quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollingWhyUs