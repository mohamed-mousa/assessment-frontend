import { Link } from "react-router-dom";
function FeaturedProductCard({ toUrl, image, className }) {
  return (
    <Link to={toUrl}>
      <img
        className={`w-fit h-fit object-cover ${className}`}
        src={image}
        alt={toUrl}
      />
    </Link>
  );
}

export default FeaturedProductCard;
