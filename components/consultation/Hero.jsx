import Image from 'next/image'
import HeroImg from '../../public/imgs/heroImg.png'



const Hero = () => {
    return (
        <section className="section">
            <div className="section-wrapper w-full mx-auto flex justify-center lg:justify-between items-center h-full">
                <div className="max-w-2xl flex flex-col justify-center items-center gap-8">
                    <div className='uppercase'>
                        <h1 className="text-5xl mb-2">Transform your business with business consulting services</h1>
                        <h6 className='text-xl'>Guidance from entrepreneur sahil khaana</h6>
                    </div>
                    <div className="space-y-6 tracking-wider">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe eum possimus ex accusantium consequuntur reiciendis voluptatum
                            maiores quaerat quis, explicabo nesciunt suscipit molestiae rerum itaque eaque sunt unde dolorum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe eum possimus ex accusantium consequuntur reiciendis voluptatum
                            maiores quaerat quis, explicabo nesciunt suscipit molestiae rerum itaque eaque sunt unde dolorum?</p>
                    </div>
                </div>
                <div className='hidden lg:block'></div>
                <div className='w-96 absolute bottom-10 right-40 hidden lg:block' id='heroImg'>
                    <Image src={HeroImg} alt="HeroImg" className='w-full h-full' />
                </div>
            </div>
        </section>
    )
}

export default Hero