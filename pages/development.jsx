import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Head from 'next/head'

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
                        <Head>
                            <title>Product Development Services to Make your idea a reality</title>
                            <meta name='description' content='We turn your ideas into real products. We can help you with product development, engineering, prototyping, manufacturing, sourcing and more.' />
                        </Head>
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