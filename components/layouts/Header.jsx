import React from 'react'
import Image from 'next/image'
import Menu from '../../public/svgs/menu.svg'
import Logo from '../../public/imgs/logoWithName.png'

import Link from 'next/link'

const Header = ({ setIsNavOpen }) => {
    return (
        <div className='w-screen h-16 z-10 fixed top-0 left-0 flex justify-center items-center px-6'>
            <div className='max-w-7xl w-full max-auto flex justify-between items-center'>
                <Link href='/'>
                    <a className='w-32'>
                    <Image src={Logo} alt={'menu'} className='w-full h-full' />
                    </a>
                </Link>
                <div className='w-10 h-12' onClick={() => setIsNavOpen(true)}>
                    <Image src={Menu} alt={'menu'} className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Header