import './SocialManage.css';

const SocialManage = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const videos = [
    { id: 1, src: `${baseUrl}videos/Shira1.MOV`, title: 'Project 1' },
    { id: 2, src: `${baseUrl}videos/Shira2.MOV`, title: 'Project 2' },
    { id: 3, src: `${baseUrl}videos/Shira3.MOV`, title: 'Project 3' },
    { id: 4, src: `${baseUrl}videos/Shira4.MOV`, title: 'Project 4' },
  ];

  return (
    <div className="page-wrapper manage-page">
      <div className="mesh-bg"></div>
      <div className="glass-content manage-content">
        <h1 className="manage-title">ניהול סושיאל / UGC</h1>
        <p className="manage-subtitle">
          לפניכם הצצה למגוון תוצרי וידאו ו-UGC שיצרתי בשיתוף פעולה עם מותגים וחברות מובילות, המשלבים יצירתיות, דיוק ואסטרטגיה לטובת קידום העסק.
        </p>
        
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <video 
                controls 
                playsInline
                muted
                preload="auto"
                className="manage-video"
                src={`${video.src}#t=0.001`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialManage;
