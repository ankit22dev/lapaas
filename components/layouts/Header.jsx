import React from 'react'
import Image from 'next/image'
import Menu from '../../public/svgs/menu.svg'
import Logo from '../../public/imgs/logoWithName.png'

import Link from 'next/link'

const Header = ({ setIsNavOpen }) => {
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-16 px-6 z-[101] md:z-[10]'>
            <div className='flex items-center justify-between w-full max-w-7xl max-auto'>
                <Link href='/'>
                    <a className='w-32'>
                        <Image src={Logo} alt={'menu'} className='w-full h-full' />
                    </a>
                </Link>
                <div className='w-10 h-12 cursor-pointer' onClick={() => setIsNavOpen(true)}>
                    <Image src={Menu} alt={'menu'} className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Header
