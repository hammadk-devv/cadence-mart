import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AnnouncementBar from "../../components/common/AnnouncementBar";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Footer from "../../components/common/Footer";
import Button from "../../components/ui/Button";
import { ArrowUp } from "lucide-react";

export default function MainLayout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();
  const isAdminPath =
    pathname.toLowerCase() === "/admin" || pathname.toLowerCase().startsWith("/admin/");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isAdminPath) {
    return (
      <div className="flex flex-col min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <main id="main-content" className="flex-grow">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* Skip to Content for keyboard screen readers accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-[var(--color-primary)] focus:border"
      >
        Skip to main content
      </a>

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Viewport Content */}
      <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs />
        {children}
      </main>

      {/* Reusable Footer */}
      <Footer />

      {/* Back to Top Trigger Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          variant="secondary"
          size="sm"
          className="fixed bottom-6 right-6 rounded-full shadow-[var(--shadow-md)] p-3 z-40"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
