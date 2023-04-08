import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import HeroSection from "./components/hero_section/HeroSection";
import IntroSection from "./components/intro_section/IntroSection";
import ServiceSection from "./components/service_section/ServiceSection";
import ReasonSection from "./components/reason_section/ReasonSection";
import ThingSection from "./components/thing_section/ThingSection";
import ContactSection from "./components/contact_section/ContactSection";
import LeaderSection from "./components/leader_section/LeaderSection";
import ResultSection from "./components/result_section/ResultSection";
import FeedbackSection from "./components/feedback_section/FeedbackSection";
import PartnerSection from "./components/partner_section/PartnerSection";
import NewsSection from "./components/news_section/NewsSection";
import Footer from "./components/footer/Footer";
import MessengerPlugin from "./components/messenger_plugin";

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <ReasonSection />
      <ThingSection />
      <ContactSection />
      <LeaderSection />
      <ResultSection />
      <FeedbackSection />
      <PartnerSection />
      <NewsSection />
      <Footer />
      <MessengerPlugin />
    </Router>
  );
}

export default App;
