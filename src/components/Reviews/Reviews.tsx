import './Reviews.css';

// Dynamically import all images from the reviews folder
const reviewModules = import.meta.glob('../../images/reviews/*.{jpeg,jpg,png,webp}', { eager: true });
const images = Object.values(reviewModules).map((module: any) => module.default);

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-container">
        <h1 className="reviews-title">לקוחות ממליצים</h1>
        <div className="reviews-gallery">
          {images.map((src, index) => (
            <div key={index} className="review-item">
              <img src={src} alt={`Review ${index + 1}`} className="review-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
