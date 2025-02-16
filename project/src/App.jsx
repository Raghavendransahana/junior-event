import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./section/HeroSection";
import EventsSection from "./events/EventSection";
import Footer from "./section/Footer";
import CodingChallenge from "./events/CodingChallenge";
import WebDevChallenge from "./events/WebDevChallenge";
import HuntArena from "./events/HuntArena";
import Ideathon from "./events/Ideathon"
const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <EventsSection />
                <Footer />
              </>
            }
          />
          <Route path="/coc" element={<CodingChallenge />} />
          <Route path="/au" element={<WebDevChallenge />} />
          <Route path="/sl" element={<HuntArena />} />
          <Route path="sf" element={<Ideathon/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
