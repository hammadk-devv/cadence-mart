# Shopping Cart Experience System

This document outlines the architecture, calculations strategy, responsive behaviors, accessibility mappings, and animations of the Shopping Cart system in Cadence Mart.

---

## 1. Component Architecture

All modular components are located under `src/components/commerce/Cart/`:

```
Cart/
├── CartLayout.jsx            # Multi-column grid orchestrator
├── CartHeader.jsx            # Shopping bag summaries and count headers
├── CartItems.jsx             # Cart items mapper
├── CartItem.jsx              # Product item row container
├── CartItemImage.jsx         # Card picture elements
├── CartItemDetails.jsx       # Pricing detail lines
├── CartItemActions.jsx       # Limit adjusters & deletion triggers
├── OrderSummary.jsx          # Sticky Checkout summary card
├── PromoCode.jsx             # Coupon forms
├── ShippingEstimator.jsx     # Speed options selector
├── CartRecommendations.jsx   # Recommendations footer
├── CartSkeleton.jsx          # Load shimmers
└── CartEmptyState.jsx        # Empty state warning panel
```

---

## 2. Price Calculation Strategy

Subtotals, taxes, shipping fees, discounts, and totals are computed dynamically in `Pages/CartPage.jsx` using derived states:

- **Subtotal**: Sum of `(item.price * item.quantity)` across all active items.
- **Promo Discount**: Applying code `CADENCE10` subtracts `10%` off the subtotal.
- **Estimated Shipping**: Standard Delivery is free on subtotals > `$100`, else `$10`. Express speed costs a flat `$25`.
- **Estimated Tax**: Computed as `8%` of the subtotal.
- **Final Total**: `Subtotal - Discount + Shipping + Tax`.

---

## 3. Responsive Layout

- **Desktop (>= 1024px)**: Standard two-column split. Cart items list sits on the left column (spans 8 cols); order summary cards stick to the right sidebar (spans 4 cols) during scrolling.
- **Mobile/Tablet (< 1024px)**: Single vertical column with summaries placed beneath items.

---

## 4. Accessibility (WCAG 2.2 AA)

- Quantity increment and decrement action targets support WCAG minimum click targets of `44px`.
- Page blocks utilize semantic landmarks: `<nav>` for menus, `<main>` for catalogs, and list item wrappers.
- Subtotals and final prices are wrapped inside `aria-live="polite"` nodes, informing screen readers of changes on quantity updates.

---

## 5. Motion Details

- Fade-in configurations animate item removals and list entries using the centralized Motion Library.
- Chevron dropdown elements utilize scale-in presets.
