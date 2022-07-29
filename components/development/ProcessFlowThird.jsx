import React, { useState } from 'react'
import TitleCard from '../common/TitleCard'
import Image from 'next/image'
import Spaceship from '../../public/imgs/spaceship.png'
import Logo from '../../public/imgs/logoWithName.png'

const ProcessFlowThird = () => {

    const [headingData, setHeadingData] = useState("Conceptualization Your Idea ")
    const [articleData, setArticleData] = useState("We help you take your product from concept to reality. We specialise in rapid prototyping, which allows us to create a prototype in a fraction of the time it would take using traditional methods. This means you can test your product’s feasibility and get feedback from potential customers faster than ever before. We want to help you bring your product to market as quickly and efficiently as possible. ")

    function Prototyping() {
        setHeadingData("Conceptualization Your Idea ")
        setArticleData("We help you take your product from concept to reality. We specialise in rapid prototyping, which allows us to create a prototype in a fraction of the time it would take using traditional methods. This means you can test your product’s feasibility and get feedback from potential customers faster than ever before. We want to help you bring your product to market as quickly and efficiently as possible. ")
    }

    function MVP() {
        setHeadingData("Validate Your Idea ")
        setArticleData("We can help you develop your idea into a Minimum Viable Product (MVP). This is the simplest, most essential version of your product that will allow you to test your assumptions and get feedback from customers. Once you have an MVP, we can help you validate your idea by getting feedback from potential customers. ")
    }

    function WebsiteDevelopment() {
        setHeadingData("GET SEO FRIENDLY WEBSITE FOR YOUR BUSINESS")
        setArticleData("Lapaas is a leading website development company that provides affordable web design services. Our design services not only help you stand out from the crowd but also help you to get more sales and leads.")
    }

    function AppDevelopment() {
        setHeadingData("BEST MOBILE APP DEVELOPMENT COMPANY")
        setArticleData("Our top-notch developers focus on your specifications and requirements to ensure that we create an app that is tailored to your needs. With our expertise, we can help you develop a high quality product within budget and in time.")
    }

    return (
        <section className="transition-all section">
            <div className="flex items-center justify-center w-full gap-10 section-wrapper lg:py-4">
                <div className='w-full'>
                    <div className='w-52'>
                        <Image src={Spaceship} alt='Spaceship' />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='max-w-xl mx-auto'>
                        <h1 className='heading'>{headingData}</h1>
                        {/* <article className='flex items-center w-full h-full justify-evenly'> */}
                        <p className='max-w-xl pb-5'>
                            {articleData}
                        </p>
                        {/* </article> */}

                        {/* <div className='flex flex-wrap items-center justify-center gap-3 mt-auto'>
                            <button onClick={() => Prototyping()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Prototyping</button>
                            <button onClick={() => MVP()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>MVP</button>
                            <button onClick={() => WebsiteDevelopment()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Website Development</button>
                            <button onClick={() => AppDevelopment()} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>App Development</button>
                        </div> */}
                        <div class="grid grid-cols-2 md:grid-cols-4">
                            <button onClick={() => Prototyping()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Prototyping</button>
                            <button onClick={() => MVP()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>MVP</button>
                            <button onClick={() => WebsiteDevelopment()} className={'border-2 m-1 border-white py-2 bg-mainRed text-white'}>Website Development</button>
                            <button onClick={() => AppDevelopment()} className={'border-2 m-1  border-white py-2 bg-mainRed text-white'}>App Development</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessFlowThird
