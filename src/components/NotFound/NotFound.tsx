import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="page-wrapper not-found-page">
      <div className="mesh-bg"></div>
      <div className="glass-content not-found-content">
        <div className="error-code">404</div>
        <h1>אופס! העמוד לא נמצא</h1>
        <p>נראה שהעמוד שחיפשת לא קיים או שהועבר למקום אחר.</p>
        <Link to="/" className="home-button">
          חזרה לעמוד הבית
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
