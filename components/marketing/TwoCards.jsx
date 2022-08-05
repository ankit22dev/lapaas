import Image from 'next/image'
import Bulb from '../../public/imgs/bulb.png'
import FloatingAstraunotWhite from '../../public/imgs/floatingAstraunotWhite.png'
import MoonSurfaceRed from '../../public/imgs/moonSurfaceRed.png'
import SkatingAstraunot from '../../public/imgs/skatingAstraunot.png'


const TwoCards = ({ comp }) => {
    return (
        <section className='section'>
            <div className='flex flex-col items-center justify-center h-full gap-3 section-wrapper md:flex-row md:gap-10 lg:gap-28'>
                <div className={`cursor-pointer bg-mainRed text-center py-3 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] md:h-[350px] md:w-[300px] h-[280px] w-[280px] relative border-8 border-white`} onClick={() => {
                    comp.fullpageApi.moveTo(3);
                }}>
                    <h4 className={`text-3xl md:text-4xl lg:text-5xl uppercase mb-8 font-bold z-10 relative`}>Branding</h4>
                    <div className={`absolute top-0 right-0 left-0 bottom-0 img-wrapper z-0`}>
                        <Image src={Bulb} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <div className={`w-20 md:w-28 h-32 md:h-40 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 img-wrapper z-0`}>
                        <Image src={FloatingAstraunotWhite} alt="HeroImg" className='w-full h-full' id='heroImg' />
                    </div>
                </div>
                <div className={`cursor-pointer bg-mainRed text-center py-3 px-4 lg:py-10 lg:px-8 xl:h-[500px] xl:w-[450px] lg:h-[450px] lg:w-[400px] md:h-[350px] md:w-[300px] h-[280px] w-[280px] relative border-8 border-white`} onClick={() => {
                    comp.fullpageApi.moveTo(4);
                }}>
                    <h4 className={`text-3xl md:text-4xl lg:text-5xl uppercase mb-8 font-bold z-10 relative`}>Performance</h4>
                    <div className={`absolute left-0 bottom-0  img-wrapper z-0`}>
                        <Image src={MoonSurfaceRed} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <div className={`w-100 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 img-wrapper z-0`}>
                        <Image src={SkatingAstraunot} alt="HeroImg" className='w-full h-full' id='heroImg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoCards