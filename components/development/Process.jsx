import Image from 'next/image'
import React from 'react'
import Spaceship from '../../public/imgs/spaceship.png'
import TitleImgCard from '../common/TitleImgCard'

const Process = () => {
    return (
        <section className="section">
            <div className="section-wrapper w-full flex justify-center items-center flex-col gap-2 lg:gap-8">
                <h1 className='heading'>Our Process</h1>
                <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0'>
                    <TitleImgCard
                        className="py-6 px-4 lg:py-6 lg:px-6 max-h-[500px] w-4/5 lg:w-auto overflow-hidden"
                        title='astronaut'
                        imgName={Spaceship}
                        imgClassName='lg:w-40 w-32 relative mx-auto'
                        titleClassName='text-3xl uppercase mb-8 font-bold'
                    />
                    <TitleImgCard
                        className="py-6 px-4 lg:py-6 lg:px-6 max-h-[500px] w-4/5 lg:w-auto overflow-hidden"
                        title='astronaut'
                        imgName={Spaceship}
                        imgClassName='lg:w-40 w-32 relative mx-auto'
                        titleClassName='text-3xl uppercase mb-8 font-bold'
                    />
                    <TitleImgCard
                        className="py-6 px-4 lg:py-6 lg:px-6 max-h-[500px] w-4/5 lg:w-auto overflow-hidden"
                        title='astronaut'
                        imgName={Spaceship}
                        imgClassName='lg:w-40 w-32 relative mx-auto'
                        titleClassName='text-3xl uppercase mb-8 font-bold'
                    />
                    <TitleImgCard
                        className="py-6 px-4 lg:py-6 lg:px-6 max-h-[500px] w-4/5 lg:w-auto overflow-hidden"
                        title='astronaut'
                        imgName={Spaceship}
                        imgClassName='lg:w-40 w-32 relative mx-auto'
                        titleClassName='text-3xl uppercase mb-8 font-bold'
                    />
                    <TitleImgCard
                        className="py-6 px-4 lg:py-6 lg:px-6 max-h-[500px] w-4/5 lg:w-auto overflow-hidden"
                        title='astronaut'
                        imgName={Spaceship}
                        imgClassName='lg:w-40 w-32 relative mx-auto'
                        titleClassName='text-3xl uppercase mb-8 font-bold'
                    />
                </div>
            </div>
        </section>
    )
}

export default Process