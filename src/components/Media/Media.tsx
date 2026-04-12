import './Media.css';

const Media = () => {
  return (
    <div className="page-wrapper media-page">
      <div className="mesh-bg"></div>
      <div className="glass-content media-content">
        <section className="media-section">
          <h2>שירה בתקשורת</h2>
          <div className="media-story">
            <h3>הכתבה בחדשות 13</h3>
            <p>
              בעקבות סרטון טיקטוק ויראלי שיצרתי, פנו אליי מחדשות 13 והזמינו אותי להשתתף בכתבה בנושא איפור וטיפוח ממותג SHEIN.
            </p>
            <p>
              הסרטון עורר עניין רחב ברשתות ואף היווה השראה לתוכן הכתבה, תוך שהוא מביא זווית חדשה ורעננה גם לצופים וגם לעולם החדשות.
            </p>
          </div>
          <div className="video-placeholder">
            {/* Here we could eventually embed the video if we have a link */}
            <div className="placeholder-box">
              <span>כתבה בחדשות 13</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Media;
