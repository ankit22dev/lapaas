import Image from 'next/image'
import SayingHIastraunotBlack from '../../public/imgs/floatingAstraunotWhite.png'

const SMMImgAndDetails = () => {
    return (
        <section className='section'>
            <div className='flex flex-wrap flex-row justify-center items-center gap-4 xl:grid xl:grid-cols-3 mx-5'>
                <div className='bg-mainRed/40 img-card mx-5'>
                    <div className='xl:w-80 w-72'>
                        <Image src={SayingHIastraunotBlack} alt='SayingHIastraunotBlack' className='w-full h-full' />
                    </div>
                </div>
                <div className='bg-black/10 img-card col-span-2'>
                    <p className='trackind-wide font-medium md:font-semibold text-xl text-center xl:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident fuga autem enim
                        assumenda beatae numquam aut neque eaque, quas corrupti. Accusantium alias minima vel, minus perspiciatis
                        nemo repellat accusamus ex aut magnam blanditiis ut ipsam explicabo quae sint non porro eligendi possimus
                        facilis dolorum cupiditate ratione laborum obcaecati.</p>
                </div>
            </div>
        </section>
    )
}

export default SMMImgAndDetails