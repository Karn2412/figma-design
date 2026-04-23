"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    author: "Mike taylor",
    location: "Lahore, Pakistan",
    img: "./Image.svg"
  },
  {
    id: 2,
    text: "“Jadoo is recognized as one of the finest travel agencies in the world. When it came to planning our trip, we found them to be reliable.”",
    author: "Chris Thomas",
    location: "CEO of Red Button",
    img: "./Image.svg"
  },
  {
    id: 3,
    text: "“This was the best experience I have ever had. The travel arrangements were flawless and the destinations were breathtaking.”",
    author: "Alice Smith",
    location: "Founder of Example",
    img: "./Image.svg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];
  const next = testimonialsData[(currentIndex + 1) % testimonialsData.length];

  return (
    <section id="testimonials" className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Headers & Pagination */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-body text-[18px] font-semibold uppercase mb-4"
            >
              TESTIMONIALS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[#14183E] text-4xl md:text-[50px] font-bold mb-10 md:mb-16 md:leading-[60px] leading-tight capitalize"
              style={{ fontFamily: "var(--font-volkhov)" }}
            >
              What People Say
              <br />
              About Us.
            </motion.h2>

            {/* Pagination Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#39425D]" : "bg-[#E5E5E5]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Right - Stacked Testimonial Cards */}
          <div className="relative w-full lg:max-w-[500px]">
            {/* Background Secondary Faded Card */}
            <div className="absolute top-16 left-12 w-[calc(100%-3rem)] md:w-full bg-white border-2 border-[#F7F7F7] rounded-[10px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] h-[230px] -z-10 hidden sm:flex flex-col justify-end transition-all duration-500">
                <h4 className="font-semibold text-brand-body text-[18px] mb-1">
                  {next.author}
                </h4>
                <p className="text-brand-body text-[14px] font-medium">
                  {next.location}
                </p>
            </div>

            {/* Main Primary Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[10px] p-8 shadow-[0_25px_50px_rgba(0,0,0,0.08)] relative z-10"
                >
                  {/* Avatar Positioned Top Left Overlapping */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gray-100 overflow-hidden shadow-md border-0">
                    <img src={current.img} alt={current.author} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-brand-body text-[16px] font-medium leading-[32px] mb-8 mt-4">
                    {current.text}
                  </p>

                  <div>
                    <h4 className="font-semibold text-brand-body text-[18px] mb-1">
                      {current.author}
                    </h4>
                    <p className="text-brand-body text-[14px] font-medium">
                      {current.location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Up/Down Navigation Arrows */}
              <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10">
                <button onClick={prevTestimonial} className="group p-2" aria-label="Previous testimonial">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L7 1L13 7" stroke={currentIndex === 0 ? "#BCB7C2" : "#3E2E4D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors group-hover:stroke-[#3E2E4D]"/>
                  </svg>
                </button>
                <button onClick={nextTestimonial} className="group p-2" aria-label="Next testimonial">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke={currentIndex === testimonialsData.length - 1 ? "#BCB7C2" : "#3E2E4D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors group-hover:stroke-[#3E2E4D]"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Arrows (Bottom) */}
            <div className="flex lg:hidden justify-center gap-10 mt-20">
                <button onClick={prevTestimonial} className="p-2" aria-label="Previous testimonial">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L7 1L13 7" stroke={currentIndex === 0 ? "#BCB7C2" : "#3E2E4D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button onClick={nextTestimonial} className="p-2" aria-label="Next testimonial">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke={currentIndex === testimonialsData.length - 1 ? "#BCB7C2" : "#3E2E4D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
