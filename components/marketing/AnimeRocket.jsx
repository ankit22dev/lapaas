import Image from 'next/image'

// images
import Img1 from '../../public/imgs/rocketParts/1.png'
import Img2 from '../../public/imgs/rocketParts/2.png'
import Img3 from '../../public/imgs/rocketParts/3.png'
import Img4 from '../../public/imgs/rocketParts/4.png'
import Img5 from '../../public/imgs/rocketParts/5.png'
import Img6 from '../../public/imgs/rocketParts/6.png'
import Fire1 from '../../public/imgs/rocketParts/fire1.png'

const AnimeRocket = () => {
    return (
        <section className="section scrolling-section">
            <div className="flex">
                <div className='w-full overflow-y-clip'>
                    <div className='h-screen sticky top-0 z-10'>
                        <div className='absolute scale-[1.8] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <Image src={Img6} alt="Img6" className='w-full h-full' />
                        </div>
                        <div className='animeBox left-36 top-24'>
                            <h2 className='font-bold text-2xl capitalize'>1. Market research</h2>
                            <span>First of all, we understand your business and the feasibility of the business. Then we identify the target market and try to develop potential new markets. Then we decide how, when and where the product should enter the market.</span>
                        </div>
                    </div>
                    <div className='h-screen sticky top-0 z-30'>
                        <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[140px]'>
                            <div className='transform scale-[1.5]'>
                                <Image src={Img4} alt="Img4" className='w-full h-full' />
                            </div>
                            <div className='transform scale-[1.5]'>
                                <Image src={Img5} alt="Img5" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='absolute left-36 top-[40%] flex flex-col max-w-sm gap-4'>
                            <div className='animeBox-inner'>
                                <h2 className='font-bold text-2xl capitalize'>2. Competitor Analysis</h2>
                                <span>We research your competitors, what are their USP’s, pricing, market share, etc. We analyse how your competitor markets their products/services, what marketing tactics they are following and how they are engaging with their customers.</span>
                            </div>
                            <div className='animeBox-inner'>
                                <h2 className='font-bold text-2xl capitalize'>3. Strategy formulation</h2>
                                <span>We make custom strategies on the behalf of the information we gathered and take the most appropriate actions to achieve your organisational vision.</span>
                            </div>
                        </div>
                    </div>
                    <div className='h-screen sticky top-0 z-50'>
                        <div className='absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75'>
                            <Image src={Img1} alt="Img1" className='w-full h-full' />
                        </div>
                        <div className='animeBox right-36 top-24'>
                            <h2 className='font-bold text-2xl capitalize'>4. Execution </h2>
                            <span>After creating strategies, we will implement all actions in the best possible way, so the product/service can reach the maximum audience.</span>
                        </div>
                    </div>
                    <div className='h-screen sticky top-0 z-40'>
                        <div className='absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[72px] '>
                            <div className=''>
                                <Image src={Img3} alt="Img3" className='w-full h-full' />
                            </div>
                            <div className=''>
                                <Image src={Img2} alt="Img2" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='absolute right-36 top-[40%] flex flex-col max-w-sm gap-4'>
                            <div className='animeBox-inner'>
                                <h2 className='font-bold text-2xl capitalize'>5. Measure</h2>
                                <span>After properly executing actions, we gather the data and analyse it to make more improvements in the product/service.</span>
                            </div>
                            <div className='animeBox-inner'>
                                <h2 className='font-bold text-2xl capitalize'>6. Report</h2>
                                <span>We provide a detailed report sheet to our clients of their campaign’s activity.</span>
                            </div>
                        </div>
                    </div>
                    <div className='h-screen sticky top-0 z-40'>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.4] flex justify-center items-center gap-[10px]'>
                            <div className=''>
                                <Image src={Fire1} alt="Fire1" className='w-full h-full' />
                            </div>
                            <div className=''>
                                <Image src={Fire1} alt="Fire1" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnimeRocket
