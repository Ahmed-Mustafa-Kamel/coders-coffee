// import React from 'react'
import bannerImg from "../assets/coffee-cover.webp";
import appStoreImg from "../assets/website/app_store.webp";
import playStoreImg from "../assets/website/play_store.webp";
import { motion } from "framer-motion";

const AppBanner = () => {
  const BannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  return (
    <div className=" container my-14">
      <div
        style={BannerStyle}
        className=" sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className=" space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className=" text-2xl text-center sm:text-4xl font-semibold"
            >
              Download Our App
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className=" text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              praesentium nostrum quam corporis.{""}
            </motion.p>

            {/* image links */}
            <div className=" flex justify-center items-center gap-4">
              <a href="" className="max-w-[120px] md:max-w-[150px]">
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                  src={appStoreImg}
                />
              </a>

              <a href="" className="max-w-[120px] md:max-w-[150px]">
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                  src={playStoreImg}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
