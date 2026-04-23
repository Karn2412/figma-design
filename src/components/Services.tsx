"use client";

import { motion } from "framer-motion";
import { img } from "framer-motion/m";

const services = [
  {
    id: "calculated-weather",
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    img:"./Group48.svg"
  },
  {
    id: "best-flights",
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    img:"./plane.svg"
  },
  {
    id: "local-events",
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferred to sportsmen it.",
    img:"./mic.svg"
  },
  {
    id: "customization",
    title: "Customization",
    desc: "Preferred to sportsmen it engrossed listening park gate.",
    img:"./settings.svg"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white relative">
      {/* Decorative Plus Marks Placeholder */}
      <div className="absolute top-10 right-10 w-24 h-24 z-0 pointer-events-none hidden md:block">
         {/* USER: Insert Plus/Cross Marks SVG from Figma here */}
         <img src="./Group4.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headers */}
        <div className="text-center mb-10 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-body text-[18px] font-semibold mb-2"
          >
            CATEGORY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#14183E] text-4xl md:text-[50px] font-bold capitalize"
            style={{ fontFamily: "var(--font-volkhov)" }}
          >
            We Offer Best Services
          </motion.h2>
        </div>

        {/* 4-column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative group h-full"
            >
              {/* Decorative background element that appears on hover */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-coral rounded-tl-[30px] rounded-br-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="bg-white rounded-[36px] px-6 py-8 lg:px-10 lg:py-10 text-center h-full transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 z-10 flex flex-col items-center">
                {/* Icon Placeholder */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  {/* USER: Insert Service Icon from Figma here based on service.id */}
                  <img src={service.img} alt={`${service.title} Icon`} className="w-full h-full object-contain" />
                </div>

                <h3 className="text-[#1E1D4C] text-[20px] font-semibold mb-4" style={{ fontFamily: "var(--font-open-sans, sans-serif)" }}>
                  {service.title}
                </h3>
                
                <p className="text-brand-body text-[16px] font-medium leading-[26px]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
