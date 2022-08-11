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
                        <div className='absolute left-36 top-36 flex flex-col max-w-sm border p-5 gap-4 h-56'>
                            <h2 className='font-bold text-2xl'>1. Understand Your Business</h2>
                            <span>First of all, we understand your business model and total available marketing (TAM), Serviceable available market (SAM) that help us to define your target audience. Then we will plan relevant actions to achieve your organisational goals and vision.</span>
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
                        <div className='absolute left-36 bottom-36 flex flex-col max-w-sm border p-5 gap-4 h-56'>
                            <h2 className='font-bold text-2xl'>2. Frameworks</h2>
                            <span>After understanding your business and target market, we will provide you access to our learning library and frameworks to help you to understand your business in detail and gives you more clarity. Then we focus on improving value streams.</span>
                        </div>
                    </div>
                    <div className='h-screen sticky top-0 z-50'>
                        <div className='absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75'>
                            <Image src={Img1} alt="Img1" className='w-full h-full' />
                        </div>
                        <div className='absolute right-36 top-36 flex flex-col max-w-sm border p-5 gap-4 h-56'>
                            <h2 className='font-bold text-2xl'>3. Guidance</h2>
                            <span>After solving frameworks and understanding your business, we will discuss in detail about your problems and figure out how we can solve them. We will provide proper guidance in order to eliminate basic mistakes and give you proper direction.</span>
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
                        <div className='absolute right-36 bottom-36 flex flex-col max-w-sm border p-5 gap-4 h-56'>
                            <h2 className='font-bold text-2xl'>4. Actionable Worksheet</h2>
                            <span>After understanding everything about your business, then you have to start taking action and executing all the strategies. We will provide you with an actionable worksheet that will give you direction, how you should implement your actions.</span>
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
