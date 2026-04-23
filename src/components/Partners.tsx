"use client";

import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section id="partners" className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-4 lg:px-10"
        >
          {/* Logo 1 */}
          <div className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 w-32 h-12 flex items-center justify-center">
             <img src="./a.svg" alt="Partner 1" className="max-w-full max-h-full object-contain" />
          </div>

          {/* Logo 2 */}
          <div className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 w-32 h-12 flex items-center justify-center">
             <img src="./b.svg" alt="Partner 2" className="max-w-full max-h-full object-contain" />
          </div>

          {/* Logo 3 (Expedia - Highlighted) */}
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] px-8 py-6 hover:scale-105 transition-all duration-300 flex items-center justify-center">
             <img src="./c.svg" alt="Partner 3" className="w-32 h-10 object-contain" />
          </div>

          {/* Logo 4 */}
          <div className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 w-32 h-12 flex items-center justify-center">
             <img src="./d.svg" alt="Partner 4" className="max-w-full max-h-full object-contain" />
          </div>

          {/* Logo 5 */}
          <div className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 w-32 h-12 flex items-center justify-center">
             <img src="./e.svg" alt="Partner 5" className="max-w-full max-h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
