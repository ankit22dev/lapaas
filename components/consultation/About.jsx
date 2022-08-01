import Image from 'next/image'
import FloatingAstraunotBlack from '../../public/imgs/floatingAstraunotWhite.png'

const About = () => {
    return (
        <section className='section'>
            {/* <div className="section-wrapper md:w-full flex justify-center lg:justify-between items-center"> */}
                {/* <div className="section-wrapper md:w-full flex justify-between items-center"> */}
                <div className="flex items-center justify-center lg:justify-between section-wrapper md:w-full">
                <div className='w-96 relative hidden lg:block' id='flyingAstroImg'>
                    <Image src={FloatingAstraunotBlack} alt="HeroImg" className='w-full h-full' />
                </div>
                <div className='max-w-lg flex justify-center items-center flex-col'>
                    <h1 className='heading'>About Us</h1>
                    <p className='trackind-wide font-medium md:font-semibold text-lg'>
                    Lapaas Digital is a leading digital marketing company which helps businesses to grow their digital presence. Lapaas Digital not only follows the latest trends in digital marketing, but also focuses on core fundamentals of business and marketing to help your business reach its full potential through well-planned strategies. With over 10 years of experience under our belt, we are experts at what we do.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
