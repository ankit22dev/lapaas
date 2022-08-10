import React from 'react'
import Image from 'next/image'

import Img1 from '../public/imgs/rocketParts/1.png'
import Img2 from '../public/imgs/rocketParts/2.png'
import Img3 from '../public/imgs/rocketParts/3.png'
import Img4 from '../public/imgs/rocketParts/4.png'
import Img5 from '../public/imgs/rocketParts/5.png'
import Img6 from '../public/imgs/rocketParts/6.png'
import Img7 from '../public/imgs/rocketParts/7.png'
import Fire1 from '../public/imgs/rocketParts/fire1.png'

const temp = () => {
    return (
        <div className='relative text-black'>
            <div className='h-screen sticky top-0 z-10'>
                <div className='absolute scale-[1.8] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Image src={Img6} alt="Img6" className='w-full h-full' />
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
            </div>
            <div className='h-screen sticky top-0 z-50'>
                <div className='absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75'>
                    <Image src={Img1} alt="Img1" className='w-full h-full' />
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
            {/* <div className='h-screen flex justify-center items-center sticky top-0'>
                <div className='h-full'>
                    <Image src={Img1} alt="Img1" className='w-full h-full' />
                </div>
            </div>
            <div className='h-screen flex justify-center items-center sticky top-32 gap-28'>
                <div className='h-full'>
                    <Image src={Img3} alt="Img3" className='w-full h-full' />
                </div>
                <div className='h-full'>
                    <Image src={Img2} alt="Img2" className='w-full h-full' />
                </div>
            </div>
            <div className='h-screen flex justify-center items-center sticky top-72 gap-28'>
                <div className='h-full'>
                    <Image src={Img4} alt="Img4" className='w-full h-full' />
                </div>
                <div className='h-full'>
                    <Image src={Img5} alt="Img5" className='w-full h-full' />
                </div>
            </div>
            <div className='h-screen flex justify-center items-center sticky top-0'>
                <div className='h-full'>
                    <Image src={Img6} alt="Img6" className='w-full h-full' />
                </div>
            </div>
            <div className='h-screen flex justify-center items-center sticky top-0'>
                <div className='h-full'>
                    <Image src={Img7} alt="Img7" className='w-full h-full' />
                </div>
            </div> */}
        </div>
    )
}

export default temp