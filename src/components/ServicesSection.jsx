import React from "react";
import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

function ServicesSection() {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];

  return (
    <section
      className="py-20 container px-4 sm:px-6  lg:px-16 mx-auto"
      id="services"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex md:flex-row items-center justify-between gap-12 lg:gap-20 flex-col"
      >
        {/* header */}

        <motion.div variants={fadeIn("right", 0.4)} className="px-10">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl mb-4  font-bold md:w-4/5"
          >
            Future of support with new shape
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 font-semibold text-lg md:w-4/5 mb-4"
          >
            Discuss your goats, determine success metrics, identify problems
          </motion.p>

          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span>Ux design content stratgy</span>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span>Devlopment bring</span>
            </motion.div>
          </motion.div>

          <motion.button
            variants={fadeIn("up", 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white mt-8 px-6 py-2 hover:bg-blue-800 transition-colors text-lg rounded-full"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* services card */}

        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8"
        >
          {services.map((services, index) => (
            <motion.div
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white cursor-pointer max-w-72 rounded-2xl hover:shadow-xl transition-all hover:scale-105 duration-300 p-6"
            >
              <motion.div variants={fadeIn("down", 0.4 * (index + 1))}>
                {services.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2 mt-2"
              >
                {services.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-gray-600 font-medium mb-4"
              >
                {services.description}
              </motion.p>
              <motion.a
                variants={fadeIn("up", 0.6 * (index + 1))}
                href={services.link}
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ServicesSection;
