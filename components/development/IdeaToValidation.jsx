import React from 'react'
import Image from 'next/image'
import AstraunotHead from '../../public/imgs/astraunotHead.png'
import LeftArrow from '../../public/svgs/left-arrow.svg'
import Logo from '../../public/imgs/logoWithName.png'

const IdeaToValidation = () => {
    return (
        <section className="section">
            <div className="section-wrapper flex justify-center w-full items-center flex-col gap-6 lg:gap-12 h-full">
                <h3 className="heading">Idea to validation</h3>
                <div className='flex flex-col lg:flex-row justify-evenly items-center w-full'>
                    <div className='lg:w-80 w-44'>
                        <Image src={AstraunotHead} alt="AstraunotHead" className='w-full h-full' />
                    </div>
                    <div className='flex'>
                        <div className='hidden lg:block'>
                            <Image src={LeftArrow} alt="AstraunotHead" className='w-full h-full' />
                        </div>
                        <div className='hidden lg:block'>
                            <Image src={LeftArrow} alt="AstraunotHead" className='w-full h-full' />
                        </div>
                        <div className='w-12 lg:w-auto rotate-90 lg:rotate-0'>
                            <Image src={LeftArrow} alt="AstraunotHead" className='w-full h-full' />
                        </div>
                    </div>
                    <div className='lg:w-80 w-44'>
                        <Image src={Logo} alt="AstraunotHead" className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IdeaToValidation