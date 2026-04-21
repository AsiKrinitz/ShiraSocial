import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Shira Social</div>
        
        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>עמוד הבית</Link>
          <Link to="/about" onClick={closeMenu}>קצת עליי</Link>
          <Link to="/manage" onClick={closeMenu}>ניהול סושיאל / UGC</Link>
          <Link to="/business" onClick={closeMenu}>סושיאל לעסקים</Link>
          <Link to="/shows" onClick={closeMenu}>סושיאל הופעות</Link>
          <Link to="/reviews" onClick={closeMenu}>המלצות</Link>
          <Link to="/contact" onClick={closeMenu}>צור קשר</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
