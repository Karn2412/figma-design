"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Pink/Purple Gradient Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D5AEE4]/30 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-10 lg:gap-8 mb-20">
          
          {/* Col 1: Jadoo Logo & Tagline */}
          <div className="pr-4">
            <div className="mb-4">
              <img src="Jadoo.svg" alt="Jadoo Logo" className="h-[34px] w-auto object-contain" />
            </div>
            <p className="text-brand-body text-[13px] font-medium leading-[16.19px] mt-4 max-w-[207px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-[#080809] text-[21px] font-bold leading-[26.15px] mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">About</a></li>
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Careers</a></li>
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Mobile</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-[#080809] text-[21px] font-bold leading-[26.15px] mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Help/FAQ</a></li>
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Press</a></li>
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Affilates</a></li>
            </ul>
          </div>

          {/* Col 4: More */}
          <div>
            <h4 className="text-[#080809] text-[21px] font-bold leading-[26.15px] mb-6">More</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Airlinefees</a></li>
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Airline</a></li>
              <li><a href="#" className="text-brand-body text-[18px] font-medium leading-[22.41px] hover:text-primary-orange">Low fare tips</a></li>
            </ul>
          </div>

          {/* Col 5: Socials & App Links */}
          <div className="lg:pl-8">
            {/* Social Icons */}
            <div className="flex gap-6 mb-6 items-center">
              {/* Facebook */}
              <div className="w-[41px] h-[41px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.20312 5.5H0V8.5H2.20312V17H6.01562V8.5H8.92188L9.5625 5.5H6.01562V3.79688C6.01562 3.03125 6.1875 2.5 7.42188 2.5H9.5625V0H6.60938C3.59375 0 2.20312 1.51562 2.20312 4.14062V5.5Z" fill="#080809"/>
                </svg>
              </div>

              {/* Instagram */}
              <div className="w-[41px] h-[41px] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden bg-linear-to-tr from-[#FFD25F] via-[#FF6969] to-[#8E44AD]">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 4.14062C6.09375 4.14062 4.14062 6.09375 4.14062 8.5C4.14062 10.9062 6.09375 12.8594 8.5 12.8594C10.9062 12.8594 12.8594 10.9062 12.8594 8.5C12.8594 6.09375 10.9062 4.14062 8.5 4.14062ZM8.5 11.3594C6.92188 11.3594 5.64062 10.0781 5.64062 8.5C5.64062 6.92188 6.92188 5.64062 8.5 5.64062C10.0781 5.64062 11.3594 6.92188 11.3594 8.5C11.3594 10.0781 10.0781 11.3594 8.5 11.3594ZM12.9844 5.01562C12.9844 5.5625 12.5469 6.01562 12 6.01562C11.4531 6.01562 11.0156 5.5625 11.0156 5.01562C11.0156 4.46875 11.4531 4.01562 12 4.01562C12.5469 4.01562 12.9844 4.46875 12.9844 5.01562ZM16.8906 5.0625C16.8281 3.73438 16.5312 2.57812 15.625 1.65625C14.7031 0.75 13.5625 0.453125 12.2344 0.390625C10.875 0.3125 6.10938 0.3125 4.75 0.390625C3.42188 0.453125 2.28125 0.75 1.35938 1.65625C0.453125 2.57812 0.15625 3.73438 0.09375 5.0625C0.015625 6.42188 0.015625 11.1875 0.09375 12.5469C0.15625 13.875 0.453125 15.0312 1.35938 15.9531C2.28125 16.8594 3.42188 17.1562 4.75 17.2188C6.10938 17.2969 10.875 17.2969 12.2344 17.2188C13.5625 17.1562 14.7031 16.8594 15.625 15.9531C16.5312 15.0312 16.8281 13.875 16.8906 12.5469C16.9688 11.1875 16.9688 6.42188 16.8906 5.0625ZM15.0625 13.625C14.7812 14.3594 14.2344 14.9062 13.5 15.1719C12.4375 15.5938 9.9375 15.5 8.5 15.5C7.04688 15.5 4.5625 15.6094 3.48438 15.1719C2.75 14.8906 2.20312 14.3438 1.9375 13.625C1.51562 12.5625 1.60938 10.0625 1.60938 8.60938C1.60938 7.15625 1.51562 4.67188 1.9375 3.59375C2.21875 2.85938 2.76562 2.3125 3.48438 2.04688C4.54688 1.625 7.04688 1.71875 8.5 1.71875C9.95312 1.71875 12.4375 1.60938 13.5 2.04688C14.2344 2.32812 14.7812 2.875 15.0625 3.59375C15.4844 4.65625 15.3906 7.15625 15.3906 8.60938C15.3906 10.0625 15.4844 12.5625 15.0625 13.625Z" fill="white"/>
                </svg>
              </div>

              {/* Twitter */}
              <div className="w-[41px] h-[41px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 1.70312C17.3438 1.98438 16.6406 2.1875 15.8906 2.26562C16.6562 1.8125 17.25 1.09375 17.5312 0.234375C16.8281 0.65625 16.0312 0.953125 15.1875 1.10938C14.5156 0.390625 13.5469 0 12.5 0C10.4375 0 8.78125 1.67188 8.78125 3.73438C8.78125 4.03125 8.8125 4.3125 8.875 4.57812C5.78125 4.42188 3.07812 3.03125 1.25 0.90625C0.921875 1.46875 0.734375 2.14062 0.734375 2.84375C0.734375 4.14062 1.39062 5.28125 2.39062 5.95312C1.78125 5.9375 1.21875 5.76562 0.734375 5.5V5.54688C0.734375 7.3125 1.98438 8.78125 3.65625 9.125C3.34375 9.21875 3.01562 9.26562 2.67188 9.26562C2.4375 9.26562 2.20312 9.23438 1.98438 9.1875C2.45312 10.6406 3.79688 11.6875 5.39062 11.7188C4.14062 12.6875 2.5625 13.2812 0.859375 13.2812C0.546875 13.2812 0.25 13.2656 0 13.2344C1.60938 14.2656 3.51562 14.875 5.5625 14.875C12.2344 14.875 15.875 9.34375 15.875 4.54688C15.875 4.39062 15.875 4.23438 15.8594 4.07812C16.5781 3.5625 17.1875 2.92188 17.6562 2.1875C16.9844 2.48438 16.2656 2.6875 15.5 2.76562C16.2656 2.3125 16.8594 1.57812 17.1406 0.703125Z" fill="#080809"/>
                </svg>
              </div>
            </div>

            <p className="text-brand-body text-[20px] font-medium leading-[24.90px] mb-4">
              Discover our app
            </p>

            {/* App Store / Google Play */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="cursor-pointer w-[107px] h-[35px] bg-black rounded-full overflow-hidden hover:opacity-80 transition-opacity flex items-center justify-center">
                 <img src="i.svg" alt="Get it on Google Play" className="w-full h-full object-contain" />
              </div>
              
              <div className="cursor-pointer w-[107px] h-[35px] bg-black rounded-full overflow-hidden hover:opacity-80 transition-opacity flex items-center justify-center">
                 <img src="j.svg" alt="Download on the App Store" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-20 pt-8">
          <p className="text-brand-body text-[14px] font-medium leading-[17.43px]">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
}
