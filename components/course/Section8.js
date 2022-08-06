const Section8 = () => {

    return (
        <section className="transition-all section">
            <div className="hero-section">
                <div className="h-full sm:h-full text-white pb-6 text-center">
                    <h2 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  font-bold mb-0">
                        Hurry Up Don’t Miss The Opportunity
                    </h2>
                    <p className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-semibold  my-4 sm:my-8">
                        <span className="text-[#D14B39] line-through">
                            <span className="text-white">₹72,798 </span>
                        </span>
                        <span className="ml-5">₹34,999 - 51% Off </span>
                    </p>
                    <div className="flex justify-center uppercase cursor-pointer">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
                            <button
                                type="button"
                                className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-green-600 text-lg sm:text-2xl text-white font-medium uppercase hover:bg-green-700"
                            >
                                enrollment will open soon
                            </button>{" "}
                        </a>
                    </div>
                    <p className="italic md:w-1/2 text-xl mx-5 md:mx-auto mt-4 text-center">
                        Professional Teaching in less than ₹175/hr
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
                        <button
                            type="button"
                            className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-[#D14B39] text-lg sm:text-2xl text-white font-medium hover:bg-[#b44132] mt-5"
                        >
                            Join the Waiting List
                        </button>
                    </a>
                    <p className="italic md:w-2/5 text-xl mx-5 md:mx-auto mt-5">
                        200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
                        Months Support + Mentorship + <br /> Practical Assignment
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section8;
