import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Sun, Moon, ShoppingCart, User, Menu, Search, Heart } from "lucide-react";
import { toast } from "react-toastify";
import useTheme from "../hooks/useTheme";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import Dropdown from "./ui/Dropdown";
import Drawer from "./ui/Drawer";
import Input from "./ui/Input";
import Typography from "./ui/Typography";
import MegaMenu from "./navigation/MegaMenu";
import NotificationBadge from "./ui/NotificationBadge";

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const { token, userDetail } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);

  const megaMenuTimeoutRef = useRef(null);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setShowMegaMenu(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 150);
  };

  const updateWishlistCount = () => {
    try {
      const stored = localStorage.getItem("cadence_favorites");
      const favs = stored ? JSON.parse(stored) : [];
      setWishlistCount(favs.length);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    updateWishlistCount();
    const handleUpdate = () => updateWishlistCount();
    window.addEventListener("cadence_favorites_updated", handleUpdate);
    return () => window.removeEventListener("cadence_favorites_updated", handleUpdate);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      toast.info(`Search triggers for: "${searchVal}" (Mocked)`);
      // Save recent search in localStorage
      const recents = JSON.parse(localStorage.getItem("recentSearches") || "[]");
      if (!recents.includes(searchVal)) {
        recents.unshift(searchVal);
        localStorage.setItem("recentSearches", JSON.stringify(recents.slice(0, 5)));
      }
      navigate(`/shop?search=${encodeURIComponent(searchVal)}`);
    }
  };

  const handleCartClick = (e) => {
    if (!token) {
      e.preventDefault();
      toast.warning("Sign in to access your Shopping Cart!");
      navigate("/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/95 backdrop-blur-md transition-colors select-none">
      {/* Primary Header Row Container */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 h-18 lg:h-20 flex items-center justify-between gap-6 relative">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-black text-[var(--color-primary)] tracking-tight hover:opacity-90 transition-opacity"
        >
          Cadence Mart
        </Link>

        {/* Categories Launcher & Mega Menu Hook (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          <div
            className="py-6 cursor-pointer"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <span className="text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
              Categories
            </span>
          </div>
          <Link
            to="/"
            className="text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Shop
          </Link>
        </nav>

        {/* Mega Menu Dropdown Container - Anchored to Primary Header Row Container */}
        <AnimatePresence>
          {showMegaMenu && (
            <MegaMenu onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave} />
          )}
        </AnimatePresence>

        {/* Search Bar (Desktop) */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center relative max-w-md w-full"
        >
          <Input
            id="header-search"
            type="search"
            placeholder="Search products..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary)]"
            aria-label="Submit search"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-500 hover:text-[var(--color-primary)] focus-ring rounded-full"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* User Account Dropdown */}
          <Dropdown
            trigger={
              <button
                className="p-2 text-gray-500 hover:text-[var(--color-primary)] focus-ring rounded-full flex items-center gap-1.5"
                aria-label="User account"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline text-xs font-semibold max-w-[80px] truncate">
                  {userDetail.name ? `Hi, ${userDetail.name}` : "Guest"}
                </span>
              </button>
            }
          >
            <div className="px-3 py-2 border-b border-[var(--color-border)] min-w-[160px]">
              <Typography variant="body-sm" className="font-bold">
                {userDetail.name || "Guest Account"}
              </Typography>
              <Typography variant="body-sm">{userDetail.email || "Sign in to buy"}</Typography>
            </div>
            {token && (
              <div className="flex flex-col border-b border-[var(--color-border)] py-1">
                <Link
                  to="/dashboard"
                  className="px-3 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors flex items-center gap-2"
                >
                  My Dashboard
                </Link>
              </div>
            )}
            <Link
              to={token ? "/logout" : "/login"}
              className="block px-3 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors font-semibold"
            >
              {token ? "Logout Account" : "Sign In"}
            </Link>
          </Dropdown>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className="p-2 text-gray-500 hover:text-[var(--color-primary)] focus-ring rounded-full relative flex items-center justify-center"
            aria-label="Wishlist"
          >
            <div className="relative">
              <Heart className="w-5 h-5" />
              <NotificationBadge count={wishlistCount} variant="primary" />
            </div>
          </Link>

          {/* Shopping Cart Trigger */}
          <Link
            to={token ? "/cart" : "/login"}
            onClick={handleCartClick}
            className="p-2 text-gray-500 hover:text-[var(--color-primary)] focus-ring rounded-full relative flex items-center justify-center"
            aria-label="Shopping cart"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <NotificationBadge count={getCartCount()} variant="danger" />
            </div>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 text-gray-500 hover:text-[var(--color-primary)] focus-ring rounded-full"
            aria-label="Open mobile navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Side Drawer */}
      <Drawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        title="Navigation Menu"
        position="left"
      >
        <form
          onSubmit={(e) => {
            handleSearchSubmit(e);
            setIsMobileOpen(false);
          }}
          className="flex items-center relative w-full mb-6"
        >
          <Input
            id="mobile-header-search"
            type="search"
            placeholder="Search products..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary)]"
            aria-label="Submit search"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setIsMobileOpen(false)}
            className="text-base font-semibold py-2 border-b border-[var(--color-border)] text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsMobileOpen(false)}
            className="text-base font-semibold py-2 border-b border-[var(--color-border)] text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Shop All
          </Link>
          <div className="flex flex-col gap-2">
            <Typography
              variant="body-sm"
              className="font-bold text-xs uppercase tracking-wider mt-4"
            >
              Categories
            </Typography>
            <Link
              to="/shop?category=Electronics"
              onClick={() => setIsMobileOpen(false)}
              className="text-sm text-[var(--color-text-secondary)] py-1.5 hover:text-[var(--color-primary)] transition-colors"
            >
              Electronics
            </Link>
            <Link
              to="/shop?category=Fashion"
              onClick={() => setIsMobileOpen(false)}
              className="text-sm text-[var(--color-text-secondary)] py-1.5 hover:text-[var(--color-primary)] transition-colors"
            >
              Fashion
            </Link>
            <Link
              to="/shop?category=Home%20%26%20Living"
              onClick={() => setIsMobileOpen(false)}
              className="text-sm text-[var(--color-text-secondary)] py-1.5 hover:text-[var(--color-primary)] transition-colors"
            >
              Home & Living
            </Link>
          </div>
        </nav>
      </Drawer>
    </header>
  );
}
