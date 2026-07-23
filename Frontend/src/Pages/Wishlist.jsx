import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import ProductContext from "../context/Product/ProductContext.jsx";
import CartContext from "../context/Cart/CartContext.jsx";
import WishlistLayout from "../components/commerce/Wishlist/WishlistLayout.jsx";

export default function Wishlist() {
  const { product = [], setProductId } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { dark } = useContext(ThemeContext);

  const [wishlistItems, setWishlistItems] = useState([]);

  const loadWishlist = () => {
    try {
      const stored = localStorage.getItem("cadence_favorites");
      const ids = stored ? JSON.parse(stored) : [];
      const items = ids.map((id) => product.find((p) => p._id === id)).filter(Boolean);
      setWishlistItems(items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadWishlist();

    const handleUpdate = () => loadWishlist();
    window.addEventListener("cadence_favorites_updated", handleUpdate);
    return () => window.removeEventListener("cadence_favorites_updated", handleUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const handleRemoveItem = (id) => {
    try {
      const stored = localStorage.getItem("cadence_favorites");
      let ids = stored ? JSON.parse(stored) : [];
      ids = ids.filter((itemId) => itemId !== id);
      localStorage.setItem("cadence_favorites", JSON.stringify(ids));

      window.dispatchEvent(new Event("cadence_favorites_updated"));
      toast.info("Item removed from wishlist.");
    } catch (e) {
      console.error(e);
    }
  };

  const handleMoveToCart = async (id) => {
    try {
      await addToCart(id);

      const stored = localStorage.getItem("cadence_favorites");
      let ids = stored ? JSON.parse(stored) : [];
      ids = ids.filter((itemId) => itemId !== id);
      localStorage.setItem("cadence_favorites", JSON.stringify(ids));

      window.dispatchEvent(new Event("cadence_favorites_updated"));
      toast.success("Item moved to cart!");
    } catch (e) {
      toast.error("Failed to move item to cart.");
    }
  };

  const handleMoveAll = async () => {
    if (wishlistItems.length === 0) return;
    try {
      for (const item of wishlistItems) {
        if (item.stock > 0) {
          await addToCart(item._id);
        }
      }
      localStorage.setItem("cadence_favorites", JSON.stringify([]));
      window.dispatchEvent(new Event("cadence_favorites_updated"));
      toast.success("All in-stock favorites moved to cart!");
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearAll = () => {
    localStorage.setItem("cadence_favorites", JSON.stringify([]));
    window.dispatchEvent(new Event("cadence_favorites_updated"));
    toast.info("Wishlist cleared.");
  };

  const handleCardClick = (id) => {
    setProductId(id);
  };

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`min-h-screen ${dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"}`}>
      <WishlistLayout
        items={wishlistItems}
        products={product}
        onMoveToCart={handleMoveToCart}
        onRemoveItem={handleRemoveItem}
        onCardClick={handleCardClick}
        onMoveAll={handleMoveAll}
        onClearAll={handleClearAll}
        totalValue={totalValue}
      />
    </div>
  );
}
