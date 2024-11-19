// import React from 'react'
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import creditCards from "../assets/website/credit-cards.webp";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-primary to-primaryDark p-12 pb-8 text-white">
      <div className=" container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* company details */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className=" space-y-6"
          >
            <h1 className=" text-3xl font-bold uppercase">Coders Coffee</h1>

            <p className=" text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>

            <p className="flex items-center gap-2">
              <FaPhone />
              +1 (123) 456-7890
            </p>

            <p className="flex items-center gap-2 mt-2">
              {" "}
              <FaMapLocation />
              Noida, Utter Paradash
            </p>
          </motion.div>

          {/* footer links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className=" space-y-6"
          >
            <h1 className=" text-3xl font-bold">Quick Links</h1>

            <div className=" grid grid-cols-2">
              {/* first column */}
              <div>
                <ul className=" space-y-2">
                  <li>Home</li>
                  <li>Aboute</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second column */}
              <div>
                <ul className=" space-y-2">
                  <li>Home</li>
                  <li>Aboute</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-xl font-semibold mb-2">Follow us</h1>

            <div className="flex items-center gap-3">
              <FaFacebook className=" text-3xl hover:scale-105 duration-300 transition-all" />
              <FaInstagram className=" text-3xl hover:scale-105 duration-300 transition-all" />
              <FaTelegram className=" text-3xl hover:scale-105 duration-300 transition-all" />
              <FaGoogle className=" text-3xl hover:scale-105 duration-300 transition-all" />
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={creditCards} alt="credit cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copy rights */}
        <p className=" text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
