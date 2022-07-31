import React, { useState } from 'react'
import Header from './Header'
import Taare from '../../public/svgs/taare.svg'
import NavigationMenu from './NavigationMenu'
import { useRouter } from 'next/router'

const DefaultLayout = ({ children }) => {
    const router = useRouter()

    const [isNavOpen, setIsNavOpen] = useState(false)
    // boxShadow: 'inset 0 0 0 1000px rgba(25, 50, 71,0.5)'
    return (
        <>
            <NavigationMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <div className={`min-h-screen bg-black text-white relative default-layout ${router.pathname !== '/' && 'BlueBg'}`}
                style={{
                    backgroundImage: `url(${Taare.src})`,
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* <ParticleArea /> */}
                <Header setIsNavOpen={setIsNavOpen} />
                {children}
            </div>
        </>
    )
}

export default DefaultLayout