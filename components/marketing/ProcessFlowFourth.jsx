import React, { useState } from 'react'
import TitleCard from '../common/TitleCard'
import Image from 'next/image'
import Spaceship from '../../public/imgs/spaceship.png'

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