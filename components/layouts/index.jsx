import React, { useState } from 'react'
import Header from './Header'
import Taare from '../../public/svgs/taare.svg'
import NavigationMenu from './NavigationMenu'

const DefaultLayout = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <>
                <NavigationMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
                <div className={"min-h-screen bg-black text-white relative default-layout"}
                    style={{
                        backgroundImage: `url(${Taare.src})`,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {/* <ParticleArea /> */}
                    <Header setIsNavOpen={setIsNavOpen }/>
                    {children}
                </div>
        </>
    )
}

export default DefaultLayout