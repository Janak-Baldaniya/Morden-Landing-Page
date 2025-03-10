import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-14 px-4" id="testimonials">
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What our happy client say
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-gray-600 text-lg"
        >
          Tings that make it the best place to start trading
        </motion.p>
      </motion.div>

      {/* testimonial card */}

      <motion.div variants={fadeIn("up", 0.5)}>
        {/* swiper card */}

        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index} className="h-full md:py-12 py-4">
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                className="felx flex-col text-center bg-white shadow-md rounded-lg h-full hover:shadow-xl transition-all hover:scale-100 duration-300"
              >
                <motion.div
                  variants={fadeIn("down", 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn("up", 0.5 * (index + 1))}
                    src={testimonials.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.4 * (index + 1))}
                  className="flex justify-center mb-4"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span
                      variants={fadeIn("up", 0.1 * starIndex)}
                      className="text-yellow-400"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3
                  variants={textVariant(0.3)}
                  className="text-lg font-semibold mb-3"
                >
                  {testimonials.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6 * (index + 1))}
                  className="text-gray-600 pb-3"
                >
                  {testimonials.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation btn */}

        <motion.div
          variants={fadeIn("up", 0.7)}
          className="flex justify-center gap-4 mt-4 md:mt-8"
        >
          <motion.button
            variants={fadeIn("right", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom flex items-center justify-center w-12 h-12 hover:bg-blue-500 hover:text-white duration-200 transition-all rounded-full border border-gray-200 cursor-pointer"
          >
            <BsChevronLeft />
          </motion.button>

          <motion.button
            variants={fadeIn("left", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom flex items-center justify-center w-12 h-12 hover:bg-blue-500 hover:text-white duration-200 transition-all rounded-full border border-gray-200 cursor-pointer"
          >
            <BsChevronRight />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonial;
