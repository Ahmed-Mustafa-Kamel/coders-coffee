// import React from 'react'
import { motion } from "framer-motion";
import coffee1 from "../assets/coffee/coffee1.webp";
import coffee3 from "../assets/coffee/coffee3.webp";

const servicesData = [
  {
    id: 1,
    image: coffee1,
    title: "Black Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ad!",
  },
  {
    id: 2,
    image: coffee3,
    title: "Hot Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ad!",
  },
  {
    id: 3,
    image: coffee1,
    title: "Cold Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ad!",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easInOut",
      duration: 0.5,
    },
  },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4, // delay between animations
    },
  },
};
const Services = () => {
  return (
    <div className=" container my-16 space-y-4">
      {/* header */}
      <div className=" text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className=" text-3xl font-bold text-lightGray"
        >
          Fresh and <span className=" text-primary">Tasty</span> coffee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className=" text-sm opacity-50"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, iste!
          Asperiores ex, maiores doloribus ullam harum quaerat a quis illo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          ad!
        </motion.p>
      </div>

      {/* cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.6, once: true }}
        className=" grid grid-cols-1  md:grid-cols-3 gap-4"
      >
        {servicesData.map((service) => (
          // eslint-disable-next-line react/jsx-key
          <div className=" text-center p-4 space-y-6">
            <motion.img
              variants={cardVariants}
              src={service.image}
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 transition-all duration-300  cursor-pointer"
            />
            <div className=" space-y-2">
              <h1 className=" text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className=" text-darkGray text-sm">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
