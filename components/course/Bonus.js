import React from "react";
import Firstcount from "./Firstcount";
import Secondcount from "./Secondcount";
import Thirdcount from "./Thirdcount";

const Bonus = () => {

    const CheckIcon = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="self-center flex-shrink-0 w-5 h-5 mr-2 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );

    return (
        <section className="transition-all section">
            <div className="hero-section">
            <div className="flex flex-col items-center w-full px-5 mt-10 bg-gradient-to-tr font-body">
        <h2 className="flex justify-center mb-0 text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl">
          Hurry Up Don’t Miss The Opportunity
        </h2>
        <h3 className="flex justify-center my-4 text-2xl text-white sm:text-3xl md:text-4xl ">
          Buy Now & Get
        </h3>
        <div className="grid grid-cols-3 gap-6 max-w-7xl">
          {/* ::Offer 1 */}
          <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-[#D14B39] text-white shadow-xl border-4 border-white rounded-sm">
            {/* Offer name */}
            <h2 className="font-title mb-1 text-3xl font-extrabold uppercase tracking-wider border-2 border-white bg-white text-[#193247] rounded-sm p-2">
              Bonus - 1
            </h2>
            <ul className="flex flex-col mt-10">
              <li className="inline-flex mb-4 text-2xl font-bold text-center">
                50 Woo Commerce <br /> All Paid Plugin Bundle
                <br /> Worth ₹15000/-
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Woocommerce Customizer
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Woocommerce Multilingual
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Woocommerce Booster
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Other 45+ Plugins
              </li>
            </ul>
            <h3 className="py-4 text-xl italic font-semibold uppercase">
              Offer Expired
            </h3>
            <Firstcount />
          </div>

          {/* ::Offer 2 */}
          <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-[#D14B39] text-white shadow-xl border-4 border-white rounded-sm">
            {/* Offer name */}
            <h2 className="font-title mb-1 text-3xl font-extrabold uppercase tracking-wider border-2 border-white bg-white text-[#193247] rounded-sm p-2">
              Bonus - 2
            </h2>
            <ul className="flex flex-col mt-10">
              <li className="inline-flex mb-4 text-2xl font-bold text-center">
                25 GPL WordPress Website Theme <br /> Worth ₹7500/-
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Astra
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Avada
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                NewsPaper
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Other 20+ Themes
              </li>
            </ul>
            <h3 className="py-4 text-xl italic font-semibold uppercase">
              Offer Expired
            </h3>
            <Secondcount />
          </div>

          {/* ::Offer 3 */}
          <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-[#D14B39] text-white shadow-xl border-4 border-white rounded-sm">
            {/* Offer name */}
            <h2 className="font-title mb-1 text-3xl font-extrabold uppercase tracking-wider border-2 border-white bg-white text-[#193247] rounded-sm p-2">
              Bonus - 3
            </h2>
            {/* Divide line */}
            {/* <span className="w-28 h-1.5 bg-white" /> */}
            {/* Features */}
            <ul className="flex flex-col mt-10">
              <li className="inline-flex mb-4 text-2xl font-bold text-center">
                25 Important WordPress Plugin Worth ₹7500/-
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Yoast SEO
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Wp Rocket
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Wp Forms
              </li>
              <li className="inline-flex mb-3 text-lg font-medium">
                <CheckIcon />
                Other 20+ Plugins
              </li>
            </ul>
            <h3 className="py-4 text-xl italic font-semibold uppercase">
              Offer Expired
            </h3>
            <Thirdcount />
          </div>
        </div>
        <h3 className="flex justify-center mt-8 text-2xl font-semibold text-center text-white sm:text-3xl md:text-4xl">
          Instalment Also Available
        </h3>
        <p className="mt-3 text-base italic text-white md:text-lg">
          1st Instalment Before 17th July
        </p>
        <p className="mt-3 text-base italic text-white md:text-lg">
          2nd Instalment Before 15th August
        </p>
        <div className="flex justify-center mt-8 uppercase">
          <button
            type="button"
            className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-green-600 text-lg sm:text-2xl text-white font-medium uppercase hover:bg-green-700"
          >
            ENROLLMENT WILL OPEN SOON
          </button>
        </div>
        <div className="flex items-center justify-center mt-5">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
            <button
              type="button"
              className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-[#D14B39] text-lg sm:text-2xl text-white font-medium hover:bg-[#b44132]"
            >
              Join the Waiting List
            </button>
          </a>
        </div>
      </div>
      <div className="flex px-6 py-4 mx-5 mt-8 text-center transition bg-white border border-gray-800 rounded-md shadow-xl md:mx-14">
        <div>
          <h3 className="text-xl mb-3 font-bold text-[#193247]">Note</h3>
          <p className="text-[#193247] font-medium">
            You will not be able to join classes after 15th August if you will
            not pay 2nd Instalment before 15th August. However you will get all
            the benefits of the program that are applicable till 15th August.
          </p>
        </div>
      </div>
      <p className="mx-5 mt-5 mb-10 italic text-center text-white md:w-1/2 md:mx-auto">
        200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
        Months Support + Mentorship + Practical Assignment
      </p>
            </div>
        </section>
    );
};

export default Bonus;
