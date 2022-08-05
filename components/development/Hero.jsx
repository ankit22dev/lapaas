import Image from "next/image";
import { useState } from "react";
import astraunotDrinkingCofee from "../../public/imgs/developmentPageTop.png";
import FloatingAstraunotBlack from "../../public/imgs/floatingAstraunotWhite.png";
import Rocket from "../../public/imgs/spaceship.png";
import CloseIcon from "../../public/svgs/close.svg";
import Link from "next/link";

const Hero = ({ comp }) => {
  const [slide, setSlide] = useState(false);

  return (
    <section className="section active">
      <div className="relative flex h-full px-6 py-8">
        <div
          className={`${
            slide ? "w-full" : "w-0"
          } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#d14b39]/95`}
        >
          <div className="relative hidden w-60 lg:block" id="flyingAstroImg">
            <Image
              src={FloatingAstraunotBlack}
              alt="HeroImg"
              className="w-full h-full"
            />
          </div>
          <a
            target="_blank"
            href="https://course.lapaas.com/"
            rel="noopener noreferrer"
            className={`liteYellow-btn mt-auto`}
          >
            Course
          </a>
        </div>
        <div
          className={`${
            slide ? "w-0 opacity-0" : "w-full lg:w-3/5 opacity-100"
          } overflow-hidden transition-all duration-1000 relative flex justify-center items-center`}
        >
          <div className="flex flex-col max-w-xl py-12">
            <div className="items-center justify-center">
              <h1 className="heading">
                <div className="text-left">Make your idea a reality</div>
              </h1>
              <p className="space-y-2 text-base tracking-wider text-left md:text-xl">
                Lapaas is a product development company that helps startups and
                businesses take their products from idea to market. We offer a
                range of services including product design, MVP, website
                development and app development.
              </p>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="w-auto mx-2 mt-2 red-btn"
                onClick={() => comp.fullpageApi.moveTo(4)}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            slide ? "w-full" : "lg:w-2/5"
          } relative origin-right overflow-hidden transition-all duration-1000 flex py-12 flex-col justify-center items-center`}
        >
          <div className="relative hidden w-1/2 lg:block" id="heroImg">
            <Image
              src={astraunotDrinkingCofee}
              alt="HeroImg"
              className="w-full h-full"
            />
          </div>
          <button
            type="button"
            className={`red-btn transition-all mt-auto duration-1000 ${
              slide ? "opacity-100 visible" : "opacity-0 hidden"
            }`}
            onClick={() => {
              comp.fullpageApi.moveSectionDown();
            }}
          >
            Services
          </button>
        </div>
        <div
          className={`${
            slide ? "w-full" : "w-0"
          } overflow-hidden transition-all duration-1000 relative flex py-12 flex-col justify-center items-center bg-[#193247]/95`}
        >
          <div className="relative hidden w-48 lg:block" id="flyingAstroImg">
            <Image src={Rocket} alt="HeroImg" className="w-full h-full" />
          </div>
          <Link href="/consultance">
            <a className={`liteYellow-btn mt-auto`}>Consultance</a>
          </Link>
          {/* <button type='button' className='mt-auto liteYellow-btn'>Consultance</button> */}
        </div>

        {slide && (
          <div
            className="absolute top-0 -translate-x-1/2 cursor-pointer left-1/2"
            onClick={() => setSlide(false)}
          >
            <div className="w-10">
              <Image src={CloseIcon} alt="close" className="w-full h-full" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
