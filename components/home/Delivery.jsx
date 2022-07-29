import React from 'react'
import Image from 'next/image'
import WhyNotAstraunotBlue from '../../public/imgs/whyNotAstraunotBlue.png'


const Delivery = () => {
    return (
        <section className='section'>
            <div className="max-w-7xl h-full flex mx-auto justify-between items-center gap-16">
                <div className='w-[40vw] relative bottom-0 hidden lg:block'>
                    <Image src={WhyNotAstraunotBlue} alt="HeroImg" className='w-full h-full' />
                </div>
                <div className='max-w-lg flex justify-center items-center lg:items-start flex-col'>
                    <h1 className='uppercase font-bold mb-6 text-5xl lg:text-7xl text-center'>On Time Delivery</h1>
                    <p className='trackind-wide font-medium md:font-semibold text-lg text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, velit!</p>
                </div>
            </div>
        </section>
    )
}

export default Delivery