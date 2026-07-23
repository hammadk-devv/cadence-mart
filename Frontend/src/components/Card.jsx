import { useContext, useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { toast } from "react-toastify";
import ProductContext from "../context/Product/ProductContext.jsx";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import CartContext from "../context/Cart/CartContext.jsx";

function Card({ item }) {
  const context = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { dark } = useContext(ThemeContext);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cadence_favorites");
      const favs = stored ? JSON.parse(stored) : [];
      setIsFav(favs.includes(item._id));
    } catch (e) {
      console.error(e);
    }
  }, [item._id]);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const stored = localStorage.getItem("cadence_favorites");
      let favs = stored ? JSON.parse(stored) : [];
      if (isFav) {
        favs = favs.filter((id) => id !== item._id);
        toast.info("Removed from wishlist");
      } else {
        favs.push(item._id);
        toast.success("Added to wishlist");
      }
      localStorage.setItem("cadence_favorites", JSON.stringify(favs));
      setIsFav(!isFav);
      window.dispatchEvent(new Event("cadence_favorites_updated"));
    } catch (err) {
      console.error(err);
    }
  };

  const cartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item._id, "M");
    toast.success(`${item.name} added to cart!`);
  };

  // Determine badge
  let badgeText = "";
  let badgeClass = "";
  if (item.discount > 0) {
    badgeText = `-${item.discount}%`;
    badgeClass = "badge-sale";
  } else if (item.bestseller) {
    badgeText = "Bestseller";
    badgeClass = "badge-bestseller";
  } else if (item.newArrival) {
    badgeText = "New";
    badgeClass = "badge-new";
  }

  return (
    <Link
      to={"/product"}
      className={`premium-card ${dark ? "premium-card-dark" : ""}`}
      onClick={() => context.setProductId(item._id)}
    >
      <div className="card-media-wrapper">
        {badgeText && <span className={`card-badge ${badgeClass}`}>{badgeText}</span>}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={`card-wishlist-btn ${isFav ? "is-active" : ""}`}
          aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>
        <div className="card-image-zoom">
          <img src={item.image[0]} alt={item.name} loading="lazy" />
        </div>
      </div>

      <div className="card-details">
        <span className="card-category">{item.category}</span>
        <h3 className="card-title">{item.name}</h3>

        <div className="card-rating">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span className="rating-value">{item.rating || 4.5}</span>
          <span className="review-count">({item.reviewCount || 34})</span>
        </div>

        <div className="card-footer-info">
          <div className="price-container">
            <span className="current-price">${item.price}</span>
            {item.originalPrice && <span className="original-price">${item.originalPrice}</span>}
          </div>
          <button
            type="button"
            onClick={cartClick}
            className="card-add-btn"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-1" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
