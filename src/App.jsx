import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import SalonAgreement from "./pages/SalonAgreement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsCondition />} />
      <Route path="/onboarding-agreement" element={<SalonAgreement />} />
    </Routes>
  );
}

export default App;
