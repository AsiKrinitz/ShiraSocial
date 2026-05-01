import './SocialShows.css';

const SocialShows = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const videos = [
    { id: 1, src: `${baseUrl}videos/MOVIE3Ravid.MOV`, title: 'רביד פלוטניק' },
    { id: 2, src: `${baseUrl}videos/MOVIE4Liran.MOV`, title: 'לירן דנינו' },
  ];

  return (
    <div className="page-wrapper shows-page">
      <div className="mesh-bg"></div>
      <div className="glass-content shows-content">
        <h1 className="shows-title">סושיאל לאומנים ועיריות</h1>
        <p className="shows-subtitle">
          הפקת תוכן ויזואלי והופעות מרשימות ברשתות החברתיות.
          <br/>
          <span style={{ fontSize: '0.9em', opacity: 0.8 }}>(כל התוכן בעמוד זה צולם ותועד על ידי שירה)</span>
        </p>
        
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <h3 className="video-title">{video.title}</h3>
              <video 
                controls 
                playsInline
                muted
                preload="auto"
                className="shows-video"
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

export default SocialShows;
