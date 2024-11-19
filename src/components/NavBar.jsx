// import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const NavBar = ({ sideBar, setSideBar }) => {
  return (
    <nav className=" absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-around md:justify-between items-center">
          {/* logo */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className=" text-2xl font-semibold uppercase"
          >
            <span className=" text-primary ">Coders</span> coffee
          </motion.h1>

          {/* hamburger menu */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            onClick={() => setSideBar(!sideBar)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
