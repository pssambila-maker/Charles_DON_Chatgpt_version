import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import UrgencyBanner from './components/UrgencyBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyApplyButton from './components/StickyApplyButton';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import Career from './pages/Career';

function AppContent() {
  const location = useLocation();
  // Don't show Apply button on enquiry page
  const showApplyButton = location.pathname !== '/enquiry';

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-white flex flex-col">
      <UrgencyBanner />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <Footer />
      {showApplyButton && <StickyApplyButton />}
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
