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
                            <h1 className='heading'>We work like our business</h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold md:text-xl'>
                                We provide our services as it is our business. We offer an array of packages to suit all needs.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Affordable</h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold md:text-xl'>
                                Our clients love us because we provide affordable services without losing the quality.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-screen'>
                        <div className='max-w-lg px-4 text-center'>
                            <h1 className='heading'>Get Most Out of Your Budget </h1>
                            <p className='text-lg font-medium trackind-wide md:font-semibold md:text-xl'>
                                Our team of experts work very hard for your business, so you can get maximum results from your resources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollingWhyUs