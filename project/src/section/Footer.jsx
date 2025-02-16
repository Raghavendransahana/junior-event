import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-6 md:p-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left space-y-4"
      >
        <h2 className="text-2xl font-bold">Need Help? Contact Us!</h2>
        <p className="text-gray-400">Phone: 9600389319</p>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 h-[50vh] md:h-[30vh] flex items-center justify-center"
      >
        <Spline
          scene="https://prod.spline.design/hQXH-O8Y3nTM7PQy/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>
    </footer>
  );
}
