import React from 'react'
import Image from 'next/image'
import whyUsBlack from '../../public/imgs/whyUsBlack.png'
import whyUsBlue from '../../public/imgs/whyUsBlue.png'

const ScrollingWhyUs = ({ isHome = false }) => {
    return (
        <section className='section scrolling-section'>
            <div className="flex">
                <div className='w-1/2 max-h-screen sticky top-0 left-0 flex justify-center items-center'>
                    <div className='w-[45vw] absolute left-1/2 -translate-x-1/2 bottom-0 hidden lg:block'>
                        {isHome ?
                            <Image src={whyUsBlack} alt="HeroImg" className='w-full h-full' />
                            :
                            <Image src={whyUsBlue} alt="HeroImg" className='w-full h-full' />
                        }
                    </div>
                </div>
                <div className='w-1/2 overflow-y-auto scrolling-whyUs'>
                <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Advanced Marketing Strategies</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>We use advanced and proven strategies to bring results in a cost effective manner.</p>
                        </div>
                    </div>
                    <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>11+ Years of Experience</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>We have 11+ years of experience so we know what works or what doesn&apos;t work.</p>
                        </div>
                    </div>
                    <div className='h-screen flex justify-center items-center'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Detailed Reporting</h1>
                            <p className='trackind-wide font-medium md:font-semibold text-lg '>We provide clear, concise reporting to our clients for their marketing campaigns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollingWhyUs