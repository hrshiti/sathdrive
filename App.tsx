
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Partner from './pages/Partner.tsx';
import Support from './pages/Support.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import Compliance from './pages/Compliance.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg-light">
        <Navbar />
        <ScrollToTop>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/support" element={<Support />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/compliance" element={<Compliance />} />
            </Routes>
          </main>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
