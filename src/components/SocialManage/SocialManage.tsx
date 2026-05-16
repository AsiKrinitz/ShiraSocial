import './SocialManage.css';

const SocialManage = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const videos = [
    { id: 1, src: `${baseUrl}videos/Shira1.MOV`, title: 'Project 1' },
    { id: 2, src: `${baseUrl}videos/Shira2.MOV`, title: 'Project 2' },
    { id: 3, src: `${baseUrl}videos/Shira3.MOV`, title: 'Project 3' },
    { id: 4, src: `${baseUrl}videos/Shira4.MOV`, title: 'Project 4' },
    { id: 5, src: `${baseUrl}videos/video1.mp4`, title: 'Project 5' },
    { id: 6, src: `${baseUrl}videos/video2.MOV`, title: 'Project 6' },
    { id: 7, src: `${baseUrl}videos/video3.mov`, title: 'Project 7' },
    { id: 8, src: `${baseUrl}videos/video4.MOV`, title: 'Project 8' },
    { id: 9, src: `${baseUrl}videos/video5.MOV`, title: 'Project 9' },
    { id: 10, src: `${baseUrl}videos/video6.mov`, title: 'Project 10' },
    { id: 11, src: `${baseUrl}videos/video7.mov`, title: 'Project 11' },
    { id: 12, src: `${baseUrl}videos/video8.MP4`, title: 'Project 12' },
    { id: 13, src: `${baseUrl}videos/video9.MOV`, title: 'Project 13' },
    { id: 14, src: `${baseUrl}videos/video10.MP4`, title: 'Project 14' },
  ];

  return (
    <div className="page-wrapper manage-page">
      <div className="mesh-bg"></div>
      <div className="glass-content manage-content">
        <h1 className="manage-title">ניהול סושיאל / UGC</h1>
        <p className="manage-subtitle">
          לפניכם הצצה למגוון תוצרי וידאו ו-UGC 
          שיצרתי עבור מותגים וחברות מובילות, המשלבים יצירתיות, דיוק ואסטרטגיה לטובת קידום העסק.
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
