import { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { motion } from "framer-motion";

export default function HuntArena() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 text-center">Hunt Arena</h1>

      <div className="max-w-3xl text-gray-300 space-y-6 text-lg">
        <h2 className="text-2xl font-bold text-yellow-400">Round 1 </h2>
        <p>
          - <strong>Team Structure:</strong> Each team consists of two members.<br />
          - <strong>Task:</strong> Teams receive a set of meme templates.<br />
          - <strong>Objective:</strong> Create the funniest and most creative meme using the provided templates.<br />
          - Teams will be judged on creativity, humor, and originality.
        </p>

        <h2 className="text-2xl font-bold text-yellow-400">Round 2</h2>
        <p>
          - <strong>Team Structure:</strong> Teams of two remain.<br />
          - <strong>Mechanics:</strong><br />
          &nbsp;&nbsp;&nbsp;&nbsp;• One member flips a bottle.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;• For each successful flip, the other teammate receives a movie name with some letters missing.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;• The teammate must guess the missing letters within a time limit.<br />
          - Teams that perform best in both flipping and guessing will win!
        </p>
      </div>

      <motion.button
        onClick={() => setIsOpen(true)}
        className="mt-8 bg-yellow-600 px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
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

formFacadeURL="https://formfacade.com/include/103989648074034142890/form/1FAIpQLSdjbu2AIPQN8om6DOffe9b8fuhobw5sy0-viQwhhQWaz0R04w/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
          </motion.div>
        </div>
      )}
    </div>
  );
}
