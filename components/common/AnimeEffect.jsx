import React from 'react'
import Fade from 'react-reveal/Fade';

const AnimeEffect = ({children}) => {
    return (
        <Fade bottom cascade>
            {children}
        </Fade>
    )
}

export default AnimeEffect