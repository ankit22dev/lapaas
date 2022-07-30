import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

// components
import TwoCards from '../components/marketing/TwoCards'
import ProcessFlowThird from '../components/development/ProcessFlowThird'
import MVP from '../components/common/MVP'
import ScrollingWhyUs from '../components/development/ScrollingWhyUs'
import Hero from '../components/development/Hero'
import Form from '../components/development/Form'


const development = () => {
    return (
        <div>
            <ReactFullpage
                navigation
                render={comp =>
                (
                    <ReactFullpage.Wrapper>
                        <Hero comp={comp} />
                        <ProcessFlowThird />
                        <MVP
                            title={'Why marketing is an important?'}
                        />
                        <ScrollingWhyUs />
                        <Form />
                    </ReactFullpage.Wrapper>
                )
                }
            />
        </div>
    )
}

development.layout = 'default'

export default development