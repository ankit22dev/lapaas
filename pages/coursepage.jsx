import React from 'react'
import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'
import Hero from '../components/course/Hero'
import Section8 from '../components/course/Section8'
import Modules from '../components/course/Modules'
import ImpModule from '../components/course/ImpModule'
import ProgramFor from '../components/course/ProgramFor'
import Section4 from '../components/course/Section4'
import Social from '../components/course/Social'
import Companies from '../components/course/Companies'
import Section5 from '../components/course/Section5'
import Section6 from '../components/course/Section6'
import Bonus from '../components/course/Bonus'
import Testimonials from '../components/course/Testimonials'
import Faq from '../components/course/Faq'
// components


const coursepage = () => {
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
                            <Hero />
                            <Section8 />
                            <Modules />
                            <ImpModule />
                            <ProgramFor />
                            <Section4 />
                            <Social />
                            <Companies />
                            <Section5 />
                            <Section6 />
                            <Bonus />
                            <Testimonials />
                            <Faq />
                        </ReactFullpage.Wrapper>
                    </ReactFullpage.Wrapper>
                )
                }
            />
        </div>
    )
}

coursepage.layout = 'default'

export default coursepage