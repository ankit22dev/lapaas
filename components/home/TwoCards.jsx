import Router from 'next/router'
// imgs
import AstraunotDrinkingCofee from '../../public/imgs/astraunotDrinkingCofee.png'
import astraunotincup from '../../public/imgs/astraunot in cup with white fill.png'
import TitleImgCard from '../common/TitleImgCard'



const TwoCards = () => {
    return (
        <section className='section'>
            <div className='flex flex-col items-center justify-center h-full gap-6 section-wrapper md:flex-row md:gap-10 lg:gap-28'>
                <TitleImgCard
                    title={'Marketing'}
                    titleClassName='text-3xl md:text-4xl lg:text-5xl uppercase mb-8 font-bold'
                    imgName={astraunotincup}
                    // imgClassName={'absolute top-0 right-0 left-0 bottom-0 img-wrapper'}
                    imgClassName={'lg:w-80 w-40 relative mx-auto'}
                    className='border-8 cursor-pointer border-white bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] md:h-[350px] md:w-[300px]  h-[280px] w-[270px]'
                    onClick={() => {
                        Router.push('/marketing')
                    }}
                />
                <TitleImgCard
                    title={'Development'}
                    titleClassName='text-3xl md:text-4xl lg:text-5xl uppercase mb-8 font-bold'
                    imgName={AstraunotDrinkingCofee}
                    imgClassName={'lg:w-72 w-32 relative mx-auto'}
                    className='border-8 cursor-pointer border-white bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] md:h-[350px] md:w-[300px]  h-[280px] w-[270px]'
                    onClick={() => {
                        Router.push('/development')
                    }}
                />
            </div>
        </section>
    )
}

export default TwoCards