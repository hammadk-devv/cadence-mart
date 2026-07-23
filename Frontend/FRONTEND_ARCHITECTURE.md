# Frontend Architecture - Cadence Mart Client

This document outlines the architectural boundaries, folder conventions, data layers, hooks, and guidelines for the frontend React client.

---

## 1. Directory Structure

The frontend adopts a layered, modular folder layout inside `src/`:

```
src/
├── app/
│   ├── layouts/     # Reusable layout shells (MainLayout, AuthLayout)
│   ├── router/      # Navigation guards (ProtectedRoute, AdminRoute)
│   └── providers/   # Context wrapper hierarchies
├── features/        # Business feature modules (auth, cart, products)
├── components/      # UI components (ui, common, feedback)
│   └── feedback/    # ErrorBoundary, LoadingSpinner
├── context/         # Central State managers (Auth, Cart, Product, Theme)
├── hooks/           # Reusable custom hooks (useAuth, useLocalStorage)
├── services/        # Central API Client connectors (apiClient)
├── utils/           # Keyboard accessibility helpers, formatters
└── constants/       # Central styles colors, ROUTES, storage keys
```

---

## 2. Shared API Client Layer (`services/`)

All HTTP communication with the MERN backend routes through a centralized Axios client:

- **apiClient.js**: Manages request interceptors to automatically fetch tokens from localStorage and map them into the `Authorization: Bearer <token>` header. It also normalizes backend error responses into a consistent JSON error schema.
- **userService.js**: Encapsulates login, registration, and profile detail queries.
- **productService.js**: Encapsulates product catalog fetches.
- **cartService.js**: Synchronizes shopping bag details (additions, quantity changes, list gets).

---

## 3. Providers Hierarchy (`app/providers/`)

Providers are nested in a clean chain using the `AppProviders` container. This hierarchy aligns state relationships and avoids deeply nested markup inside entry files:

```jsx
<AuthProvider>
  <ProductState>
    <CartProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CartProvider>
  </ProductState>
</AuthProvider>
```

---

## 4. Reusable Layouts & Router System

- **MainLayout**: Integrates Navbar and establishes structural layout wrappers.
- **ProtectedRoute**: Re-routes guests trying to access pages requiring auth back to `/login`.
- **AdminRoute**: Restricts dashboard routing to authorized admins.
- **Performance boundary**: Route rendering inside `App.jsx` dynamically loads components using `React.lazy` and `Suspense`, preventing large bundle deliveries.

---

## 5. Reusable Custom Hooks

- `useAuth()`: Simplifies access to user credentials and login tasks.
- `useCart()`: Exposes cart operations (add to cart, update cart item counts).
- `useTheme()`: Retrieves dark/light mode context.
- `useDebounce(value, delay)`: Defers input state modifications to reduce API spam.
- `useLocalStorage(key, initialValue)`: Simplifies saving persistent user states.

---

## 6. Coding & Accessibility Standards

- **Formatting**: Terminated JS lines, Es5 trailing commas, double-quotes.
- **A11y**: Use `handleKeyboardSelect` to bind Enter/Space triggers to click actions. Announce status messages using `announceToScreenReader`.
- **Naming**: camelCase for files/variables/methods, PascalCase for components and hooks classes.
