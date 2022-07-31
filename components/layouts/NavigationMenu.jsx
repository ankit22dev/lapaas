import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
// imgs
import Logo from '../../public/imgs/logoWithName.png'
import Close from '../../public/svgs/close.svg'


const NavigationMenu = ({ isNavOpen, setIsNavOpen }) => {

    const router = useRouter()

    const [currentPage, setCurrentPage] = useState("/")

    useEffect(() => {
        setCurrentPage(router.pathname)

        return () => {
            setCurrentPage(router.pathname)
        }
    }, [router.pathname])

    console.log(currentPage);


    return (
        <div className={`${isNavOpen ? "top-0" : "-top-full"} fixed text-white font-["Poppins"] left-0 h-screen w-screen bg-black z-[101] p-4 transform transition-all duration-1000`}>
            <div className='flex items-start justify-center h-full p-32 border-8 border-white'>
                <div className="flex items-start justify-between w-full h-full">



                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <div className='block w-10 cursor-pointer xl:hidden' onClick={() => { setIsNavOpen(false) }}>
                            <Image src={Close} alt='Close' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='flex w-full'>
                                <div className='w-32'>
                                    <Image src={Logo} alt='Logo' className='w-full h-full' />
                                </div>
                                <ul className='flex flex-col gap-8 pb-3 border-b-2 border-white lg:pl-4 lg:ml-4 xl:border-b-0 xl:border-l-2'>
                                    <li className=''>
                                        <span className='pb-1 ml-2 text-3xl font-bold uppercase border-b-2 md:text-4xl xl:text-5xl w-min'>Menu</span>
                                    </li>
                                    <li>
                                        <Link href="/" className=''>
                                            <a className={`uppercase  text-3xl md:text-4xl xl:text-5xl font-bold p-2 ${currentPage == '/' ? 'text-white' : "text-white/50"} hover:text-white`} onClick={() => setIsNavOpen(false)}>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/marketing">
                                            <a className={`uppercase  text-3xl md:text-4xl xl:text-5xl font-bold p-2 ${currentPage == '/marketing' ? 'text-white' : "text-white/50"} hover:text-white`} onClick={() => setIsNavOpen(false)}>Marketing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/development">
                                            <a className={`uppercase  text-3xl md:text-4xl xl:text-5xl font-bold p-2 ${currentPage == '/development' ? 'text-white' : "text-white/50"} hover:text-white`} onClick={() => setIsNavOpen(false)}>Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/consultance">
                                            <a className={`uppercase text-3xl md:text-4xl xl:text-5xl font-bold p-2 ${currentPage == '/consultance' ? 'text-white' : "text-white/50"} hover:text-white`} onClick={() => setIsNavOpen(false)}>Consultance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://course.lapaas.com/" rel="noopener noreferrer" className={`uppercase  text-3xl md:text-4xl xl:text-5xl font-bold p-2 ${currentPage == '/course' ? 'text-white' : "text-white/50"} hover:text-white`}>Course</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='flex w-full max-w-xl xl:justify-end'>
                                <div className='flex flex-col gap-8 pr-4 mr-4 border-white xl:border-r-2'>
                                    <ul className='flex flex-col justify-center gap-2 capitalize xl:items-end'>
                                        <li>Lapaasindia@Gmail.Com</li>
                                        <li>+91 95400 65704</li>
                                        <li className='max-w-xs xl:text-right'>455, Ground Floor, Bawana Rd,near Delhi Technical University,Shahbad Daulatpur Village</li>
                                        <li>New Delhi, Delhi</li>
                                        <li>110042</li>
                                    </ul>
                                </div>

                                <div className='hidden w-10 cursor-pointer xl:block' onClick={() => { setIsNavOpen(false) }}>
                                    <Image src={Close} alt='Close' className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationMenu