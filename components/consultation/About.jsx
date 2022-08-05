import Image from "next/image";
import FloatingAstraunotBlack from "../../public/imgs/floatingAstraunotWhite.png";

const About = () => {
  return (
    <section className="section">
      <div className="flex items-center justify-center my-auto section-wrapper md:w-full lg:justify-between">
        {/* <div className="flex items-center justify-center justify-between section-wrapper md:w-full"> */}
        <div className="relative hidden w-1/3 lg:block" id="flyingAstroImg">
          <Image
            src={FloatingAstraunotBlack}
            alt="HeroImg"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-w-lg">
          <h1 className="heading">
            Lapaas - A marketing agency that cares about you!
          </h1>
          <p className="text-lg font-medium trackind-wide md:font-semibold md:text-xl">
            Lapaas Digital is a leading marketing company which helps businesses
            to grow their digital presence. Lapaas Digital not only follows the
            latest trends in digital marketing, but also focuses on core
            fundamentals of business and marketing to help your business reach
            its full potential through well-planned strategies. With over 10
            years of experience under our belt, we are experts at what we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
