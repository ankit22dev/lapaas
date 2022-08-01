import React, { useState } from 'react'
import Image from 'next/image'

import MoonSurfaceRed from '../../public/imgs/moonSurfaceRed.png'
import SkatingAstraunot from '../../public/imgs/skatingAstraunot.png'


const ProcessFlowFourth = () => {
    const [headingData, setHeadingData] = useState("Get More Sales Easily")
    const [articleData, setArticleData] = useState("We have a proven track record of success in the performance marketing space. Our team has been working with clients for over 10 years and we have seen it all! Let us help you drive more traffic, lower costs and provide real results.")

    function BehaviouralMarketing() {
        setHeadingData("Engage with your customers in Most Effective Way")
        setArticleData("Behavioural Marketing is one of the most cost-effective ways to reach customers at a scalable level. It’s surprisingly cheaper than other marketing strategies in the long term, because you can reach a huge customer base at once for a relatively low cost.")
    }

    function IntentMarketing() {
        setHeadingData("Convert Right Customer Into Sales")
        setArticleData("Intent Marketing with an experienced firm like ours is an excellent way to reach new customers interested in your products. You can trust our expertise when it comes to making sure that your campaign is maximising its potential.")
    }

    function IntegratedMarketing() {
        setHeadingData("Get Most out of your marketing efforts")
        setArticleData("You deserve an experienced team who can make sense of your marketing campaign and help you get the most out of your advertising spend. We will manage your campaigns so that they work for YOU, not against you.")
    }

    return (
        <section className="transition-all section">
            <div className="flex items-center justify-center w-full gap-10 section-wrapper lg:py-4">
                <div class="grid lg:grid-cols-2 gap-4">
                    <div className='mx-auto lg:mx-0'>
                        <div className='w-full'>
                            <div className={`cursor-pointer bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] h-[350px] w-[300px] relative border-8 border-white`}>
                                <h4 className={`text-3xl md:text-4xl lg:text-5xl uppercase mb-8 font-bold z-10 relative`}>Branding</h4>
                                <div className={`absolute left-0 bottom-0  img-wrapper z-0`}>
                                    <Image src={MoonSurfaceRed} alt="HeroImg" className='w-full h-full' />
                                </div>
                                <div className={`w-56 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 img-wrapper z-0`}>
                                    <Image src={SkatingAstraunot} alt="HeroImg" className='w-full h-full' id='heroImg' />
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
                                <div className="grid grid-cols-2 md:grid-cols-3">
                                    <button onClick={() => BehaviouralMarketing()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Behavioural Marketing</button>
                                    <button onClick={() => IntentMarketing()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Intent Marketing</button>
                                    <button onClick={() => IntegratedMarketing()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Integrated Marketing</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessFlowFourth