import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

// components
import Hero from '../components/marketing/Hero.jsx'
import TwoCards from '../components/marketing/TwoCards'
import ProcessFlow from '../components/development/ProcessFlow'
import MVP from '../components/common/MVP'
import B2B from '../components/marketing/B2B'
import D2C from '../components/marketing/D2C'
import ScrollingWhyUs from '../components/common/ScrollingWhyUs'
import CaseStudy from '../components/development/CaseStudy'
import MarketingProcess from '../components/marketing/MarketingProcess'
import ProcessFlowThird from '../components/marketing/ProcessFlowThird.jsx'
import ProcessFlowFourth from '../components/marketing/ProcessFlowFourth.jsx'
import Suggestion from '../components/marketing/Suggestion.jsx'
import Form from '../components/marketing/Form.jsx'



const Marketing = () => {
    return (
        <>
            <ReactFullpage
                navigation
                render={comp =>
                (
                    <ReactFullpage.Wrapper>
                        <Hero comp={comp} />
                        <TwoCards comp={comp} />
                        <ProcessFlowThird />
                        <ProcessFlowFourth />
                        <MarketingProcess />
                        <Suggestion />
                        <ScrollingWhyUs />
                        <Form />
                    </ReactFullpage.Wrapper>
                )
                }
            />
        </>
    )
}

Marketing.layout = 'default'

export default Marketing