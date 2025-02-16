import { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { motion } from "framer-motion";

export default function WebDevelopmentChallenge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">Among us-A WebDevelopmentChallenge</h1>

      <div className="max-w-3xl text-gray-300 space-y-6 text-lg">
        <h2 className="text-2xl font-bold text-blue-400">Round 1</h2>
        <p>
          - Teams consist of 3-4 members.<br />
          - One member solves a puzzle that reveals a webpage concept.<br />
          - The team must recreate the webpage with added complexity.<br />
          - Teams start with 30 points, which fluctuate based on challenges.
        </p>
        <p className="text-lg text-gray-400">Point System:</p>
        <ul className="list-disc pl-5">
          <li>No point deduction for solving puzzles independently.</li>
          <li>Using mentor assistance results in point deductions.</li>
          <li>Faster completion grants bonus points.</li>
          <li>Top teams move to the next round.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-400">Round 2</h2>
        <p>
          - Participants pick riddles from a bowl.<br />
          - Each riddle corresponds to a well-known website’s logo.<br />
          - Teams must match the riddle to the correct logo.<br />
          - They then recreate a webpage inspired by that website.<br />
          - The most accurate and well-designed webpage wins!
        </p>
      </div>

      <motion.button
        onClick={() => setIsOpen(true)}
        className="mt-8 bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
        whileHover={{ scale: 1.1 }}
      >
        Register Now
      </motion.button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl w-full relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-white text-xl"
            >
              ✖
            </button>

            <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/103989648074034142890/form/1FAIpQLSfF1SwIv-jcTc-pwi97pi1uONLItNyJUoBnwKy_9L5wPgQcmQ/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
          </motion.div>
        </div>
      )}
    </div>
  );
}
