import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

// components
import Hero from '../components/development/Hero'
import ProcessFlowThird from '../components/development/ProcessFlowThird'
import ScrollingWhyUs from '../components/development/ScrollingWhyUs'
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