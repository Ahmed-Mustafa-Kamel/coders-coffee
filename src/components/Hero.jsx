import React from "react";
import BgImage from "../assets/bg-slate.webp";
import CoffeeMain from "../assets/black.webp";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const bgImageStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sideBar, setSideBar] = React.useState(false);
  return (
    <main style={bgImageStyle}>
      <section className=" relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar */}
          <NavBar sideBar={sideBar} setSideBar={setSideBar} />
          {/* /Navbar */}
          {/* Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center minh--[850px]:">
            {/* text content  */}
            <div className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className=" text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              {/*  */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className=" relative z-10 space-y-4">
                  <h1 className=" text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className=" text-sm opacity-55 leading-loose">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo, autem sunt temporibus itaque aperiam alias officia
                    unde minus cumque dolorum fugiat magnam
                  </h1>
                </div>
                <div className=" absolute -top-6 -left-10 w-[280px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero image */}
            <motion.div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={CoffeeMain}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>
              {/* text bg */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" absolute -top-1 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvack Tumbler
                </h1>
              </motion.div>
            </motion.div>
            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.4,
              }}
              className=" text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 hidden md:visible"
            >
              <h1 className=" opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              {/*  */}
              <div className="relative">
                <div className=" relative z-10 space-y-4">
                  <h1 className=" text-2xl">The Design,</h1>
                  <h1 className=" text-sm opacity-55 leading-loose">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo, autem sunt temporibus
                  </h1>
                </div>
                <div className=" absolute -top-6 -right-10 w-[280px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
          {/* /Hero */}
        </div>

        {/* sideBar menu */}

        {sideBar && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="absolute top-0 right-0 w-[180px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[2px] h-[70px] bg-white "></div>

                {/* social icons */}

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white hover:scale-[1.2] transition-all">
                  <FaFacebookF className=" text-2xl " />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white hover:scale-[1.2] transition-all">
                  <FaTwitter className=" text-2xl" />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white hover:scale-[1.2] transition-all">
                  <FaInstagram className=" text-2xl" />
                </div>

                {/* line */}
                <div className="w-[2px] h-[70px] bg-white "></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
