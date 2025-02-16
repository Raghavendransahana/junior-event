import { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { motion } from "framer-motion";

export default function CodingChallenge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-extrabold text-purple-400 mb-6 text-center">Clash of Clans - Coding Challenge</h1>

      <div className="max-w-3xl text-gray-300 space-y-6 text-lg">
        <h2 className="text-2xl font-bold text-purple-400">Round 1</h2>
        <p>
          - Each team consists of 4 members (Max 10 teams).<br />
          - Teams start with 30 points each.<br />
          - Questions are shared via WhatsApp with time limits & point values.<br />
          - 2 members solve problems while 2 stay back.<br />
          - Teams gain or lose points based on solving success.<br />
          - Betting Mechanism: Back members can bet 10 points to challenge another team.
        </p>

        <h2 className="text-2xl font-bold text-purple-400">Round 2:</h2>
        <p>
          - The top team from Round 1 picks another team to merge.<br />
          - The remaining teams are randomly paired, forming 4 teams of 8.<br />
          - Teams bet on how many of 30 questions they can solve in 20 minutes.<br />
          - The top 2 performing teams win!
        </p>
      </div>

      <motion.button
        onClick={() => setIsOpen(true)}
        className="mt-8 bg-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
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
              formFacadeURL="https://formfacade.com/include/103989648074034142890/form/1FAIpQLSe7pcfndfPK9TSrT10JgkJrjzApKzMKVn7Vn7CiWwgcFaDWbw/classic.js/?div=ff-compose"
              onSubmitForm={() => {
                console.log("Form submitted");
                setIsOpen(false);
              }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
