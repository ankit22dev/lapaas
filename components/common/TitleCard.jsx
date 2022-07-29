import React from 'react'

const TitleCard = ({title, titleClassName,className, ...res}) => {
    return (
        <div className={`${className} border-8 border-white bg-mainRed text-center cursor-pointer hover:bg-mainRed/80 transition-all`} {...res}>
            <h4 className={titleClassName}>{title}</h4>
        </div>
    )
}

export default TitleCard