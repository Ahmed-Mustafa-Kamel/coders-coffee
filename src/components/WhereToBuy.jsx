// import React from 'react'
import { motion } from "framer-motion";

import WorldMap from "../assets/world-map.webp";
const WhereToBuy = () => {
  return (
    <div className=" container my-36">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {/* form */}
        <form className="space-y-8 px-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className=" text-4xl font-bold text-darkGray font-serif"
          >
            Buy our coffee from any where
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className=" flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className=" input-style w-full lg:w-[150px]"
            />
            <input
              type="Email"
              placeholder="Email"
              className=" input-style w-full "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className=" flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className=" input-style w-full "
            />
            <input
              type="text"
              placeholder="Zip code"
              className=" input-style w-full lg:w-[150px]"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className=" primary-btn w-full"
          >
            Order Now
          </motion.button>
        </form>

        {/* world map */}
        <div className=" col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            src={WorldMap}
            alt=""
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
