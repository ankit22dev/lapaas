import React from "react";
import Firstcount from "./Firstcount";
import Secondcount from "./Secondcount";
import Thirdcount from "./Thirdcount";

const Bonus = () => {

    const CheckIcon = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="self-center flex-shrink-0 mr-2 h-5 w-5 text-white"
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
            <div className="w-full mt-10 px-5 flex flex-col items-center bg-gradient-to-tr font-body">
        <h2 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  font-bold mb-0 text-white text-center">
          Hurry Up Don’t Miss The Opportunity
        </h2>
        <h3 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  my-4 text-white ">
          Buy Now & Get
        </h3>
        <div className="grid grid-cols-3 gap-6 max-w-7xl">
          {/* ::Offer 1 */}
          <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-[#D14B39] text-white shadow-xl border-4 border-white rounded-sm">
            {/* Offer name */}
            <h2 className="font-title mb-1 text-3xl font-extrabold uppercase tracking-wider border-2 border-white bg-white text-[#193247] rounded-sm p-2">
              Bonus - 1
            </h2>
            <ul className="mt-10 flex flex-col">
              <li className="mb-4 inline-flex text-2xl text-center font-bold">
                50 Woo Commerce <br /> All Paid Plugin Bundle
                <br /> Worth ₹15000/-
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Woocommerce Customizer
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Woocommerce Multilingual
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Woocommerce Booster
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Other 45+ Plugins
              </li>
            </ul>
            <h3 className="font-semibold text-xl py-4 uppercase italic">
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
            <ul className="mt-10 flex flex-col">
              <li className="mb-4 inline-flex text-2xl text-center font-bold">
                25 GPL WordPress Website Theme <br /> Worth ₹7500/-
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Astra
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Avada
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                NewsPaper
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Other 20+ Themes
              </li>
            </ul>
            <h3 className="font-semibold text-xl py-4 uppercase italic">
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
            <ul className="mt-10 flex flex-col">
              <li className="mb-4 inline-flex text-2xl text-center font-bold">
                25 Important WordPress Plugin Worth ₹7500/-
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Yoast SEO
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Wp Rocket
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Wp Forms
              </li>
              <li className="mb-3 inline-flex font-medium text-lg">
                <CheckIcon />
                Other 20+ Plugins
              </li>
            </ul>
            <h3 className="font-semibold text-xl py-4 uppercase italic">
              Offer Expired
            </h3>
            <Thirdcount />
          </div>
        </div>
        <h3 className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-8 text-white text-center">
          Instalment Also Available
        </h3>
        <p className="text-white text-base md:text-lg mt-3 italic">
          1st Instalment Before 17th July
        </p>
        <p className="text-white text-base md:text-lg mt-3 italic">
          2nd Instalment Before 15th August
        </p>
        <div className="flex justify-center uppercase mt-8">
          <button
            type="button"
            className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-green-600 text-lg sm:text-2xl text-white font-medium uppercase hover:bg-green-700"
          >
            ENROLLMENT WILL OPEN SOON
          </button>
        </div>
        <div className="flex justify-center items-center mt-5">
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
      <div className="bg-white mx-5 md:mx-14 px-6 py-4 flex transition border border-gray-800 shadow-xl rounded-md mt-8 text-center">
        <div>
          <h3 className="text-xl mb-3 font-bold text-[#193247]">Note</h3>
          <p className="text-[#193247] font-medium">
            You will not be able to join classes after 15th August if you will
            not pay 2nd Instalment before 15th August. However you will get all
            the benefits of the program that are applicable till 15th August.
          </p>
        </div>
      </div>
      <p className="italic md:w-1/2 mx-5 md:mx-auto mt-5 mb-10 text-center text-white">
        200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
        Months Support + Mentorship + Practical Assignment
      </p>
            </div>
        </section>
    );
};

export default Bonus;
