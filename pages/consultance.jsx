import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
// components
// import Hero from '../components/home/Hero'
import TwoCards from '../components/marketing/TwoCards'
import MVP from '../components/common/MVP'
import B2B from '../components/marketing/B2B'
import D2C from '../components/marketing/D2C'
import TopHero from '../components/consultation/TopHero'
import Suggestion from '../components/consultation/Suggestion'
import ScrollingWhyUs from '../components/consultation/ScrollingWhyUs'
import Form from '../components/consultation/Form'

const consultation = () => {
    return (
        <div>
            <ReactFullpage
                navigation
                render={comp =>
                (
                    <ReactFullpage.Wrapper>
                        {/* <Hero /> */}
                        <TopHero comp={comp} />
                        {/* <MVP
                            title={'Why marketing is an important?'}
                        /> */}
                        <Suggestion />
                        <B2B />
                        <D2C />
                        <ScrollingWhyUs />
                        <Form />
                    </ReactFullpage.Wrapper>
                )
                }
            />
        </div>
    )
}

consultation.layout = 'default'

export default consultation