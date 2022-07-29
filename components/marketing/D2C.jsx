import React from 'react'
import ChartBox from '../common/ChartBox'

const D2C = () => {
    return (
        <section className='section'>
            <div className="section-wrapper flex flex-col justify-center items-center gap-8">
                <h1 className='heading'>D2C</h1>
                <div className='flex justify-between items-center gap-16'>
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
                    <div className='max-w-lg flex justify-center items-center lg:items-start flex-col'>
                        <p className='trackind-wide font-medium md:font-semibold text-2xl text-center lg:text-left'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam provident consectetur ab accusamus nesciunt at
                            neque architecto quo quaerat earum quibusdam nisi, culpa, molestiae modi eos aliquam! Tempora ratione neque accusamus
                            ipsam magni ab perspiciatis ad id perferendis distinctio, consequuntur deleniti.
                            Corrupti fugiat voluptates minima perferendis, perspiciatis reprehenderit natus dolorum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default D2C