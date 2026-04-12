import './ContactMe.css';
import contactImage from '../../images/ContactMeImage.jpeg';

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
            <h1 className="contact-title">מכאן מתחילים לשווק את העסק שלך ברשתות</h1>
            <h2 className="contact-subtitle">צור איתי קשר שנתחיל לעבוד!</h2>
            
            <div className="contact-links">
              <div className="contact-item">
                <span className="icon">📸</span>
                <div className="contact-text">
                  <span className="label">אינסטגרם:</span>
                  <span className="value">Shira</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">📱</span>
                <div className="contact-text">
                  <span className="label">TikTok:</span>
                  <span className="value">Shira</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">👤</span>
                <div className="contact-text">
                  <span className="label">Facebook:</span>
                  <span className="value">shira</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">📞</span>
                <div className="contact-text">
                  <span className="label">טלפון:</span>
                  <span className="value">__________</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">✉️</span>
                <div className="contact-text">
                  <span className="label">Email:</span>
                  <span className="value">__________</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
