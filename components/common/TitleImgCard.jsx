import React from 'react'
import Image from 'next/image'

const TitleImgCard = ({ title, imgName, imgClassName, titleClassName, className, ...res }) => {
    return (
        <div className={`${className} relative border-8 border-white bg-mainRed text-center`} {...res}>
            <h4 className={`${titleClassName} z-10 relative`}>{title}</h4>
            <div className={`${imgClassName} z-0`}>
                <Image src={imgName} alt="HeroImg" className='w-full h-full' />
            </div>
        </div>
    )
}

export default TitleImgCard