import React, { useState } from 'react'
import Image from 'next/image'
import Spaceship from '../../public/imgs/spaceship.png'

const ProcessFlowThird = () => {

    const [headingData, setHeadingData] = useState("BUILD A POWERFUL IMAGE WITH OUR BRANDING SERVICES")
    const [articleData, setArticleData] = useState("We know how important it is for your business to have an identity that’s unique and consistent, so we work with you every step of the way. Our branding services are designed to help you build a strong foundation for your company – one that can grow as big as you dream.")

    function BrandStrategy() {
        setHeadingData("You may have a business but doesn't mean you have a brand")
        setArticleData("A lot of businesses focus on their products and services but forget the importance of branding. At Lapaas, we understand the value of branding and how it can help take your business to the next level. We offer research and thinking services to help you create a powerful and unique brand that will differentiate you from your competitors.")
    }

    function BrandIdentity() {
        setHeadingData("Build brand identity that will help you stand out from the competition")
        setArticleData("Do you need help creating a strong and unique brand identity that will help you stand out from the competition? If so, Lapaas can help. We are experts in brand development and we can create a brand identity for you that will perfectly represent your company and its values.We believe that a well-defined brand is essential for success in today’s competitive marketplace.")
    }

    function BrandLaunch() {
        setHeadingData("Launch Your Dream Brand Easily ")
        setArticleData("Lapaas is a full-service branding and marketing agency that helps entrepreneurs launch their businesses. We understand that starting a business can be daunting, which is why we offer a variety of services to help you every step of the way. We want to make the process as easy as possible so that you can focus on what's important - building your brand.")
    }

    function BrandBuilding() {
        setHeadingData("Take Your Business to New Heights ")
        setArticleData("A strong brand is key to success in any industry. At Lapaas, we understand the importance of branding and how it can help your company reach new heights. Our branding services are designed to help you build a foundation for your company that will stand the test of time. We want to help you create a brand that is authentic to you and your company.")
    }

    return (
        <section className="section transition-all">
            <div className="section-wrapper w-full flex justify-center items-center gap-10 lg:py-4">
                <div className='w-full'>
                    <div className='w-52'>
                        <Image src={Spaceship} alt='Spaceship' />
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center h-full'>
                    <div className='max-w-xl mx-auto'>
                        <h1 className='heading'>{headingData}</h1>
                        {/* <article className='flex justify-evenly items-center w-full h-full'> */}
                        <p className='max-w-xl pb-5'>
                            {articleData}
                        </p>
                        {/* </article> */}

                        <div className='flex justify-center items-center gap-3 flex-wrap mt-auto'>
                            <button onClick={() => BrandStrategy()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Brand Strategy</button>
                            <button onClick={() => BrandIdentity()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Brand Identity</button>
                            <button onClick={() => BrandLaunch()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Brand Launch</button>
                            <button onClick={() => BrandBuilding()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Brand Building</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessFlowThird