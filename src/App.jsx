import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-dark)] text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
