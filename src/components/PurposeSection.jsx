import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

function PurposeSection() {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];
  return (
    <section
      id="about"
      className="w-full bg-gray-100 px-4 py-16 sm:px-8 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn("right", 0.3)}>
            <motion.p
              variants={fadeIn("up", 0.4)}
              className="text-lg text-purple-600 font-bold mb-2"
            >
              ACHIVE MORE
            </motion.p>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl text-gray-900 w-full md:w-4/5 md:text-4xl font-bold"
            >
              Purpose of a convoy is to keep your team
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                key={index}
                className="flex  space-x-4"
              >
                <motion.div
                  variants={fadeIn("right", 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center  justify-start rounded-lg"
                >
                  {feature.icon}
                </motion.div>

                <motion.div variants={fadeIn("left", 0.4 * (index + 1))}>
                  <motion.h3
                    variants={textVariant(0.3)}
                    className="text-xl font-bold text-gray-900"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn("up", 0.4)}
                    className="text-gray-600 text-lg"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default PurposeSection;
