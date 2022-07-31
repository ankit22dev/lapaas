import React from 'react'
import TitlePara from '../common/TitlePara'
import Image from 'next/image'
import LeftArrow from '../../public/svgs/left-arrow.svg'

const CaseStudy = () => {
    return (
        <section className="section">
            <div className="section-wrapper flex justify-center items-center flex-col gap-8 lg:gap-12">
                <div className='text-center max-w-3xl mx-auto'>
                    <h2 className='uppercase font-bold mb-4 text-xl lg:text-5xl'>Marketing Process</h2>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                        <TitlePara
                            title='Market Research'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={'We try to understand your business and discover the target market and get feedback from consumers about their interest.'}
                        />
                        <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                            <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                        </div>
                        <TitlePara
                            title='Competitor Analysis'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"After knowing the market, we research your competitors and analyse them to get insights of their products, sales and marketing, etc."}
                        />
                        <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                            <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                        </div>
                        <TitlePara
                            title='Strategy formulation'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"We make custom strategies on the behalf of the information we gathered and take the most appropriate actions to achieve your organisational vision."}
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                        <TitlePara
                            title='Execution'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"After creating strategies, we will implement all actions in the best possible way, so the product/service can reach the maximum audience."}
                        />
                        <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                            <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                        </div>
                        <TitlePara
                            title='Report'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"We provide a detailed report sheet to our clients of their campaign’s activity"}
                        />
                        <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                            <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                        </div>
                        <TitlePara
                            title='Measure'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"After properly executing actions, we gather the data and analyse it to make more improvements in the product/service."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy