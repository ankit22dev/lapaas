import Image from 'next/image'
import floatingAstraunotBlack from '../../public/imgs/floatingAstraunotBlack.png'
import TitleImgCard from '../common/TitleImgCard'


const ServicesCard = () => {
    return (
        <section className='section'>
            <div className='section-wrapper h-full flex justify-center items-center flex-col gap-4'>
                <h1 className='heading'>Services</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-28'>
                    <TitleImgCard
                        title={'astronaut'}
                        titleClassName='text-5xl uppercase mb-8 font-bold'
                        imgName={floatingAstraunotBlack}
                        imgClassName={'w-44 mx-auto relative bottom-0'}
                        className='border-8 border-white bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 max-h-[500px]'
                    />
                    <TitleImgCard
                        title={'astronaut'}
                        titleClassName='text-5xl uppercase mb-8 font-bold'
                        imgName={floatingAstraunotBlack}
                        imgClassName={'w-44 mx-auto relative bottom-0'}
                        className='border-8 border-white bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 max-h-[500px]'
                    />
                </div>
            </div>
        </section>
    )
}

export default ServicesCard