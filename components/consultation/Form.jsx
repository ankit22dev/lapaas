import React, { useState } from 'react'


const Form = () => {

    const [formnumber, seFormnumber] = useState(1)
    const [IdeaValidation, setIdeaValidation] = useState(false)
    const [BusinessGrowth, setBusinessGrowth] = useState(false)
    const [Marketing, setMarketing] = useState(false)
    const [CompanyBio, setCompanyBio] = useState("")
    const [NameUser, setNameUser] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [EmailUser, setEmailUser] = useState("")

    async function submitConsultaionForm(e) {
        e.preventDefault()
        // alert(IdeaValidation)
        // alert(BusinessGrowth)
        // alert(Marketing)
        // alert(CompanyBio)
        // alert(NameUser)
        // alert(PhoneNumber)
        // alert(EmailUser)
        let data = { IdeaValidation, BusinessGrowth, Marketing, CompanyBio, NameUser, PhoneNumber, EmailUser }
        let result = await fetch(`/api/consultanceFormDataAPI`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json()
        if (result.info === "successfully") {
            alert("Your data is saved to server side in json file")
            setIdeaValidation("")
            setBusinessGrowth("")
            setMarketing("")
            setCompanyBio("")
            setNameUser("")
            setPhoneNumber("")
            setEmailUser("")
            seFormnumber(1)
        } else {
            alert("Something Went wrong")
        }
    }

    return (
        <section className='section'>
            <form className='flex flex-col w-full max-w-4xl mx-auto' onSubmit={(e) => { e.preventDefault() }}>
                {formnumber !== 1 ? (
                    <div className='flex flex-col justify-start w-10/12 select-none'>
                        <div className='flex items-center justify-between w-full gap-4 mb-8'>
                            <div className='w-full'>
                                <label className="lg:font-bold cursor-pointer text-xl" for="NameUser">
                                    Name
                                </label>
                                <input value={NameUser} onChange={(e) => setNameUser(e.target.value)} autoComplete="off" className="input-field mt-3 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="NameUser" type="text" placeholder='Username'></input>
                            </div>
                            <div className='w-full'>
                                <label className="lg:font-bold cursor-pointer text-xl" for="PhoneNumber">
                                    Phone Number
                                </label>
                                <input value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} autoComplete="off" className="input-field mt-3 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="PhoneNumber" type="text" maxLength="10" placeholder='9876543210'></input>
                            </div>
                        </div>
                        <label className="lg:font-bold cursor-pointer text-xl mb-3" for="EmailUser">
                            Email
                        </label>
                        <input value={EmailUser} onChange={(e) => setEmailUser(e.target.value)} autoComplete="off" className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="EmailUser" type="email"></input>
                        <button
                            type='submit'
                            className='px-6 py-2 mt-8 ml-auto text-xl font-bold text-black uppercase rounded-full bg-liteYellow'
                            onClick={(e) => {
                                submitConsultaionForm(e)
                            }}
                        >
                            astronaut
                        </button>
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col justify-center select-none'>
                            <div className='mb-8'>
                                <h3 className='form-question'>What is your objective of consultation? *</h3>
                                <div className='flex flex-col lg:flex-row lg:gap-8'>
                                    <div className='flex items-baseline justify-start gap-2'>
                                        <input className='cursor-pointer' type="checkbox" name="youHave" id="IdeaValidation" value='IdeaValidation' onChange={() => setIdeaValidation(!IdeaValidation)} />
                                        <label htmlFor="IdeaValidation" className='text-xl cursor-pointer lg:font-bold'>Idea Validation</label>
                                    </div>
                                    <div className='flex items-baseline justify-start gap-2'>
                                        <input className='cursor-pointer' type="checkbox" name="youHave" id="BusinessGrowth" value='BusinessGrowth' onChange={() => setBusinessGrowth(!BusinessGrowth)} />
                                        <label htmlFor="BusinessGrowth" className='text-xl cursor-pointer lg:font-bold'>Business Growth</label>
                                    </div>
                                    <div className='flex items-baseline justify-start gap-2'>
                                        <input className='cursor-pointer' type="checkbox" name="youHave" id="Marketing" value='Marketing' onChange={() => setMarketing(!Marketing)} />
                                        <label htmlFor="Marketing" className='text-xl cursor-pointer lg:font-bold'>Marketing</label>
                                    </div>
                                </div>
                            </div>
                            <label className="lg:font-bold cursor-pointer text-xl mb-3" for="CompanyBio">
                                Company Bio
                            </label>
                            <input value={CompanyBio} onChange={(e) => setCompanyBio(e.target.value)} autoComplete="off" className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="CompanyBio" type="text" placeholder="Company Bio"></input>
                        </div>
                        <button
                            type='submit'
                            className='px-6 py-2 mt-8 ml-auto text-xl font-bold text-black uppercase rounded-full bg-liteYellow'
                            onClick={(e) => {
                                e.preventDefault();
                                seFormnumber(2)
                            }}
                        >
                            astronaut
                        </button>
                    </>
                )}
            </form>
        </section>
    )
}

export default Form