import React from 'react'
import Image from 'next/image'
import whyUsBlack from '../../public/imgs/whyUsBlack.png'
import whyUsBlue from '../../public/imgs/whyUsBlue.png'

const ScrollingWhyUs = ({ isHome = false }) => {
    return (
        <section className='section scrolling-section'>
            <div className="flex">
                <div className='sticky top-0 left-0 flex items-center justify-center max-h-screen lg:w-1/2'>
                    <div className='w-[45vw] absolute left-1/2 -translate-x-1/2 bottom-0 hidden lg:block'>
                        {isHome ?
                            <Image src={whyUsBlack} alt="HeroImg" className='w-full h-full' />
                            :
                            <Image src={whyUsBlue} alt="HeroImg" className='w-full h-full' />
                        }
                    </div>
                </div>
                <div className='w-full overflow-y-auto lg:w-1/2 scrolling-whyUs'>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Proven Strategies</h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold '>
                                We use advanced and proven strategies to bring results in a cost effective manner.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>11+ Years of Experience</h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold '>
                                We have 11+ years of experience so we know what works or what doesn't work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollingWhyUs