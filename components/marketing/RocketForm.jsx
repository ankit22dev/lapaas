import Image from 'next/image'
import SpaceShip from '../../public/imgs/spaceship.png'



const RocketForm = () => {
    return (
        <section className="section">
            <div className="section-wrapper w-full flex justify-center lg:justify-between items-center h-full">
                <div className="w-80 absolute bottom-10 hidden lg:block">
                    <Image src={SpaceShip} alt="HeroImg" className='w-full h-full' />
                </div>
                <div className='hidden lg:block'></div>
                <div className="flex flex-col lg:flex-row lg:gap-8">
                    <div className="space-y-2 text-lg md:text-xl tracking-wider">
                        <h3 className='form-question'>Please Choose Which of the following you have?</h3>
                        <div className="grid gap-4 grid-cols-2 pb-5">
                            <div className='flex gap-2'>
                                <input className='cursor-pointer' type="checkbox" name="youHave" id="website" value='website' />
                                <label htmlFor="website" className='lg:font-bold cursor-pointer text-xl'>Website</label>
                            </div>
                            <div className='flex gap-2'>
                                <input className='cursor-pointer' type="checkbox" name="youHave" id="socialMediaPages" value='socialMediaPages' />
                                <label htmlFor="socialMediaPages" className='lg:font-bold cursor-pointer text-xl'>Social Media Pages</label>
                            </div>
                            <div className='flex gap-2'>
                                <input className='cursor-pointer' type="checkbox" name="youHave" id="googleMyBusiness" value='googleMyBusiness' />
                                <label htmlFor="googleMyBusiness" className='lg:font-bold cursor-pointer text-xl'>Google My Business</label>
                            </div>
                            <div className='flex gap-2'>
                                <input className='cursor-pointer' type="checkbox" name="youHave" id="directories" value='directories' />
                                <label htmlFor="directories" className='lg:font-bold cursor-pointer text-xl'>Directories Listing</label>
                            </div>
                            <div className='flex gap-2'>
                                <input className='cursor-pointer' type="checkbox" name="youHave" id="noneValue" value='noneValue' />
                                <label htmlFor="noneValue" className='lg:font-bold cursor-pointer text-xl'>None</label>
                            </div>
                        </div>


                        <h3 className='form-question'>What is your marketing goal?</h3>
                        <div className="pb-5">
                            <div>
                                <div className='flex gap-2'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="branding" value='branding' />
                                    <label htmlFor="branding" className='lg:font-bold cursor-pointer text-xl'>Branding</label>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="sales" value='sales' />
                                    <label htmlFor="sales" className='lg:font-bold cursor-pointer text-xl'>Sales</label>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-2'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="digitalTransformation" value='digitalTransformation' />
                                    <label htmlFor="digitalTransformation" className='lg:font-bold cursor-pointer text-xl'>Digital Transformation</label>
                                </div>
                            </div>
                        </div>


                        <div>
                            <h3 className='form-question'>How much is your budget?</h3>
                            <input type="range" name="budget" id="budget" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RocketForm