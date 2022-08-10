import Image from "next/image";
import { useState } from "react";
import FloatingAstraunotBlack from "../../public/imgs/floatingAstraunotWhite.png";
import Rocket from "../../public/imgs/spaceship.png";
import CloseIcon from "../../public/svgs/close.svg";
import Link from "next/link";
import astraunotincup from "../../public/imgs/astraunot in cup with white fill.png";
import Modal from '@material-ui/core/Modal';
import Slider from '@mui/material/Slider';
import CloseIconBlack from "../../public/imgs/close.png";

const Hero = ({ comp }) => {
    const [slide, setSlide] = useState(false);

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        seFormnumber(1)
    };

    const handleOpen = () => {
        setOpen(true);
    };

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
            setOpen(false);
        } else {
            alert("Something Went wrong")
        }
    }

    return (
        <section className="section active">
            <div className="relative flex h-full px-6 py-8">
                <div
                    className={`${slide ? "w-full" : "w-0"
                        } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#d14b39]/95`}
                >
                    <div className="relative hidden w-60 lg:block" id="flyingAstroImg">
                        <Image
                            src={FloatingAstraunotBlack}
                            alt="HeroImg"
                            className="w-full h-full"
                        />
                    </div>
                    <a
                        target="_blank"
                        href="https://course.lapaas.com/"
                        rel="noopener noreferrer"
                        className={`liteYellow-btn mt-auto`}
                    >
                        Course
                    </a>
                </div>
                <div
                    className={`${slide ? "w-0 opacity-0" : "w-full lg:w-3/5 opacity-100"
                        } overflow-hidden transition-all duration-1000 relative flex justify-center items-center`}
                >
                    <div className="flex flex-col max-w-xl py-12 mx-auto pt-0.5">
                        <div className="items-center justify-center">
                            <h1 className="heading">
                                <div className="text-left">
                                    Get the most out of your marketing budget
                                </div>
                            </h1>
                            <p className="space-y-2 text-base tracking-wider text-left md:text-xl">
                                We are Lapaas, a marketing agency that is 100% invested in your
                                success. We believe that when our clients succeed, we succeed.
                                We want to see you succeed and we will do everything in our
                                power to help you get there.
                            </p>
                        </div>
                        <div className="mt-6">
                            <button
                                type="button"
                                className="w-auto mx-2 mt-2 red-btn"
                                onClick={handleOpen}
                            >
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`${slide ? "w-full" : "lg:w-2/5"
                        } relative origin-right overflow-hidden transition-all duration-1000 flex py-12 flex-col justify-center items-center `}
                >
                    <div className="relative hidden lg:6/12 lg:block" id="heroImg">
                        <Image
                            src={astraunotincup}
                            alt="HeroImg"
                            className="w-full h-full"
                        />
                    </div>
                    <button
                        type="button"
                        className={`red-btn transition-all mt-auto duration-1000 ${slide ? "opacity-100 visible" : "opacity-0 hidden"
                            }`}
                        onClick={() => {
                            comp.fullpageApi.moveSectionDown();
                        }}
                    >
                        Services
                    </button>
                </div>
                <div
                    className={`${slide ? "w-full" : "w-0"
                        } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#193247]/95`}
                >
                    <div className="relative hidden w-48 lg:block" id="flyingAstroImg">
                        <Image src={Rocket} alt="HeroImg" className="w-full h-full" />
                    </div>
                    <Link href="/consultance">
                        <a className={`liteYellow-btn mt-auto`}>Consultance</a>
                    </Link>
                    {/* <button type='button' className='mt-auto liteYellow-btn'>Consultance</button> */}
                </div>

                {slide && (
                    <div
                        className="absolute top-0 -translate-x-1/2 cursor-pointer left-1/2"
                        onClick={() => setSlide(false)}
                    >
                        <div className="w-10">
                            <Image src={CloseIcon} alt="close" className="w-full h-full" />
                        </div>
                    </div>
                )}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                style={{ margin: "auto" }}
                className='md:w-1/2 w-full h-1/2'
            >
                <>
                    <section className='section bg-white'>
                        <img src={CloseIconBlack.src} alt="#ImgNotFound" width="30px" height="30px" className="float-right cursor-pointer" onClick={handleClose} />
                        <form className='flex flex-col w-full max-w-4xl mx-auto' onSubmit={(e) => { e.preventDefault() }}>
                            {formnumber !== 1 ? (
                                <div className='flex flex-col justify-start w-full select-none'>
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
                                    <input value={EmailUser} onChange={(e) => setEmailUser(e.target.value)} autoComplete="off" className="shadow appearance-none border rounded w-100 mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="EmailUser" type="email"></input>
                                    <label className="lg:font-bold cursor-pointer text-xl mb-3" for="Designation">
                                        Designation
                                    </label>
                                    <input value={Designation} onChange={(e) => setDesignation(e.target.value)} autoComplete="off" className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Designation" type="email"></input>
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
                                        <label className="lg:font-bold cursor-pointer text-xl mb-3" for="CompanyBio">
                                            Company Bio
                                        </label>
                                        <input value={CompanyBio} onChange={(e) => setCompanyBio(e.target.value)} autoComplete="off" className="mb-8 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="CompanyBio" type="text" placeholder="Company Bio"></input>
                                        <div>
                                            <h3 className='form-question'>What is your monthly marketing budget</h3>
                                            {/* <input type="range" name="budget" id="budget" className='w-full' min="30000" max="500000" value={PriceRange} onChange={(e) => setPriceRange(e.target.value)} /> */}
                                            <Slider
                                                valueLabelDisplay="auto"
                                                min={30000}
                                                max={500000}
                                                value={PriceRange}
                                                onChange={(e) => setPriceRange(e.target.value)}
                                            />
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
                                        Next
                                    </button>
                                </>
                            )}
                        </form>
                    </section>
                </>
            </Modal>
        </section>
    );
};

export default Hero;
