import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import amongs from "../assets/among_us.jpeg"
import clash from "../assets/clash.jpg"
import solo from "../assets/solo.jpeg"
import shawdow from "../assets/shawdow.jpeg"
const events = [
  {
   
    image: clash,
    link: "/coc",
  },
  {
    image: amongs,
    link: "/au",
  },
  {
   
    image: solo,
    link: "/sl",
  },
  {
   image: shawdow,
   link:"/sf",
  }
];

export default function EventsSection() {
  const navigate = useNavigate();

  return (
    <div className="px-20 bg-black text-white text-center">
      <h2 className="text-4xl font-extrabold mb-4">Upcoming Events</h2>
      <p className=" mb-13"> To learn more,Click on the cards below</p>
      <div className="flex flex-wrap justify-center gap-x-40 gap-y-20">
        {events.map((event, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(event.link)}
            className="relative w-[25rem] h-[15rem] bg-cover bg-center rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{ backgroundImage: `url(${event.image})` }}
          >
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}
