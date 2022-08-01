import React from 'react'
import Head from 'next/head'
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
                            <Head>
                                <title>TRANSFORM YOUR BUSINESS WITH BUSINESS CONSULTING</title>
                                <meta name='description' content='Get the expertise and guidance you need to transform your business with business consulting. Personalised advice to help you identify growth opportunities.' />
                            </Head>
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