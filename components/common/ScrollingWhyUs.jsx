import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Image from 'next/image'
import WhyNotAstraunotBlue from '../../public/imgs/whyNotAstraunotBlue.png'

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
                            <h1 className='heading'>Strategic Business Plan</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>In business consultation, you will get a great strategic plan to help your business grow.</p>
                        </div>
                    </div>
                    <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Unique Growth Strategies</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>We will help you build your business and create new strategies for growth.</p>
                        </div>
                    </div>
                    <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Unbiased Feedback</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>In business consultation, you will have an honest opinion about your business and on how you can improve it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollingWhyUs