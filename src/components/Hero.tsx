"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-12 lg:pt-20 lg:pb-12 overflow-hidden min-h-screen lg:h-auto lg:min-h-[calc(100vh-80px)]">
      {/* Pink glow on the top left */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* Background Blob from Public Folder */}
      <div className="absolute top-0 right-0 w-full lg:w-[704px] h-[724px] -z-10 pointer-events-none">
        <img src="./Decore.svg" alt="Hero Background Blob" className="absolute top-0 right-0 w-full h-full object-cover lg:object-fill" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary-coral font-bold text-[18px] lg:text-[20px] uppercase mb-4"
            >
              Best Destinations Around the World
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-brand-navy font-bold text-5xl lg:text-[76px] xl:text-[84px] lg:leading-[85px] xl:leading-[89px] mb-6"
              style={{ fontFamily: "var(--font-volkhov)" }}
            >
              Travel, <span className="relative inline-block z-10">
                enjoy
             
              </span>
              <br />
              and live a new
              <br />
              and full life
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-brand-body text-[16px] font-medium leading-[28px] lg:leading-[30px] max-w-[477px] mb-8"
            >
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-10  flex-wrap mt-2"
            >
              {/* Find out more button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary-orange text-white px-8 py-4 rounded-[10px] text-[18px] font-medium shadow-[0px_20px_35px_rgba(241,165,1,0.15)] transition-shadow hover:shadow-[0px_25px_40px_rgba(241,165,1,0.25)]"
              >
                Find out more
              </motion.button>

              {/* Play Demo button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-5 text-[#686D77] text-[17px] font-medium hover:text-brand-navy transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary-coral shadow-[0_8px_24px_rgba(223,105,81,0.35)] flex items-center justify-center">
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M12.2472 6.13622C12.9139 6.52112 12.9139 7.47888 12.2472 7.86378L1.75276 13.9213C1.08609 14.3062 0.252759 13.8273 0.252759 13.0575L0.252759 0.942488C0.252759 0.172688 1.08609 -0.306187 1.75276 0.0787127L12.2472 6.13622Z" fill="white"/>
                  </svg>
                </div>
                Play Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center w-full min-h-[350px] lg:min-h-[500px] xl:w-[750px]">
            {/* Flying Planes Placeholders */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-10 left-[-20px] lg:left-10 w-20 h-20 lg:w-24 lg:h-24 z-20 pointer-events-none"
            >
              {/* USER: Insert Top Left Plane SVG from Figma here */}
              <img src="./plane1.svg" alt="Plane Left" className="w-full h-full object-contain" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[30%] right-[-10px] lg:right-[32px] w-20 h-20 lg:w-24 lg:h-24 z-20 pointer-events-none"
            >
              {/* USER: Insert Middle Right Plane SVG from Figma here */}
              <img src="./plane1.svg" alt="Plane Right" className="w-full h-full object-contain" />
            </motion.div>

            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] flex items-center justify-center z-10"
            >
              {/* Main Hero Image */}
              <img src="./Traveller 1.svg" alt="Hero Traveler" className="w-full h-full object-contain mt-2 lg:mt-4 lg:scale-[1.05]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
