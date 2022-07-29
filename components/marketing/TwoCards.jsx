import AstraunotDrinkingCofee from '../../public/imgs/astraunotDrinkingCofee.png'
import AstraunotWithFlag from '../../public/imgs/astraunotWithFlag.png'
import TitleImgCard from '../common/TitleImgCard'


const TwoCards = ({ comp }) => {
    return (
        <section className='section'>
            <div className='section-wrapper flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-28 h-full'>
                <TitleImgCard
                    title={'Branding'}
                    titleClassName='text-5xl uppercase mb-8 font-bold'
                    imgName={AstraunotWithFlag}
                    imgClassName={'absolute top-0 right-0 left-0 bottom-0 img-wrapper'}
                    className='border-8 cursor-pointer border-white bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] h-[350px] w-[300px]'
                    onClick={() => {
                        comp.fullpageApi.moveTo(3);
                    }}
                />
                <TitleImgCard
                    title={'Performance'}
                    titleClassName='text-5xl uppercase mb-8 font-bold'
                    imgName={AstraunotDrinkingCofee}
                    imgClassName={'lg:w-72 w-32 relative mx-auto'}
                    className='border-8 cursor-pointer border-white bg-mainRed text-center py-8 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] h-[350px] w-[300px]'
                    onClick={() => {
                        comp.fullpageApi.moveTo(4);
                    }}
                />
            </div>
        </section>
    )
}

export default TwoCards