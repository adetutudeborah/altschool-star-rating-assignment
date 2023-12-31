/* eslint-disable react/prop-types */

function StarRating({ rating }) {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <img
        key={i}
        alt="gold-star"
        className="gold-star"
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      />
    );
  }

  return <div className="star-wrapper">{stars}</div>;
}

export default StarRating;
