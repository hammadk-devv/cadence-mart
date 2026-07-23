# Cadence Mart - Application Shell Guidelines

This document outlines the shell architectures, layout compositions, navigation configurations, responsive behaviors, and overlay systems for the client React app.

---

## 1. Shell Architecture & Layouts

All views in the application are designed to render nested inside one of the four standardized layout shells:

- **MainLayout**: Default viewport layout. Bundles sticky navigation bar, dismissible announcement alert, auto-breadcrumbs, footer columns, and scroll-to-top helpers.
- **AuthLayout**: Centered layout wrapper targeting login and signup screens.
- **AdminLayout**: Two-column layout grid integrating sidebar navigations for management paths.
- **MinimalLayout**: Simplified distraction-free layout for shopping bag checkout checkouts.

---

## 2. Navigation System & Interactive Header

The header navigation is managed inside `src/components/Navbar.jsx`:

- **Categories Menu**: A desktop hover menu displaying category groupings (Electronics, Fashion, Home & Living) and featured banner links.
- **Form Search**: Search inputs compiling queries and saving items to recent queries in localStorage.
- **Theme Toggles**: Toggles theme flags between light/dark options.
- **User Actions**: Click triggers launching dropdown menus with account info and logout navigation links.
- **Responsive Navigation Toggles**: Mobile sizes replace categories and search blocks with hamburger menus that expand the navigation sidebar drawer.

---

## 3. Reusable Overlays & Drawers

- **Drawer.jsx**: Renders sliding drawers from left or right viewport boundaries. Uses Framer Motion slide-in animations and background backdrops.
- **Dropdown.jsx**: Renders dropdown overlay layers next to trigger elements. Hooks up click-outside event listeners to close menus when clicking elsewhere.

---

## 4. Accessibility Compliance (WCAG 2.2 AA)

- **Skip link**: MainLayout starts with a hidden `#main-content` anchor tag, allowing keyboard users to bypass headers navigation links directly on focus.
- **ARIA landmarks**: Renders `<header>`, `<main>`, and `<footer>` HTML5 containers to structure pages for screen readers.
- **Keyboard boundaries**: Dropdown overlays close on escape key triggers, and modal drawers apply scroll locking to prevent focus leaks.
