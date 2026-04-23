"use client";

import { motion } from "framer-motion";
import { img } from "framer-motion/m";

const steps = [
  {
    id: 1,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    colorClass: "bg-primary-orange",
    img:"./1.svg"
  },
  {
    id: 2,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    colorClass: "bg-primary-coral",
    img:"./2.svg"
  },
  {
    id: 3,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    colorClass: "bg-[#006380]",
    img:"./3.svg"
  },
];

export default function BookingSteps() {
  return (
    <section id="easy-steps" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Steps Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-body text-[18px] font-semibold mb-4"
            >
              Easy and Fast
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[#14183E] text-4xl md:text-[50px] font-bold mb-12 leading-tight capitalize"
              style={{ fontFamily: "var(--font-volkhov)" }}
            >
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </motion.h2>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex gap-5"
                >
                  {/* Icon Placeholder Container */}
                  <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${step.colorClass}`}>
                    {/* USER: Insert Step Icon SVG from Figma here based on step.id */}
                    <img src={step.img} alt={`Step ${step.id} Icon`} className="w-6 h-6 object-contain" />
                  </div>
                  
                  <div>
                    <h3 className="text-brand-body text-[16px] font-bold leading-[19.92px] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-brand-body text-[16px] font-normal leading-[19.92px] max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Cards Visual */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Background shape effect (matching the cyan/blue glow in Figma) */}
            <div className="absolute top-1/2 left-1/2 translate-x-[-65%] translate -y-[-60%] w-[450px] h-[450px] bg-[#59B1E6] rounded-full blur-[80px] opacity-20 -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[370px]"
            >
              {/* Main Trip to Greece Card Placeholder */}
              <div className="bg-white rounded-4xl p-5 shadow-[0_25px_50px_rgba(0,0,0,0.1)] w-full">
                <div className="h-40 rounded-3xl bg-gray-100 overflow-hidden mb-5">
                   {/* USER: Insert Main Card Image (Girl in Greece) from Figma here */}
                   <img src="Rectangle4.svg" alt="Trip to Greece" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[#080809] text-[18px] font-medium leading-[22.41px] tracking-[0.27px] mb-2">Trip To Greece</h4>
                <p className="text-[#84829A] text-[16px] font-medium leading-[19.92px] mb-4">14-29 June | by Robbin joseph</p>
                
                {/* Mini Action Icons Row */}
                <div className="flex gap-3 mb-6">
                  <img src="OPTIONS.svg" alt="Action Icons" className="h-8 object-contain" />
                  {/* USER: Insert Card Mini Action Icons (Leaf, Map, Send) from Figma here */}
                </div>

                <div className="flex items-center justify-between text-[#84829A] text-[16px] font-medium leading-[19.92px]">
                   <div className="flex items-center gap-3">
                     {/* USER: Insert Building Icon from Figma here */}
                     <img src="./text.svg" alt="Building" className="w-4 h-4 object-contain" />
                     <span>24 people going</span>
                   </div>
                   {/* USER: Insert Heart/Like Icon from Figma here */}
                   <img src="./heart.svg" alt="Like" className="w-4 h-4 object-contain" />
                </div>
              </div>

              {/* Smaller Overlapping Ongoing Card */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as const }}
                className="absolute -bottom-10 right-2 sm:-right-6 lg:-right-16 bg-white rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.1)] w-[90%] sm:w-full max-w-[260px] z-10"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 shrink-0 overflow-hidden">
                     {/* USER: Insert Small Location Image (Rome/Temple) from Figma here */}
                     <img src="./Mask.svg" alt="Rome" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[#84829A] text-[14px] font-medium leading-[17.43px] mb-1">Ongoing</p>
                    <h5 className="text-[#080809] text-[18px] font-medium leading-[22.41px] mb-2">Trip to rome</h5>
                    <div className="w-full bg-[#EFEFEF] rounded-full h-1.5 mb-1">
                      <div className="bg-[#8A79DF] h-1.5 rounded-full w-[40%]"></div>
                    </div>
                    <p className="text-[#080809] text-[14px] font-medium leading-[17.43px]">
                      <span className="text-[#8A79DF]">40%</span> completed
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
