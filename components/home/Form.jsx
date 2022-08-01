import React, { useState } from 'react'


const Form = () => {

    const [formnumber, seFormnumber] = useState(1)
    const [PriceRange, setPriceRange] = useState("")
    const [CompanyBio, setCompanyBio] = useState("")
    const [NameUser, setNameUser] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Designation, setDesignation] = useState("")
    const [EmailUser, setEmailUser] = useState("")

    async function submitConsultaionForm(e) {
        e.preventDefault()
        let data = { PriceRange, CompanyBio, NameUser, Designation, PhoneNumber, EmailUser }
        let result = await fetch(`/api/marketingFormDataAPI`, {
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
            setPriceRange("")
            setCompanyBio("")
            setNameUser("")
            setPhoneNumber("")
            setDesignation("")
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
                                <label class="lg:font-bold cursor-pointer text-xl" for="NameUser">
                                    Name
                                </label>
                                <input value={NameUser} onChange={(e) => setNameUser(e.target.value)} autoComplete="off" class="input-field mt-3 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="NameUser" type="text" placeholder='Username'></input>
                            </div>
                            <div className='w-full'>
                                <label class="lg:font-bold cursor-pointer text-xl" for="PhoneNumber">
                                    Phone Number
                                </label>
                                <input value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} autoComplete="off" class="input-field mt-3 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="PhoneNumber" type="text" maxLength="10" placeholder='9876543210'></input>
                            </div>
                        </div>
                        <label class="lg:font-bold cursor-pointer text-xl mb-3" for="EmailUser">
                            Email
                        </label>
                        <input value={EmailUser} onChange={(e) => setEmailUser(e.target.value)} autoComplete="off" class="shadow appearance-none border rounded w-100 mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="EmailUser" type="email"></input>
                        <label class="lg:font-bold cursor-pointer text-xl mb-3" for="Designation">
                            Designation
                        </label>
                        <input value={Designation} onChange={(e) => setDesignation(e.target.value)} autoComplete="off" class="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Designation" type="email"></input>
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
                            <h3 className='form-question'>What is your objective?</h3>
                            <label class="lg:font-bold cursor-pointer text-xl mb-3" for="CompanyBio">
                                Company Bio
                            </label>
                            <input value={CompanyBio} onChange={(e) => setCompanyBio(e.target.value)} autoComplete="off" class="mb-8 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="CompanyBio" type="text" placeholder="Company Bio"></input>
                            <div>
                                <h3 className='form-question'>What is your monthly marketing budget</h3>
                                <input type="range" name="budget" id="budget" className='w-full' min="30000" max="500000" step="50000" value={PriceRange} onChange={(e) => setPriceRange(e.target.value)} />
                            </div>
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