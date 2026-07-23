import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import IconButton from "../../ui/IconButton";

export default function ProductGallery({ images = [], name = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const activeImage = images[activeIndex] || "/placeholder.png";

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-secondary)] group">
        <div
          className="w-full h-full cursor-zoom-in overflow-hidden relative"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={activeImage}
            alt={name}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-200 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
            style={isZoomed ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : undefined}
          />
        </div>

        <IconButton
          icon={Maximize2}
          variant="outline"
          size="sm"
          onClick={() => setIsFullscreen(true)}
          label="Open Fullscreen View"
          className="absolute bottom-4 right-4 bg-white/80 backdrop-blur shadow opacity-0 group-hover:opacity-100 transition-opacity"
        />

        {images.length > 1 && (
          <>
            <IconButton
              icon={ChevronLeft}
              variant="outline"
              size="sm"
              onClick={handlePrev}
              label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur shadow opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <IconButton
              icon={ChevronRight}
              variant="outline"
              size="sm"
              onClick={handleNext}
              label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur shadow opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-20 h-20 border rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg-secondary)] flex-shrink-0 focus-ring transition-all ${
                index === activeIndex
                  ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                  : "border-[var(--color-border)] hover:border-[var(--color-text-secondary)]"
              }`}
              aria-label={`View image thumbnail ${index + 1}`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
          <IconButton
            icon={X}
            variant="ghost"
            size="lg"
            onClick={() => setIsFullscreen(false)}
            label="Close Fullscreen View"
            className="absolute top-6 right-6 text-white hover:text-red-500"
          />
          <img
            src={activeImage}
            alt={name}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-[var(--radius-lg)]"
          />
        </div>
      )}
    </div>
  );
}
