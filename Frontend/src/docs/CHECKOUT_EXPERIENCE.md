# Premium Checkout Experience System

This document outlines the architecture, multi-step progress stepper accordion layout columns, calculations strategy, payment gateways integrations architecture, and validation systems of the Checkout system in Cadence Mart.

---

## 1. Component Architecture

All modular checkout components are located under `src/components/commerce/Checkout/`:

```
Checkout/
├── CheckoutLayout.jsx        # Grid layout composition coordinator
├── CheckoutStepper.jsx       # Multi-step progress stepper bar indicators
├── CheckoutSection.jsx       # Collapsible step accordion container wrappers
├── CheckoutHeader.jsx        # Secures labels titles
├── ShippingAddressForm.jsx   # Address input forms
├── AddressCard.jsx           # Formatted address cards
├── DeliveryMethod.jsx        # Delivery speed option select inputs
├── BillingSummary.jsx        # Grand totals calculation list items
├── PaymentSection.jsx        # Credit card and Cash on Delivery inputs
├── PaymentMethodCard.jsx     # Selector trigger buttons
├── PlaceOrderButton.jsx      # Spinner action placeOrder indicators
├── CheckoutSuccess.jsx       # Premium receipt status details pages
├── CheckoutSkeleton.jsx      # Skeleton loader placeholders
└── CheckoutEmptyState.jsx    # Fallback checkout warning layouts
```

---

## 2. Multi-Step Checkout Flow

- **Address Details**: Validates Full Name, Phone, and address elements.
- **Delivery Speeds**: Standard (Free over $100, else $10) or Express ($25) configurations.
- **Payment Method**: Gateway selectors for credit cards or Cash on Delivery.
- **Order Review**: Combines address details, delivery speeds, payment method, and billing totals before final placeOrder actions.

---

## 3. Future-Ready Payments Architecture

- We declare a unified payload schema:
  `{ items, address, deliveryMethod, paymentMethod, billing }`
- `ordersService.js` routes submissions to `/api/order/place`.
- Falls back to resolved simulated order numbers on status `404` errors to prevent backend dependencies from locking local testing.
- This decoupled model allows drop-in adapters for Stripe, PayPal, or Apple Pay later.

---

## 4. Accessibility (WCAG 2.2 AA)

- Step stepper links define `aria-current="step"`.
- Error announcements map to `role="alert"`.
- Focus indicators remain visible during keyboard navigations.
