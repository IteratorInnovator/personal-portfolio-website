import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import HamburgerMenu from './components/ui/hamburger-menu';
import { useIsOpen } from './ui';

function App() {

  const { isOpen } = useIsOpen();

  return (
    <BrowserRouter>
      <Header />
      {/* Mobile Menu Overlay */}
      {isOpen && <HamburgerMenu />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
