import React from 'react'

const TitlePara = ({ title, textClassName, titleClassName, className, text }) => {
    return (
        <div className={`${className} border-8 border-white bg-mainRed text-center`}>
            <h4 className={titleClassName}>{title}</h4>
            <div className={textClassName}>
                {text}
            </div>
        </div>
    )
}

export default TitlePara