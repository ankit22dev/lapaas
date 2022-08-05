import React, { useState } from "react";
import Header from "./Header";
import Taare from "../../public/imgs/taare.png";
import Taare1 from "../../public/imgs/taare1.png";
import NavigationMenu from "./NavigationMenu";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const DefaultLayout = ({ children }) => {
  const router = useRouter();

  React.useEffect(() => {
    window.onscroll = () => {
      console.log("hello world");
    };
  }, []);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // boxShadow: 'inset 0 0 0 1000px rgba(25, 50, 71,0.5)'
  return (
    <>
      <NavigationMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div
        className={`min-h-screen bg-black text-white relative default-layout ${
          router.pathname !== "/" && "BlueBg"
        }`}
        style={{
          //   backgroundImage: `url(${Taare.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: [1, 1, 1],
          }}
          transition={{
            ease: "easeInOut",
            duration: 5,
            repeatDelay: 2,
            repeat: 100,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${Taare.src})`,
              }}
              id="customAnimatedBackground"
            ></div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.4, 0],
          }}
          transition={{
            ease: "easeInOut",
            duration: 5,
            repeatDelay: 2,
            repeat: 100,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${Taare.src})`,
                backgroundPosition: "0% 10%",
              }}
              id="customAnimatedBackground2"
            ></div>
          </div>
        </motion.div>
        {/* <ParticleArea /> */}
        <Header setIsNavOpen={setIsNavOpen} />
        {children}
      </div>
    </>
  );
};

export default DefaultLayout;
