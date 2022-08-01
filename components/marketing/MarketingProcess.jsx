import React from 'react'
import TitlePara from '../common/TitlePara'
import Image from 'next/image'
import LeftArrow from '../../public/svgs/left-arrow.svg'

const CaseStudy = () => {
    return (
        <section className="section">
            <div className="flex flex-col items-center justify-center gap-8 section-wrapper lg:gap-12">
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className='mb-4 text-xl font-bold uppercase lg:text-5xl'>Marketing Process</h2>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col items-center justify-between gap-2 lg:flex-row'>
                        <TitlePara
                            title='Market Research'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={'First of all, we understand your business and the feasibility of the business. Then we identify the target market and try to develop potential new markets. Then we decide how, when and where the product should enter the market.'}
                        />
                        <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                            <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                        </div>
                        <TitlePara
                            title='Competitor Analysis'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"We research your competitors, what are their USP’s, pricing, market share, etc. We analyse how your competitor markets their products/services, what marketing tactics they are following and how they are engaging with their customers."}
                        />
                        <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                            <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                        </div>
                        <TitlePara
                            title='strategy formulation'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"We make custom strategies on the behalf of the information we gathered and take the most appropriate actions to achieve your organisational vision."}
                        />
                    </div>
                    <div className='flex flex-col items-center justify-between gap-2 lg:flex-row'>
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
                            title='Measure'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"After properly executing actions, we gather the data and analyse it to make more improvements in the product/service."}
                        />
                        <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                            <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                        </div>
                        <TitlePara
                            title='Report'
                            titleClassName={'text-3xl uppercase font-bold mb-6'}
                            className={'col-span-3 py-6 lg:py-10 px-4 text-center h-full w-full'}
                            textClassName={'flex flex-col justify-center items-center gap-2'}
                            text={"We provide a detailed report sheet to our clients of their campaign’s activity,"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy