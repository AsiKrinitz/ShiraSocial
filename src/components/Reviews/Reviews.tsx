import review1 from '../../assets/review1.jpeg';
import review2 from '../../assets/review2.jpeg';
import review3 from '../../assets/review3.jpeg';
import review4 from '../../assets/review4.jpeg';
import './Reviews.css';

const reviews = [review1, review2, review3, review4];

const Reviews = () => {
  return (
    <div className="page-wrapper reviews-page">
      <div className="mesh-bg"></div>
      <div className="glass-content reviews-content">
        <h1 className="reviews-title">המלצות</h1>
        <p className="reviews-subtitle">מה הלקוחות שלי אומרים עליי? הצצה להצלחות המשותפות שלנו.</p>

        <div className="reviews-grid">
          {reviews.map((src, index) => (
            <div key={index} className="review-card">
              <img
                src={src}
                alt={`המלצה ${index + 1}`}
                className="review-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
