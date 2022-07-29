import Image from 'next/image'
import FloatingAstraunotBlack from '../../public/imgs/floatingAstraunotWhite.png'


const FlyingAstro = () => {
    return (
        <section className='section'>
            <div className="section-wrapper md:w-full flex justify-center lg:justify-between items-center">
                <div className='w-80 relative hidden lg:block' id='flyingAstroImg'>
                    <Image src={FloatingAstraunotBlack} alt="HeroImg" className='w-full h-full' />
                </div>
                <div className='max-w-lg flex justify-center items-center flex-col'>
                    <h1 className='heading'>astronaut</h1>
                    <p className='trackind-wide font-medium md:font-semibold text-lg text-center lg:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident fuga autem enim
                        assumenda beatae numquam aut neque eaque, quas corrupti. Accusantium alias minima vel, minus perspiciatis
                        nemo repellat accusamus ex aut magnam blanditiis ut ipsam explicabo quae sint non porro eligendi possimus
                        facilis dolorum cupiditate ratione laborum obcaecati.</p>
                </div>
            </div>
        </section>
    )
}

export default FlyingAstro