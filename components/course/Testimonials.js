import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    
const testimonials = [
    {
      name: "Rajesh Kumar",
      testimonial:
        "The teaching style and teachings are so awesome. Even a layman can learn Digital marketing very easily. Lapaas is the best digital marketing institute. I recommend you to just take a course and then see the growth.",
    },
    {
      name: "Hemant Chauhan",
      testimonial:
        "Best place to learn digital marketing skills. Course content is extensive and is quite helpful for beginners too. Best part is one get to learn from an already successful industry professional (Sahil Khanna) himself that really helps to develop the right mindset to enter in this field.",
    },
    {
      name: "Ashish",
      testimonial:
        "Never thought that I can get tons of knowledge in such a short time period. Sahil sir made us enthral in every class. Besides Digital marketing u need lots of things that help u to stand out which he teaches u. I personally recommend this course to every student and businessman.",
    },
    {
      name: "Tabish Mohmad",
      testimonial:
        "One of the best Digital Marketing Course and training done by dedicated Sahil Kahnna who does not works just for money, Join this if you want practical knowledge of Digital Marketing as well as Business sense along with Video production,Photoshop and Web development.",
    },
    {
      name: "Ankit Pathak",
      testimonial:
        "2 sal se me digital marketing institute search kar rha tha fir lapaas ke bare me pata chla or mene lapaas join kiya mera decision sahi tha best digital marketing course in india sahil sir is best teacher thank u so much lapaas and sahil sir for my best future",
    },
    {
      name: "Jatin Kumar",
      testimonial:
        "I Just completed My Digital Marketing Course from Lapaas. One of the best Institute for Digital Marketing. Everyone teach you only digital marketing but Here you will learn basic Marketing, and more extra thing. Sahil khanna Sir is very nice person. Very helpful He gave a free tools of Digital Marketing who really needs it and can't afford it. My Experience with Lapaas is a one of the best experience in my Life.",
    },
  ];

    return (
        <section className="transition-all section">
            <div className="hero-section">
            <div className="text-white">
        <h2 className="text-4xl font-bold  text-center">Reviews</h2>
        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 px-5 pb-16 pt-8 gap-5">
          {/* section  */}
          {testimonials.map((test) => (
            <div key={test.testimonial}>
              <div className="group w-full bg-[#D14B39] relative flex flex-col items-center  cursor-pointer shadow-2xl md:p-8 p-6 ">
                <div className="flex flex-col ">
                  <div className="text-white flex justify-center items-center text-3xl">
                    <FaQuoteLeft />
                  </div>
                  <div className="my-6 font-medium ">
                    <p className="leading-relaxed text-center text-lg">
                      {test.testimonial}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <hr className="w-9 border-2 bg-[#193247] border-[#193247] rounded-full shadow-xl" />
                  </div>
                  {/* <div className="flex justify-center my-5">
                    <img
                      src="https://i.ibb.co/ZgF5Zzz/avatar-1.png"
                      alt="Testimonial Img"
                      className=""
                    />
                  </div> */}
                  <div className="text-center">
                    <h3 className="font-semibold">{test.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* section  */}
        </div>
      </div>
            </div>
        </section>
    );
};

export default Testimonials;
