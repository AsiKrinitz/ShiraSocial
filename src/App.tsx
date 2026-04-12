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
import './App.css';

function App() {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
