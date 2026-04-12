import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Shira Social. Crafted with love.</p>
      </div>
    </footer>
  );
};

export default Footer;
