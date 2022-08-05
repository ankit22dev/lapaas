import React from "react";
import ChartBox from "../common/ChartBox";

const B2B = () => {
  return (
    <section className="section">
      <div className="flex flex-col items-center justify-center gap-8 section-wrapper">
        {/* <h1 className='heading'>B2B</h1> */}
        <div className="flex flex-row-reverse items-center justify-between gap-16">
          <ChartBox
            data={[
              {
                name: "cac",
                percantage: 33,
              },
              {
                name: "aov",
                percantage: 45,
              },
              {
                name: "cr",
                percantage: 33,
              },
              {
                name: "ltv",
                percantage: 66,
              },
              {
                name: "order",
                percantage: 75,
              },
              {
                name: "traffic",
                percantage: 33,
              },
            ]}
          />
          {/* <div className='w-[40vw] relative bottom-0 hidden lg:block'>
                <Image src={WhyNotAstraunotBlue} alt="HeroImg" className='w-full h-full' />
            </div> */}
          {/* <div className='flex flex-col items-center justify-center max-w-lg lg:items-start'>
                        <p className='text-2xl font-medium text-center trackind-wide md:font-semibold lg:text-left'>
                            We helped more than 23 Businesses to increase their reach and presence. We have
                            helped them to reduce their customer acquisition cost by 23% and increased their leads
                            and customers by 39% to increase their revenue by 44%.
                        </p>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default B2B;
