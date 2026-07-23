import { useEffect, useState, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProductContext from "../context/Product/ProductContext.jsx";
import CartContext from "../context/Cart/CartContext.jsx";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import QuantitySelector from "./commerce/QuantitySelector.jsx";
import AddToCartButton from "./commerce/AddToCartButton.jsx";
import WishlistButton from "./commerce/WishlistButton.jsx";
import Container from "./ui/Container.jsx";
import Typography from "./ui/Typography.jsx";
import Button from "./ui/Button.jsx";
import {
  ProductGallery,
  ProductInfo,
  ProductVariants,
  ProductFeatures,
  ProductTabs,
  FrequentlyBoughtTogether,
  RelatedProducts,
  RecentlyViewed,
  StickyPurchasePanel,
  ReviewsFoundation,
} from "./commerce/ProductDetails";

export default function Product() {
  const { productId, setProductId, product } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { dark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryId = searchParams.get("id");

  const [productData, setProductData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isFav, setIsFav] = useState(false);

  // Sync productId from URL query parameter 'id' if context is empty
  useEffect(() => {
    if (!productId && queryId) {
      setProductId(queryId);
    } else if (productId && queryId !== productId) {
      setSearchParams({ id: productId }, { replace: true });
    }
  }, [productId, queryId, setProductId, setSearchParams]);

  // Retrieve current product detail item
  useEffect(() => {
    if (product && product.length > 0 && productId) {
      const matchedProduct = product.find((item) => item._id === productId);
      if (matchedProduct) {
        setProductData(matchedProduct);

        // Pre-select defaults
        if (matchedProduct.colors && matchedProduct.colors.length > 0) {
          setSelectedColor(matchedProduct.colors[0]);
        }
        if (matchedProduct.sizes && matchedProduct.sizes.length > 0) {
          setSelectedSize(matchedProduct.sizes[0]);
        }
        if (matchedProduct.materials && matchedProduct.materials.length > 0) {
          setSelectedMaterial(matchedProduct.materials[0]);
        }
      }
    }
  }, [productId, product]);

  // Sync wishlist state from localStorage cache keys
  useEffect(() => {
    if (productId) {
      try {
        const storedFavs = localStorage.getItem("cadence_favorites");
        const favs = storedFavs ? JSON.parse(storedFavs) : [];
        setIsFav(favs.includes(productId));
      } catch (e) {
        console.error(e);
      }
    }
  }, [productId]);

  const handleWishlistToggle = () => {
    if (!productId) return;
    try {
      const storedFavs = localStorage.getItem("cadence_favorites");
      let favs = storedFavs ? JSON.parse(storedFavs) : [];

      if (isFav) {
        favs = favs.filter((id) => id !== productId);
        toast.info("Removed from wishlist");
      } else {
        favs.push(productId);
        toast.success("Added to wishlist");
      }

      localStorage.setItem("cadence_favorites", JSON.stringify(favs));
      window.dispatchEvent(new Event("cadence_favorites_updated"));
      setIsFav(!isFav);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCart = async () => {
    if (!productId) return;
    setIsAdding(true);
    try {
      await addToCart(productId);
      toast.success(`${productData.name} added to cart!`);
    } catch (error) {
      toast.error(error.message || "Failed to add to cart");
    } finally {
      setIsAdding(false);
    }
  };

  const handleBuyNow = async () => {
    await handleAddToCart();
    navigate("/cart");
  };

  const handleAddBundle = async (ids) => {
    for (const id of ids) {
      await addToCart(id);
    }
    toast.success("Bundle items added to cart successfully!");
  };

  const handleIncrement = () => {
    if (quantity < (productData?.stock || 99)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!productData) {
    return (
      <Container className="py-16 text-center select-none">
        <Typography variant="h3" className="text-[var(--color-text-secondary)]">
          Loading product details...
        </Typography>
      </Container>
    );
  }

  const stockLimit = productData.stock || 10;
  const isOutOfStock = stockLimit <= 0;

  return (
    <Container className={`py-8 md:py-12 ${dark ? "primary-dark-active" : ""}`}>
      {/* Product Details Columns layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Gallery & Extra Tabs details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ProductGallery images={productData.image} name={productData.name} />

          {/* Detailed specifications tab panels */}
          <div className="hidden lg:block">
            <ProductTabs
              product={productData}
              reviewsComponent={
                <ReviewsFoundation rating={productData.rating} count={productData.reviewsCount} />
              }
            />
          </div>
        </div>

        {/* Right Column: Information, Variants & CTAs */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
          <ProductInfo product={productData} />

          {/* Color & Size option chips list */}
          <ProductVariants
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
            selectedMaterial={selectedMaterial}
            onMaterialChange={setSelectedMaterial}
            colors={productData.colors}
            sizes={productData.sizes}
            materials={productData.materials}
          />

          {/* Quantity selector row */}
          <div className="flex flex-col gap-2">
            <Typography
              variant="body-sm"
              className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
            >
              Quantity:
            </Typography>
            <div className="flex gap-4 items-center">
              <QuantitySelector
                value={quantity}
                min={1}
                max={stockLimit}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                className="w-32"
              />
              <WishlistButton
                isFavorited={isFav}
                onClick={handleWishlistToggle}
                className="w-12 h-12"
              />
            </div>
          </div>

          {/* Purchase primary controls buttons */}
          <div className="flex flex-col gap-3">
            <AddToCartButton
              onClick={handleAddToCart}
              isLoading={isAdding}
              isDisabled={isOutOfStock}
            />
            <Button
              variant="outline"
              onClick={handleBuyNow}
              isDisabled={isOutOfStock}
              className="w-full font-bold uppercase py-3 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
            >
              Buy Now
            </Button>
          </div>

          <ProductFeatures />
        </div>
      </div>

      {/* Tabs Panel (Mobile view placement) */}
      <div className="lg:hidden mt-8">
        <ProductTabs
          product={productData}
          reviewsComponent={
            <ReviewsFoundation rating={productData.rating} count={productData.reviewsCount} />
          }
        />
      </div>

      {/* Cross-sell Frequently Bought Together Bundling */}
      <FrequentlyBoughtTogether
        currentProduct={productData}
        recommendations={product}
        onAddBundle={handleAddBundle}
      />

      {/* Related items row recommendations */}
      <RelatedProducts
        products={product}
        category={productData.category}
        currentId={productData._id}
      />

      {/* Recently Viewed browsing list */}
      <RecentlyViewed products={product} currentId={productData._id} />

      {/* Sticky Bottom cart triggers for mobile devices */}
      <StickyPurchasePanel
        product={productData}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        quantity={quantity}
        isAdding={isAdding}
      />
    </Container>
  );
}
