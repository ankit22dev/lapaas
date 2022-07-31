import Image from 'next/image'
import SayingHIastraunotBlack from '../../public/imgs/floatingAstraunotWhite.png'

const ThreeImgs = () => {
    return (
        <section className='section'>
            <div className='flex h-full flex-wrap flex-row justify-center items-center gap-4 lg:grid lg:grid-cols-3'>
                <div className='bg-mainRed/40 img-card'>
                    <div className='xl:w-80 w-64'>
                        <Image src={SayingHIastraunotBlack} alt='SayingHIastraunotBlack' className='w-full h-full' />
                    </div>
                    <button className='liteYellow-btn'>astronaut</button>
                </div>
                <div className='bg-black/10 img-card'>
                    <div className='xl:w-80 w-64'>
                        <Image src={SayingHIastraunotBlack} alt='SayingHIastraunotBlack' className='w-full h-full' />
                    </div>
                    <button className='red-btn'>astronaut</button>
                </div>
                <div className='bg-mainRed/40 img-card'>
                    <div className='xl:w-80 w-64'>
                        <Image src={SayingHIastraunotBlack} alt='SayingHIastraunotBlack' className='w-full h-full' />
                    </div>
                    <button className='liteYellow-btn'>astronaut</button>
                </div>
            </div>
        </section>
    )
}

export default ThreeImgs