import React, { useState } from 'react'
import Image from 'next/image'
import Bulb from '../../public/imgs/bulb.png'
import FloatingAstraunotWhite from '../../public/imgs/floatingAstraunotWhite.png'

const ProcessFlowThird = () => {

    const [headingData, setHeadingData] = useState("BUILD A POWERFUL IMAGE")
    const [articleData, setArticleData] = useState("We know how important it is for your business to have an identity that’s unique and consistent, so we work with you every step of the way. Our branding services are designed to help you build a strong foundation for your company.")

    function BrandStrategy() {
        setHeadingData("Business doesn't mean you have a brand")
        setArticleData("A lot of businesses focus on their products and services but forget the importance of branding. We offer research and thinking services to help you create a powerful and unique brand that will differentiate you from your competitors.")
    }

    function BrandIdentity() {
        setHeadingData("Stand out from the competition")
        setArticleData("We are experts in brand development and we can create a brand identity for you that will perfectly represent your company and its values. We believe that a well-defined brand is essential for success in today’s competitive marketplace.")
    }

    function BrandLaunch() {
        setHeadingData("Launch Your Dream Brand Easily")
        setArticleData("Lapaas is a full-service branding and marketing agency that helps entrepreneurs launch their businesses. We understand that starting a business can be daunting, which is why we offer a variety of services to help you every step of the way")
    }

    function BrandBuilding() {
        setHeadingData("Take Your Business to New Heights")
        setArticleData("A strong brand is key to success in any industry. At Lapaas, we understand the importance of branding and how it can help your company reach new heights. We want to help you create a brand that is authentic to you and your company.")
    }

    return (
        <section className="transition-all section">
            <div className="flex items-center justify-center w-full gap-10 section-wrapper lg:py-4">
                <div class="grid lg:grid-cols-2 gap-4">
                    <div className='mx-auto lg:mx-0'>
                        <div className='w-full'>
                            <div className={`cursor-pointer bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] h-[350px] w-[300px] relative border-8 border-white`} >
                                <h4 className={`text-3xl md:text-4xl lg:text-5xl uppercase mb-8 font-bold z-10 relative`}>Branding</h4>
                                <div className={`absolute top-0 right-0 left-0 bottom-0 img-wrapper z-0`}>
                                    <Image src={Bulb} alt="HeroImg" className='w-full h-full' />
                                </div>
                                <div className={`w-28 h-40 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 img-wrapper z-0`}>
                                    <Image src={FloatingAstraunotWhite} alt="HeroImg" className='w-full h-full' id='heroImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-center justify-center w-full h-full'>
                            <div className='max-w-xl mx-auto'>
                                <h1 className='heading'>{headingData}</h1>
                                <p className='max-w-xl pb-5'>
                                    {articleData}
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4">
                                    <button onClick={() => BrandStrategy()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Brand Strategy</button>
                                    <button onClick={() => BrandIdentity()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Brand Identity</button>
                                    <button onClick={() => BrandLaunch()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Brand Launch</button>
                                    <button onClick={() => BrandBuilding()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Brand Building</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessFlowThird