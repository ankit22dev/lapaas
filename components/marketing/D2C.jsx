import React from 'react'
import ChartBox from '../common/ChartBox'

const D2C = () => {
    return (
        <section className='section'>
            <div className="flex flex-col items-center justify-center gap-8 section-wrapper">
                <h1 className='heading'>D2C</h1>
                <div className='flex items-center justify-between gap-16'>
                    <ChartBox
                        data={[
                            {
                                name: 'cac',
                                percantage: 33
                            },
                            {
                                name: 'aov',
                                percantage: 45
                            },
                            {
                                name: 'cr',
                                percantage: 33
                            },
                            {
                                name: 'ltv',
                                percantage: 66
                            },
                            {
                                name: 'order',
                                percantage: 75
                            },
                            {
                                name: 'traffic',
                                percantage: 33
                            },
                        ]}
                    />
                    {/* <div className='w-[40vw] relative bottom-0 hidden lg:block'>
                <Image src={WhyNotAstraunotBlue} alt="HeroImg" className='w-full h-full' />
            </div> */}
                    <div className='flex flex-col items-center justify-center max-w-lg lg:items-start'>
                        <p className='text-2xl font-medium text-center trackind-wide md:font-semibold lg:text-left'>
                            We have helped more than 42 brands to get more customers through our Proven
                            Marketing Strategies. We have helped them to reduce their customer acquisition cost by
                            42% and increased their average order value by 136% to increase their profitability by 37%.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default D2C