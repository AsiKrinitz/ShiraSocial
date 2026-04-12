import './AboutMe.css';

const AboutMe = () => {
  const brands = [
    "il makiage", "L’Oréal", "MAYBELINE", "garnier", "cerave", "Amika", "esssie", "MAC", "Sacara", 
    "dream laser", "intuition", "gaya cosmetics", "wolt", "tarantula jewelry", "origins", 
    "pink lady", "bunny Tami", "nyx", "studio pasha", "argania", "קניוני עופר", "vichy"
  ];

  return (
    <div className="page-wrapper about-page">
      <div className="mesh-bg"></div>
      <div className="glass-content about-content">
        <section className="passion-section">
          <h1>קצת עליי</h1>
          <p>
            התשוקה שלי ליצירת תוכן התחילה כבר בילדות, כשיצרתי וערכתי סרטונים ליוטיוב. 
            עם השנים התחום הפך מתחביב לתשוקה אמיתית, וכבר אחרי התיכון בחרתי להפוך אותו למקצוע שאני עוסקת בו היום.
          </p>
          <p>
            אני מאוד נהנית ליצור סרטונים למותגים שאני מאמינה בהם בצורה הכי טובה ומושקעת שאפשר! 
            תמיד דואגת להקפיד על אמינות, כנות, ואותנטיות.
          </p>
          <p>
            אני יוצרת תוכן עם דגש על סיפור, רגש וחיבור אמיתי לקהל. 
            אוהבת לקחת מותג ולהפוך אותו לחוויה ויזואלית שמרגישים אותה, לא רק רואים אותה. 
            יש לי עין לאסתטיקה וירידה לפרטים קטנים שמבדילים בין תוכן רגיל לתוכן שמושך תשומת לב.
          </p>
        </section>

        <section className="brands-section">
          <h2>מותגים שעבדתי איתם:</h2>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <span key={index} className="brand-tag">{brand}</span>
            ))}
          </div>
        </section>

        <section className="process-section">
          <h2>איך אני עובדת?</h2>
          <ul>
            <li>עבודה מסודרת: משלב הרעיון, צילום, עריכה ועד כתוביות ותוצאה סופית.</li>
            <li>התאמה אישית: יודעת להתאים את הסגנון לכל מותג בנפרד ולא עובדת לפי "תבנית קבועה".</li>
            <li>מקצועיות: דגש על עמידה בזמנים ותקשורת נעימה עם הלקוח.</li>
            <li>תמורה: חבילות משתלמות במחירים הוגנים ותמורה מקסימלית.</li>
          </ul>
        </section>

        <hr className="divider" />

        <section className="media-section-inline">
          <h2>שירה בתקשורת - חדשות 13</h2>
          <p>
            בעקבות סרטון טיקטוק ויראלי שיצרתי, פנו אליי מחדשות 13 והזמינו אותי להשתתף בכתבה בנושא איפור וטיפוח ממותג SHEIN.
          </p>
          <p>
            הסרטון עורר עניין רחב ברשתות ואף היווה השראה לתוכן הכתבה, תוך שהוא מביא זווית חדשה ורעננה גם לצופים וגם לעולם החדשות.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
