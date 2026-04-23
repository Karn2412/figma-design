"use client";

import { motion } from "framer-motion";

const destinations = [
  {
    id: "rome",
    name: "Rome, Italy",
    price: "$5,42k",
    days: "10 Days Trip",
    img: "./Rectangle1.svg"
  },
  {
    id: "london",
    name: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
    img: "./Rectangle2.svg"
  },
  {
    id: "europe",
    name: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
    img: "./Rectangle3.svg"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Destinations() {
  return (
    <section id="destinations" className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white relative overflow-hidden">
      {/* Decorative Swirl Placeholder behind cards */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headers */}
        <div className="text-center mb-10 lg:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-body text-[18px] font-semibold mb-2"
          >
            Top Selling
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#14183E] text-4xl md:text-[50px] font-bold capitalize"
            style={{ fontFamily: "var(--font-volkhov)" }}
          >
            Top Destinations
          </motion.h2>
        </div>

        {/* 3-column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-[320px] lg:h-[350px] w-full bg-gray-100 relative">
                {/* USER: Insert Destination Image from Figma here */}
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 bg-white flex flex-col grow">
                {/* Row 1: Location & Price */}
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-brand-body text-[18px] font-medium leading-[22.41px]">
                    {dest.name}
                  </h3>
                  <span className="text-brand-body text-[18px] font-medium leading-[22.41px]">
                    {dest.price}
                  </span>
                </div>

                {/* Row 2: Days */}
                <div className="flex items-center gap-3">
                  {/* USER: Insert Navigation/Paper Airplane Icon SVG from Figma here */}
                  <img src="./nav1.svg" alt="Navigation Icon" className="w-4 h-4 object-contain" />
                  <span className="text-brand-body text-[16px] font-medium leading-[19.92px]">
                    {dest.days}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
