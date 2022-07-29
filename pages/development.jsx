import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

// components
import Hero from '../components/home/Hero'
import TwoCards from '../components/marketing/TwoCards'
import ProcessFlowThird from '../components/development/ProcessFlowThird'
import MVP from '../components/common/MVP'
import B2B from '../components/marketing/B2B'
import D2C from '../components/marketing/D2C'
import ScrollingWhyUs from '../components/development/ScrollingWhyUs'
import ProcessFlowFourth from '../components/development/ProcessFlowFourth'


const development = () => {
    return (
        <div>
            <ReactFullpage
                navigation
                render={comp =>
                (
                    <ReactFullpage.Wrapper>
                        <Hero />
                        <TwoCards comp={comp} />
                        <ProcessFlowThird />
                        <ProcessFlowFourth />
                        <MVP
                            title={'Why marketing is an important?'}
                        />
                        <B2B />
                        <D2C />
                        <ScrollingWhyUs />
                    </ReactFullpage.Wrapper>
                )
                }
            />
        </div>
    )
}

development.layout = 'default'

export default development