import './Home.css';
import homeImage from '../../images/HomePageImage.jpeg';

const Home = () => {
  return (
    <div className="page-wrapper home-page">
      <div className="mesh-bg"></div>
      <div className="glass-content home-content">
        <div className="image-container">
          <img src={homeImage} alt="Shira Yehezkel" className="profile-image" />
        </div>
        
        <section className="intro-section">
          <h2>קצת עלי:</h2>
          <p className="highlight-text">
            היי, אני שירה יחזקאל, בת 22 מהצפון
            <br />
            ואני יוצרת תוכן לעסקים, UGC וקריאייטיב, ומאפרת מקצועית עם ניסיון של מעל 5 שנים בעולם הדיגיטל והביוטי.
          </p>
          
          <div className="description-block">
            <p>
              אני מתמחה ביצירת תוכן איכותי אותנטי, מושך וממיר - כזה שלא רק נראה טוב, אלא גם עובד.
              תוך הבנה של הטרנדים העכשווים, קריאייטיב, וסטוריטלינג - לבין היכולת ליצור חיבור אמיתי עם הקהל.
            </p>
            <p>
              כל סרטון שאני יוצרת מקבל יחס אישי, חשיבה אסטרטגית לטווח הארוך והקפדה על הפרטים הקטנים מצילום מקצועי ועד עריכה מקצועית.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
