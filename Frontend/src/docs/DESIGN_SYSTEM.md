# Cadence Mart - Design System Guidelines

This document outlines the token configurations, components architecture, layout patterns, motion parameters, and accessibility criteria for the React client.

---

## 1. Design Token Philosophy

Tokens are configured inside `Frontend/index.css` as CSS custom properties under `:root`. By binding style options to variables rather than hardcoding colors/radii, we guarantee consistent styling:

- **Colors**: Set brand, semantic, text, background, and ring variables. Dark mode switches are handled by applying `[data-theme="dark"]` overrides.
- **Typography**: Scale properties from `font-size-xs` (0.75rem) to `font-size-4xl` (2.25rem).
- **Spacing**: Enforces values in multiples of 4px (`spacing-1` to `spacing-12`).
- **Radii**: Outlines rounded profiles (`radius-sm` to `radius-full`).
- **Elevation**: Renders uniform shadow layers (`shadow-sm`, `shadow-md`, `shadow-lg`).

---

## 2. Core UI Component Library

Core primitives reside inside `components/ui/` and remain agnostic of specific pages logic, receiving properties through props:

- **Button / IconButton**: Configure size (sm, md, lg), state (isLoading, isDisabled), and variants (primary, secondary, outline, text, danger).
- **Input / Textarea / Select / Checkbox**: Standardized form inputs supporting labels, placeholders, errors, and ARIA labels.
- **Badge / Card / Container / Typography**: Structural containers, cards, margins, and typography sizes.
- **Spinner / Skeleton / Divider / Modal / Tooltip**: Overlays, divider rules, shimmers, status loaders.

---

## 3. Commerce Primitives

Domain-specific components reside in `components/commerce/` to standardise catalog layouts:

- **Price**: Formats and displays current and crossed-out original prices.
- **Rating**: Displays star ratings with half-star support.
- **DiscountBadge**: Displays percentage savings automatically.
- **QuantitySelector**: Renders increment/decrement buttons with boundaries checks.
- **WishlistButton / AddToCartButton**: UI triggers for cart and wishlist modifications.
- **CategoryCard / ProductCard**: Modular product grid wrappers.

---

## 4. Motion Guidelines (`styles/motion.js`)

Animations use **Framer Motion** variants:

- **Transitions**: Default normal duration: `0.3s`, fast transition: `0.15s`.
- **Easings**: Use `easeInOut`, `easeOut`, or snapper spring easings for overlays.
- **Interactive Triggers**: Tap and hover animations on interactive elements like buttons.

---

## 5. Accessibility Criteria (WCAG 2.2 AA)

- All interactive controls render high-contrast outlines on focus: `.focus-ring`.
- Form controls must link labels using `htmlFor` and configure `aria-invalid` / `aria-describedby` when reporting validation errors.
- Announce loading or status messages dynamically using `announceToScreenReader`.
