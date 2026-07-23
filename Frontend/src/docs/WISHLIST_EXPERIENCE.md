# Wishlist Experience System

This document outlines the architecture, global custom event synchronization patterns, responsive layout structures, accessibility features, and animations of the My Favorites Wishlist system in Cadence Mart.

---

## 1. Component Architecture

All modular components are located under `src/components/commerce/Wishlist/`:

```
Wishlist/
├── WishlistLayout.jsx          # Grid layout composition coordinator
├── WishlistHeader.jsx          # Title header displaying favorites count
├── WishlistGrid.jsx            # Multi-product catalog grid
├── WishlistItem.jsx            # Individual favorite card row
├── WishlistActions.jsx         # Action buttons (Move All, Clear All)
├── WishlistSummary.jsx         # Estimated value summary card
├── WishlistShare.jsx           # Clipboard share action links
├── WishlistRecommendations.jsx # Trending trending suggestions
├── WishlistSkeleton.jsx        # Skeleton loaders
└── WishlistEmptyState.jsx      # Empty state warning illustrations
```

---

## 2. Global Sync Events Pattern

We avoid complex context-provider loops by driving a unidirectional Custom Window Event pattern:

- Updating favorites in detail pages (`Product.jsx`) or grid showcases (`ProductCard.jsx`) sets the item lists in `localStorage` under `cadence_favorites`.
- Immediately following, it dispatches the `cadence_favorites_updated` window event:
  `window.dispatchEvent(new Event("cadence_favorites_updated"));`
- The `Navbar` and `Wishlist` pages register simple event listeners and immediately fetch and sync counts and highlights without requiring full page refetches.

---

## 3. Responsive Layout

- **Desktop (>= 1024px)**: Responsive product items grid showing action widgets.
- **Mobile/Tablet (< 1024px)**: Single column list layouts. Action controls include touch targets of at least `44px`.

---

## 4. Accessibility (WCAG 2.2 AA)

- Product favorite buttons, sharing links, and cart moves support keyboard focus navigation.
- Accessible ARIA labels describe target action destinations.
- Contrast ratios comply with the minimum AA requirements.

---

## 5. Motion Details

- Fade-in presets animate list reductions and removals cleanly using standard Motion Library abstractions.
