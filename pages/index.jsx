import React from 'react'

// components
import Hero from '../components/home/Hero'
import TwoCards from '../components/home/TwoCards'
import Form from '../components/home/Form'
import ReactFullpage from '@fullpage/react-fullpage'
import ScrollingWhyUs from '../components/common/ScrollingWhyUs'
import About from '../components/consultation/About'


const Home = () => {


    return (
        <ReactFullpage
            navigation
            render={comp =>
            (
                <ReactFullpage.Wrapper>
                    <Hero comp={comp} />
                    <TwoCards />
                    <About />
                    <ScrollingWhyUs isHome={true} />
                    <Form />
                </ReactFullpage.Wrapper>
            )
            }
        />
    )
}

Home.layout = 'default'

export default Home