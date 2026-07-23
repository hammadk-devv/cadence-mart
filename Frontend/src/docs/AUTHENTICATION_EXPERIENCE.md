# Authentication & Account Experience System

This document outlines the architecture, token lifecycle operations, Axios request interceptors, responsive card layouts, and accessibility features of the Authentication system in Cadence Mart.

---

## 1. Component Architecture

All modular authentication components are located under `src/components/auth/`:

```
Auth/
├── LoginForm.jsx             # Email/Password form controllers
├── RegisterForm.jsx          # Sign-up forms
├── ForgotPasswordForm.jsx    # Reset recovery UI panels
├── ResetPasswordForm.jsx     # Setting new password inputs
├── AuthCard.jsx              # Tab and view state orchestrator card
├── AuthHeader.jsx            # Sign In / Sign Up tab selectors
├── PasswordStrength.jsx      # Complexity bar gauge
├── PasswordInput.jsx         # Inputs with show/hide password buttons
├── SocialLoginSection.jsx    # OAuth buttons (Google/Apple)
├── RememberMe.jsx            # Remember Me Checkboxes
├── AuthDivider.jsx           # Styled separators
├── AuthSkeleton.jsx          # Load shimmers
└── AuthErrorState.jsx        # User-facing secure generic error details
```

---

## 2. Token Lifecycle & Axios Interceptor

We maintain a secure, production-grade JWT token lifecycle:

- **Axios Request Interceptor**: Automatically attaches the Bearer JWT token from `localStorage` on all API queries:
  `config.headers.Authorization = 'Bearer ' + token;`
- **Axios Response Interceptor**: Inspects response codes. If a request returns `401 Unauthorized` status, it clears tokens from cache storage and automatically refreshes location states, triggering auto-logouts.

---

## 3. Account Menu Dropdown

The desktop header user profile action is wrapped inside a Dropdown menu, providing quick navigation targets:

- Hi, [User Name]
- My Wishlist
- Shopping Cart
- Logout / Sign In

---

## 4. Accessibility (WCAG 2.2 AA)

- Eye toggle buttons define explicit descriptive ARIA labels (`aria-label`).
- Inputs declare proper browser autofocus, autocomplete, and label indicators.
- Errors are configured with `role="alert"`.
