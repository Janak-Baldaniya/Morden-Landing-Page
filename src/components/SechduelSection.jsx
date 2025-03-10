import React from "react";
import sechduelimage from "../assets/stats.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

function SechduelSection() {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* left */}

        <motion.div variants={fadeIn("right", 0.3)} className="md:w-1/2 w-full">
          <img
            variants={fadeIn("up", 0.4)}
            src={sechduelimage}
            alt="sechduel"
            className="w-full h-auto"
          />
        </motion.div>

        {/* right */}

        <motion.div variants={fadeIn("left", 0.3)} className="md:w-1/2 w-full">
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-orange-600 font-semibold text-lg"
          >
            SECHDUEL
          </motion.p>

          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neutral-900"
          >
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-gray-600 text-lg mb-8"
          >
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </motion.p>
          <motion.a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all text-lg"
          >
            Explore scheduling features
            <FaArrowRightLong className="size-6" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SechduelSection;
