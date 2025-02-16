import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./section/HeroSection";
import EventsSection from "./events/EventSection";
import Footer from "./section/Footer";
import CodingChallenge from "./events/CodingChallenge";
import WebDevChallenge from "./events/WebDevChallenge";
import HuntArena from "./events/HuntArena";

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
          <Route path="/coding-challenge" element={<CodingChallenge />} />
          <Route path="/web-development-challenge" element={<WebDevChallenge />} />
          <Route path="/hunt-arena" element={<HuntArena />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
