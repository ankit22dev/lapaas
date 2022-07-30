import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

// components
import Hero from '../components/marketing/Hero'
import TwoCards from '../components/marketing/TwoCards'
import B2B from '../components/marketing/B2B'
import D2C from '../components/marketing/D2C'
import ScrollingWhyUs from '../components/marketing/ScrollingWhyUs'
import ProcessFlowThird from '../components/marketing/ProcessFlowThird'
import ProcessFlowFourth from '../components/marketing/ProcessFlowFourth'
import Suggestion from '../components/marketing/Suggestion'
import Form from '../components/marketing/Form'



const Marketing = () => {
    return (
        <>
            {/* <DefaultLayout> */}
            <ReactFullpage
                navigation
                render={comp =>
                (
                    <ReactFullpage.Wrapper>
                        <Hero comp={comp} />
                        <TwoCards comp={comp} />
                        <ProcessFlowThird />
                        <ProcessFlowFourth />
                        <Suggestion />
                        <B2B />
                        <D2C />
                        <ScrollingWhyUs />
                        <Form />
                    </ReactFullpage.Wrapper>
                )
                }
            />
            {/* </DefaultLayout> */}
        </>
    )
}

Marketing.layout = 'default'

export default Marketing