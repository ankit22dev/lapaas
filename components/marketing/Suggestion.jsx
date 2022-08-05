import React from "react";
import B2B from "./B2B";
import D2C from "./D2C";
import ChartBox from "../common/ChartBox";

const Suggestion = () => {
  return (
    <section className="section">
      <div className="flex flex-col items-center justify-center gap-2 section-wrapper">
        <h1 className="heading">How Lapaas Can Help Your Business to Grow</h1>
        <div className="max-w-5xl space-y-4 font-light text-center md:font-normal">
          <p className="md:text-xl">
            You deserve an experienced team who can make sense of your marketing
            campaigns and help you get the most out of your advertising spend.
            Our team has been working with clients for over 11 years and we have
            seen it all! You can trust our expertise when it comes to making
            sure that your campaign is maximising its potential at every stage
            of the process.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        <div className="flex items-center justify-center md:justify-end">
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
        </div>
        <div className="flex items-center justify-center md:justify-start">
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
        </div>
        {/* <D2C />
        <B2B /> */}
      </div>
    </section>
  );
};

export default Suggestion;
