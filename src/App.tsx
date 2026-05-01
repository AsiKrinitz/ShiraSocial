import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import SocialManage from './components/SocialManage/SocialManage';
import SocialBusiness from './components/SocialBusiness/SocialBusiness';
import SocialShows from './components/SocialShows/SocialShows';
import ContactMe from './components/ContactMe/ContactMe';
import Reviews from './components/Reviews/Reviews';
import NotFound from './components/NotFound/NotFound';
import { AsiFooter } from './components/AsiFooter/AsiFooter';
import { Accessibility } from './components/Accessibility/Accessibility';
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy';
import { AccessibilityWidget } from './components/AccessibilityWidget/AccessibilityWidget';
import './App.css';

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/ShiraSocial' : '';

  return (
    <Router basename={basename}>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/manage" element={<SocialManage />} />
            <Route path="/business" element={<SocialBusiness />} />
            <Route path="/shows" element={<SocialShows />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <AsiFooter />
        <AccessibilityWidget />
      </div>
    </Router>
  );
}

export default App;
