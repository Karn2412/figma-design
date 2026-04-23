"use client";

import { motion } from "framer-motion";

export default function Subscribe() {
  return (
    <section id="subscribe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-brand-lightBlue/10 rounded-[40px] sm:rounded-[100px] rounded-tl-3xl px-6 py-12 md:px-8 md:py-20 text-center overflow-hidden"
        >
          {/* Decorative Rings Placeholder */}
         

          {/* Floating Paper Plane Icon Placeholder */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 z-10"
          >
             {/* USER: Insert Send/Paper Plane SVG from Figma here */}
             <img src="send.svg" alt="Send Icon" className="w-full h-full object-contain" />
          </motion.div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2
              className="text-brand-body text-2xl md:text-[33px] font-semibold mb-10 md:mb-14 leading-tight md:leading-[54px] text-center"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Subscribe to get information, latest news and other
              <br className="hidden md:block" /> interesting offers about Jadoo
            </h2>

            <form className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
              <div className="relative w-full flex-1">
                {/* Email Icon Placeholder inside input */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5">
                   {/* USER: Insert Mail Icon SVG from Figma here */}
                   <img src="down.svg" alt="Mail" className="w-full h-full object-contain" />
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full pl-14 pr-6 py-5 rounded-[10px] bg-white text-[#39425D] text-[14px] font-normal border-none focus:outline-none focus:ring-2 focus:ring-primary-orange transition-shadow"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-5 rounded-[10px] text-white text-[17px] font-semibold transition-transform hover:scale-105"
                style={{ background: "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)", fontFamily: "var(--font-open-sans, sans-serif)" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Decorative Plus Marks Placeholder (Bottom Right) */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 z-0 pointer-events-none hidden md:block opacity-30">
           {/* USER: Insert Plus/Cross Marks SVG from Figma here */}
           <img src="16.svg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
