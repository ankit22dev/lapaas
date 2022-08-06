const ProgramFor = () => {

    const customers = [
        {
            key: "1",
            profession: "Student ",
            description:
                "This course will help all the students to build a successful career in digital marketing. After completing this course you will get the job or you can start your own marketing agency.",
        },
        {
            key: "2",
            profession: "Business Owners",
            description:
                "This course will help all the business owners to grow their business through digital marketing. By completing this course you can save more than 2 lakh of cost for your business. ",
        },
        {
            key: "3",
            profession: "Freelancers ",
            description:
                "This course will help you to become a successful freelancer who can work from anywhere in the world. In this course you will also learn how you can get freelancing projects and how you can automate your freelancing business.",
        },
        {
            key: "4",
            profession: "Social Media Influencer ",
            description:
                "This Course will help you to become a successful  social media influencer. In this course you will learn in depth about social media and how you can build your personal brand. This program will also teach you how you can earn 6 figures as a social media influencer. ",
        },
        {
            key: "5",
            profession: "YouTubers",
            description:
                "This course will help all the youtubers who are already posting videos on youtube or people who want to start their own YouTube Channel. In this course you will learn everything about YouTube, Video Production, Editing and Science behind great videos. It will also help you to convert youtube channels into a successful business. ",
        },
        {
            key: "6",
            profession: "Who want to start their business ",
            description:
                "This course will help all the people who want to start their own business or startup. In this course you will learn very important core business and marketing concepts which will help every business owner in multiple ways.",
        },
    ];

    return (
        <section className="transition-all section">
            <div className="hero-section">
                <div>
                    <section className="text-white ">
                        <div className="max-w-screen-xl px-4 py-10 md:py-14 mx-auto sm:px-6 lg:px-8">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="text-3xl font-bold sm:text-4xl">
                                    Who is this program for?
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2 justify-center">
                                {customers.map((customer) => (
                                    <div
                                        key={customer.key}
                                        className="bg-white mr-0 md:mr-6 p-4 flex transition border border-gray-800 shadow-xl rounded-sm"
                                    >
                                        <div className="flex">
                                            <svg
                                                className="w-8 h-10 text-[#D14B39] mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl mb-3 font-bold text-[#193247]">
                                                {customer.profession}
                                            </h3>
                                            <p className="text-[#193247] font-medium">
                                                {customer.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white mr-0 md:mr-6 p-4 flex transition border border-gray-800 shadow-xl rounded-sm mt-8">
                                <div className="flex">
                                    <svg
                                        className="w-8 h-10 text-[#D14B39] mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl mb-3 font-bold text-[#193247]">
                                        Agency Owners
                                    </h3>
                                    <p className="text-[#193247] font-medium">
                                        This course will also help all digital marketing agency owners
                                        and also those who want their own digital marketing agency. You
                                        will get 25+ useful resources for your agency and you will learn
                                        how you can start your agency or how you can grow your digital
                                        marketing agency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default ProgramFor;
