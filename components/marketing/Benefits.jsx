import Image from 'next/image'
import WhyNotAstraunotBlue from '../../public/imgs/whyNotAstraunotBlue.png'

const Benefits = () => {
    return (
        <section className='section'>
            <div className="section-wrapper">
                <h1 className='heading'>Benefits</h1>
                <div className='flex justify-between items-center gap-16'>
                    <div className='w-[40vw] relative bottom-0 hidden lg:block'>
                        <Image src={WhyNotAstraunotBlue} alt="HeroImg" className='w-full h-full' />
                    </div>
                    <div className='max-w-lg flex justify-center items-center lg:items-start flex-col'>
                        <h1 className='uppercase font-bold mb-6 text-5xl lg:text-5xl text-center'>Quality work</h1>
                        <p className='trackind-wide font-medium md:font-semibold text-2xl text-center lg:text-left'>
                            {`We guarantee that we'll deliver on time beacause we know how important is to you.`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits