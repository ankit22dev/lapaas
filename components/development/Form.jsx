import React, { useState } from 'react'


const Form = () => {

    const [formnumber, seFormnumber] = useState(1)
    const [PriceRange, setPriceRange] = useState("")
    const [NameUser, setNameUser] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [EmailUser, setEmailUser] = useState("")

    async function submitConsultaionForm(e) {
        e.preventDefault()
        let data = { PriceRange, NameUser, PhoneNumber, EmailUser }
        let result = await fetch(`/api/developmentFormDataAPI`, {
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
            <form className='max-w-4xl w-full mx-auto flex flex-col' onSubmit={(e) => { e.preventDefault() }}>
                {formnumber !== 1 ? (
                    <div className='flex flex-col w-10/12 select-none justify-start'>
                        <div className='flex justify-between items-center w-full gap-4 mb-8'>
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
                        <input value={EmailUser} onChange={(e) => setEmailUser(e.target.value)} autoComplete="off" class="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="EmailUser" type="email"></input>
                        <button
                            type='submit'
                            className='bg-liteYellow text-xl uppercase rounded-full ml-auto py-2 px-6 font-bold text-black mt-8'
                            onClick={(e) => {
                                submitConsultaionForm(e)
                            }}
                        >
                            astronaut
                        </button>
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col select-none justify-center'>
                            <div className='mb-8'>
                                <h3 className='heading'>What do you want to develop?</h3><div>
                                    <h3 className='form-question'>How much is your budget?</h3>
                                    <input type="range" name="budget" id="budget" className='w-full' min="20000" max="1000000" step="50000" value={PriceRange} onChange={(e) => setPriceRange(e.target.value)} />
                                </div>
                            </div>
                        </div>
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
                    </>
                )}
            </form>
        </section>
    )
}

export default Form