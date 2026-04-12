import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Shira Social</div>
        <div className="nav-links">
          <Link to="/">עמוד הבית</Link>
          <Link to="/about">קצת עליי</Link>
          <Link to="/manage">ניהול סושיאל</Link>
          <Link to="/business">סושיאל לעסקים</Link>
          <Link to="/shows">סושיאל הופעות</Link>
          <Link to="/reviews">המלצות</Link>
          <Link to="/contact">צור קשר</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
