import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import TopHero from '../components/consultation/TopHero'
import Suggestion from '../components/consultation/Suggestion'
import ScrollingWhyUs from '../components/consultation/ScrollingWhyUs'
import Form from '../components/consultation/Form'
// components


const consultation = () => {
    return (
        <div>
            <ReactFullpage
                navigation
                render={comp =>
                (
                    <ReactFullpage.Wrapper>
                        <ReactFullpage.Wrapper>
                            <TopHero comp={comp} />
                            <Suggestion />
                            <ScrollingWhyUs />
                            <Form />
                        </ReactFullpage.Wrapper>
                    </ReactFullpage.Wrapper>
                )
                }
            />
        </div>
    )
}

consultation.layout = 'default'

export default consultation