import './ContactMe.css';
import contactImage from '../../images/ContactMeImage.jpeg';
import fbLogo from '../../images/Facebook_logo.png';
import igLogo from '../../images/Instagram_logo.png';
import ttLogo from '../../images/TikTok-Logo.png';

const ContactMe = () => {
  return (
    <div className="page-wrapper contact-page">
      <div className="mesh-bg"></div>
      <div className="glass-content contact-container">
        <div className="contact-flex">
          <div className="contact-image-side">
            <div className="contact-circle">
              <img src={contactImage} alt="Shira" className="contact-profile-img" />
            </div>
          </div>
          
          <div className="contact-info-side">
            <h1 className="contact-title">מוכנים לקחת את הסושיאל שלכם לרמה הבאה?</h1>
            <h2 className="contact-subtitle">צרו איתי קשר ונהפוך את החלום למציאות (:</h2>
            
            <div className="contact-links">
              <a href="https://instagram.com/shirayechezkel" target="_blank" rel="noopener noreferrer" className="contact-item">
                <img src={igLogo} alt="Instagram" className="contact-icon-img" />
                <div className="contact-text">
                  <span className="label">אינסטגרם:</span>
                  <span className="value">shirayechezkel</span>
                </div>
              </a>

              <a href="https://www.tiktok.com/@shirayechezkel?_t=8mkalF3D9Y0&_r" target="_blank" rel="noopener noreferrer" className="contact-item">
                <img src={ttLogo} alt="TikTok" className="contact-icon-img tiktok-icon" />
                <div className="contact-text">
                  <span className="label">TikTok:</span>
                  <span className="value">shirayechezkel</span>
                </div>
              </a>

              <a href="https://www.facebook.com/shira.yechezkel" target="_blank" rel="noopener noreferrer" className="contact-item">
                <img src={fbLogo} alt="Facebook" className="contact-icon-img" />
                <div className="contact-text">
                  <span className="label">Facebook:</span>
                  <span className="value">shira.yechezkel</span>
                </div>
              </a>

              <a href="mailto:Shirayechezkel@gmail.com" className="contact-item">
                <span className="icon">✉️</span>
                <div className="contact-text">
                  <span className="label">Email:</span>
                  <span className="value">Shirayechezkel@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
