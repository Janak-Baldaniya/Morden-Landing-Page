import React from "react";
import heroimage from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import { text } from "framer-motion/client";

function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-40 pb-6 px-10 sm:px-6 lg:px-14"
    >
      {/* left side */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star badge*/}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-2  md:px-8 py-2 rounded-full  cursor-pointer group">
            <span className="group-hover:scale-110 text-lg transition-transform hover:text-blue-600">
              ⭐
            </span>
            <span className="text-lg text-gray-800 font-medium">
              Jump start your growth
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-[50px] leading-tight font-bold md:px-10"
        >
          We boost the growth for
          <span className="text-blue-600 inline-block relative">
            Startup to Fortune 500
          </span>
          Companies
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-bg-gray-600 md:px-10 text-lg md:text-xl max-w-xl"
        >
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 md:px-10 max-w-md"
        >
          <input
            type="Email"
            placeholder="Email"
            className="flex-1 px-2 py-2 border border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all text-gray-700 text-lg "
          />
          <button className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300  w-20">
            →
          </button>
        </motion.div>
      </div>

      {/* right side */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 "
      >
        <div className="relative">
          <img
            src={heroimage}
            alt="hero image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 h-[550px]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
