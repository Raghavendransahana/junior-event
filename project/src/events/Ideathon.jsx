import { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { motion } from "framer-motion";


    export default function IdeationEvent() {
      const [isOpen, setIsOpen] = useState(false);
    
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
          <h1 className="text-4xl font-extrabold text-orange-400 mb-6 text-center">Shadow Fight</h1>
    
          <div className="max-w-3xl text-gray-300 space-y-6 text-lg">
            <h2 className="text-2xl font-bold text-orange-400">Rules & Guidelines</h2>
            <ul className="list-disc pl-6 text-gray-300">
            <li>Problem statements (PS) will be provided 3 days before the event, allowing teams to prepare their solutions.</li>
          <li>Participants with existing projects seeking feedback or assistance can present their work as a team.</li>
          <li>Use of visual aids such as slides or live demos is strongly recommended to enhance clarity and engagement.</li>
            </ul>
    
            <h2 className="text-2xl font-bold text-orange-400">Judging Criteria</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Innovation & Creativity </li>
              <li>Feasibility & Implementation</li>
              <li>Presentation & Clarity </li>
            </ul>
          </div>
    
          <motion.button
            onClick={() => setIsOpen(true)}
            className="mt-8 bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
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
                  formFacadeURL="https://formfacade.com/include/103989648074034142890/form/1FAIpQLSceAtZz2rdgwA7RGDrBnG_HAOlSsoL2gY3C92MwTNfCYZDj_A/classic.js/?div=ff-compose"
                  onSubmitForm={() => console.log('Form submitted')}
                />
              </motion.div>
            </div>
          )}
        </div>
      );
    }
    
