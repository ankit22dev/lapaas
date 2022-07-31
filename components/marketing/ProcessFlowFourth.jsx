import React, { useState } from 'react'
import Image from 'next/image'

import MoonSurfaceRed from '../../public/imgs/moonSurfaceRed.png'
import SkatingAstraunot from '../../public/imgs/skatingAstraunot.png'


const ProcessFlowFourth = () => {
    const [headingData, setHeadingData] = useState("BOOST YOUR ROI WITH PERFORMANCE MARKETING")
    const [articleData, setArticleData] = useState("We have a proven track record of success in the performance marketing space. Our team has been working with clients for over 10 years and we have seen it all! Let us help you drive more traffic, increase conversions, lower costs and provide real results")

    function BehaviouralMarketing() {
        setHeadingData("Behavioural Marketing- Engage with your customers in Most Effective Way ")
        setArticleData("Behavioral Marketing  is one of the most cost-effective ways to reach customers at a scalable level. It’s surprisingly cheaper than other marketing strategies in the long term, because you can reach a huge customer base at once for a relatively low cost.. Lapaas helps businesses like yours get more website traffic and increase sales by leveraging our expertise in Behavioural Marketing.")
    }

    function IntentMarketing() {
        setHeadingData("Intent Marketing- Convert Right Customer Into Sales ")
        setArticleData("Intent Marketing with an experienced firm like ours is an excellent way to reach new customers interested in your products and help turn browsers into buyers. Our team of experts helps to effective campaigns that convert the right customers into leads and sales.You can trust our expertise when it comes to making sure that your campaign is maximising its potential at every stage of the process")
    }

    function IntegratedMarketing() {
        setHeadingData("Integrated Marketing- Get Most out of your marketing efforts ")
        setArticleData("You deserve an experienced team who can make sense of your marketing campaign and help you get the most out of your advertising spend.  Let us help you! We are experts in integrated marketing and we will manage your campaigns so that they work for YOU, not against you. Our team has been working with clients for over 10 years and we have seen it all!")
    }

    return (
        <section className="section transition-all">
            <div className="section-wrapper w-full flex justify-center items-center gap-10 lg:py-4">
                <div className='w-full'>
                <div className={`cursor-pointer bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] h-[350px] w-[300px] relative border-8 border-white`}>
                    <h4 className={`text-5xl uppercase mb-8 font-bold z-10 relative`}>Branding</h4>
                    <div className={`absolute left-0 bottom-0  img-wrapper z-0`}>
                        <Image src={MoonSurfaceRed} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <div className={`w-56 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 img-wrapper z-0`}>
                        <Image src={SkatingAstraunot} alt="HeroImg" className='w-full h-full' id='heroImg' />
                    </div>
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
                            <button onClick={() => BehaviouralMarketing()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Behavioural Marketing</button>
                            <button onClick={() => IntentMarketing()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Intent Marketing</button>
                            <button onClick={() => IntegratedMarketing()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Integrated Marketing</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessFlowFourth