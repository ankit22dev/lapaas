import React from 'react'

// components
import Hero from '../components/home/Hero'
import TwoCards from '../components/home/TwoCards'
import FlyingAstro from '../components/home/FlyingAstro'
import Delivery from '../components/home/Delivery'
import ThreeCard from '../components/home/ThreeCard'
import ThreeImgs from '../components/home/ThreeImgs'
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
                    <ScrollingWhyUs />
                    <Form />
                </ReactFullpage.Wrapper>
            )
            }
        />
    )
}

Home.layout = 'default'

export default Home