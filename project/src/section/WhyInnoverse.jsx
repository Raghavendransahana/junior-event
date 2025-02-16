import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Briefcase, Users } from "lucide-react";

const benefits = [
  {
    title: "Mentorship",
    description: "Get guidance from seniors and experienced mentors to accelerate your growth.",
    gradient: "from-purple-500 to-indigo-600",
    icon: <GraduationCap size={32} />, 
    textGradient: "from-indigo-300 to-purple-500"
  },
  {
    title: "Opportunities",
    description: "Be a part of groundbreaking college projects and gain hands-on experience.",
    gradient: "from-blue-500 to-teal-500",
    icon: <Briefcase size={32} />, 
    textGradient: "from-teal-300 to-blue-500"
  },
  {
    title: "Community",
    description: "Join a strong network of innovators, collaborate, and grow together.",
    gradient: "from-pink-500 to-red-500",
    icon: <Users size={32} />, 
    textGradient: "from-red-300 to-pink-500"
  },
];

export default function WhyInnoverse() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-20 bg-black text-white text-center" id="why">
      <h2 className="text-4xl font-extrabold mb-8">Why Be a Part of Inceptron?</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className={`relative w-80 h-48 p-6 rounded-2xl shadow-lg bg-gradient-to-r ${benefit.gradient} cursor-pointer overflow-hidden flex flex-col items-center transition-all duration-300`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="mb-2 text-white">{benefit.icon}</div>
            <h3 className={`text-xl font-bold text-white`}>{benefit.title}</h3>
            <p className="mt-2 text-sm text-center text-white">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}