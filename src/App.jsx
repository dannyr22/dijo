import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomBanner from './components/BottomBanner';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Locations from './pages/Locations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Approve from './pages/Approve';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const isApprove = pathname === '/approve';

  return (
    <>
      <ScrollToTop />
      {!isApprove && <Navbar />}
      <main className={isApprove ? '' : 'main-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/approve" element={<Approve />} />
        </Routes>
      </main>
      {!isApprove && <Footer />}
      {!isApprove && <BottomBanner />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
