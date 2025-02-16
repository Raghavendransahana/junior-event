import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import WhyInnoverse from "./WhyInnoverse";

export default function Home() {
  const whyInnoverseRef = useRef(null);

  const scrollToSection = () => {
    if (whyInnoverseRef.current) {
      whyInnoverseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <section className="flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center"
        >
          <Spline
            scene="https://prod.spline.design/hQXH-O8Y3nTM7PQy/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 md:p-10 space-y-6 text-center md:text-left"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Innovate. Compete. Elevate.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            className="text-lg md:text-xl text-gray-300 drop-shadow-md"
          >
            That's why #INCEPTRON is here!
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToSection}
            className="px-6 py-3 md:px-8 md:py-3 text-lg font-semibold bg-gradient-to-r from-violet-800 to-fuchsia-900 text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* WhyInnoverse Section */}
      <section ref={whyInnoverseRef}>
        <WhyInnoverse />
      </section>
    </main>
  );
}
