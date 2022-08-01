import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Image from 'next/image'
import WhyNotAstraunotBlue from '../../public/imgs/whyUsBlue.png'

const ScrollingWhyUs = () => {
    return (
        <section className='section scrolling-section'>
            <div className="flex">
                <div className='sticky top-0 left-0 flex items-center justify-center max-h-screen lg:w-1/2'>
                    <div className='w-[45vw] absolute left-1/2 -translate-x-1/2 bottom-0 hidden lg:block'>
                        <Image src={WhyNotAstraunotBlue} alt="HeroImg" className='w-full h-full' />
                    </div>
                </div>
                {/* <div className='w-1/2 overflow-y-auto scrolling-whyUs'> */}
                <div className='w-full overflow-y-auto lg:w-1/2 scrolling-whyUs'>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Experienced Developers</h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold '>We have experienced developers who always fulfil all your needs in an efficient manner.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>On Time Delivery</h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold '>We always deliver our projects on time because we know how important it is for our clients.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Affordable</h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold '>Our clients love us because we provide affordable digital marketing services without losing the quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollingWhyUs