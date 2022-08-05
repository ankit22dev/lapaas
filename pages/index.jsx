import React from "react";
import Head from "next/head";

// components
import Hero from "../components/home/Hero";
import TwoCards from "../components/home/TwoCards";
import Form from "../components/home/Form";
import ReactFullpage from "@fullpage/react-fullpage";
import ScrollingWhyUs from "../components/common/ScrollingWhyUs";
import About from "../components/consultation/About";

const Home = () => {
  return (
    <ReactFullpage
      navigation
      render={(comp) => (
        <ReactFullpage.Wrapper>
          <Head>
            <title>Transform Your Business with Lapaas Marketing Agency</title>
            <meta
              name="description"
              content="Lapaas marketing agency helps brands grow faster and to generate more revenue with our proven marketing methods and innovative solutions."
            />
          </Head>
          <Hero comp={comp} />
          <TwoCards />
          <About />
          <ScrollingWhyUs isHome={true} />
          <Form />
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

Home.layout = "default";

export default Home;
