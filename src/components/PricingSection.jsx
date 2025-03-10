import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

function PricingSection() {
  const [productCount, setProductCount] = useState(1);

  // calculate price base on product count
  const starterprice = Math.round((4000 * productCount) / 50);
  const Businessprice = Math.round((7500 * productCount) / 50);
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Pricing
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Starter plan */}

          <motion.div
            variants={fadeIn("right", 0.5)}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <motion.h3
              variants={fadeIn("up", 0.6)}
              className="text-2xl text-gray-600 mb-4 font-semibold"
            >
              Starter
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.7)}
              className="text-3xl  font-bold mb-4"
            >
              ${starterprice}/month
            </motion.p>
          </motion.div>

          {/* Business plan */}

          <motion.div
            variants={fadeIn("left", 0.5)}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <motion.h3
              variants={fadeIn("up", 0.6)}
              className="text-2xl text-gray-600 mb-4 font-semibold"
            >
              Business
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.7)}
              className="text-3xl  font-bold mb-4"
            >
              ${Businessprice} /month
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.8)} className="max-w-xl mx-auto">
          <motion.p
            variants={fadeIn("up", 0.9)}
            className="text-xl text-center font-bold text-gray-600 mb-4"
          >
            {productCount}Products
          </motion.p>
          <motion.div variants={fadeIn("up", 1.0)} className="px-4 relative">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                className="h-2 w-full bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.1)}
            className="text-center mt-12"
          >
            <motion.p
              variants={fadeIn("up", 1.2)}
              className="text-xl text-gray-600 font-semibold mb-4"
            >
              Ready to Get Started
            </motion.p>

            <motion.button
              variants={fadeIn("up", 1.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white  text-lg rounded-lg hover:bg-blue-800 transition-colors cursor-pointer px-5 py-2 font-semibold"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PricingSection;
