import React, { useState } from 'react'


const Form = () => {

    const [formnumber, seFormnumber] = useState(1)

    return (
        <section className='section'>
            <form className='max-w-4xl w-full mx-auto flex justify-start items-start flex-col' onSubmit={(e) => { e.preventDefault() }}>
                {formnumber !== 1 ? (
                    <div className='flex flex-col gap-8 w-10/12 select-none'>
                        <div>
                            <h3 className='form-question'>What is your objective of consultation ?</h3>
                            <div className='flex flex-col lg:flex-row lg:gap-8'>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="ideaValidation" value='ideaValidation' />
                                    <label htmlFor="ideaValidation" className='lg:font-bold cursor-pointer text-xl'>Idea Validation</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="businessGrowth" value='businessGrowth' />
                                    <label htmlFor="businessGrowth" className='lg:font-bold cursor-pointer text-xl'>Business Growth</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="marketing" value='marketing' />
                                    <label htmlFor="marketing" className='lg:font-bold cursor-pointer text-xl'>Marketing</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='form-question'>Company Brief</h3>
                            <div className='flex flex-col lg:flex-row lg:gap-8'>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="marketingGoal" id="branding" value='branding' />
                                    <label htmlFor="branding" className='lg:font-bold cursor-pointer text-xl'>Branding</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="marketingGoal" id="sales" value='sales' />
                                    <label htmlFor="sales" className='lg:font-bold cursor-pointer text-xl'>Sales</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="marketingGoal" id="digitalTransformation" value='digitalTransformation' />
                                    <label htmlFor="digitalTransformation" className='lg:font-bold cursor-pointer text-xl'>Digital Transformation</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-full gap-4'>
                            <div className='w-full'>
                                <h3 className='form-question'>Name</h3>
                                <input type="text" className='input-field' />
                            </div>
                            <div className='w-full'>
                                <h3 className='form-question'>Phone Number</h3>
                                <input type="number" className='input-field' />
                            </div>
                        </div>
                        <div>
                            <div className='w-full'>
                                <h3 className='form-question'>Email</h3>
                                <input type="email" className='input-field' />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col gap-8 select-none'>
                        <div>
                            <h3 className='form-question'>Please Choose Which of the following you have?</h3>
                            <div className='flex flex-col lg:flex-row lg:gap-8'>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="website" value='website' />
                                    <label htmlFor="website" className='lg:font-bold cursor-pointer text-xl'>Website</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="socialMediaPages" value='socialMediaPages' />
                                    <label htmlFor="socialMediaPages" className='lg:font-bold cursor-pointer text-xl'>Social Media Pages</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="googleMyBusiness" value='googleMyBusiness' />
                                    <label htmlFor="googleMyBusiness" className='lg:font-bold cursor-pointer text-xl'>Google My Business</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="directoriesListing" value='directoriesListing' />
                                    <label htmlFor="directoriesListing" className='lg:font-bold cursor-pointer text-xl'>Directories Listing</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="youHave" id="none" value='none' />
                                    <label htmlFor="none" className='lg:font-bold cursor-pointer text-xl'>None</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='form-question'>What is your marketing goal?</h3>
                            <div className='flex flex-col lg:flex-row lg:gap-8'>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="marketingGoal" id="branding" value='branding' />
                                    <label htmlFor="branding" className='lg:font-bold cursor-pointer text-xl'>Branding</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="marketingGoal" id="sales" value='sales' />
                                    <label htmlFor="sales" className='lg:font-bold cursor-pointer text-xl'>Sales</label>
                                </div>
                                <div className='flex gap-2 justify-start items-baseline'>
                                    <input className='cursor-pointer' type="checkbox" name="marketingGoal" id="digitalTransformation" value='digitalTransformation' />
                                    <label htmlFor="digitalTransformation" className='lg:font-bold cursor-pointer text-xl'>Digital Transformation</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='form-question'>How much is your budget?</h3>
                            <input type="range" name="budget" id="budget" />
                        </div>
                    </div>
                )}
                <button
                    type='submit'
                    className='bg-liteYellow text-xl uppercase rounded-full ml-auto py-2 px-6 font-bold text-black mt-8'
                    onClick={(e) => {
                        e.preventDefault();
                        seFormnumber(2)
                    }}
                >
                    astronaut
                </button>
            </form>
        </section>
    )
}

export default Form