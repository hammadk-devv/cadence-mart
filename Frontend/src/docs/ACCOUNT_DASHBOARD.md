# User Member Dashboard Experience System

This document outlines the architecture, subcomponent hierarchies, layout patterns, and details synchronization models of the Customer Member Portal settings pages in Cadence Mart.

---

## 1. Component Architecture

All modular account components are located under `src/components/account/`:

```
Account/
├── DashboardLayout.jsx       # Grid layouts and workspace titles
├── DashboardSidebar.jsx      # Navigation sidebar lists tabs selector
├── DashboardHeader.jsx       # Header title overlays
├── DashboardOverview.jsx     # Greetings card, counters grids
├── ProfileSection.jsx        # Profile updating panel
├── ProfileForm.jsx           # Input forms fields
├── ChangePasswordForm.jsx    # Security password inputs
├── OrdersSection.jsx         # Orders lists history tracker
├── OrderCard.jsx             # Order item row card
├── OrderTimeline.jsx         # Visual status tracker timeline
├── OrderDetailsModal.jsx     # Invoice detail drawers
├── AddressesSection.jsx      # Addresses lists grids settings
├── AddressCard.jsx           # Card detail actions
├── AddressForm.jsx           # Reuses Checkout's ShippingAddressForm
├── PreferencesSection.jsx    # Newsletter/theme checkboxes selector
├── NotificationSettings.jsx  # Notification parameters
├── SecuritySection.jsx       # Session logs settings
├── SessionList.jsx           # Active login devices list
├── DashboardSkeleton.jsx     # Shimmer load panels
└── DashboardEmptyState.jsx   # Fallback warning layouts
```

---

## 2. Reusing Address Input Forms

To adhere to the Single Responsibility Principle and maintain design integrity:

- The dashboard Address Editing Form (`AddressForm.jsx`) directly imports the existing `ShippingAddressForm` from the Checkout page folder:
  `import ShippingAddressForm from '../commerce/Checkout/ShippingAddressForm';`
- This layout reuse guarantees that name/phone validations and focus ring animations remain identical across checkout and profile directories.

---

## 3. Order Progress Timeline

- Order state tracking is rendered visually using `OrderTimeline.jsx` (Placed -> Processing -> Shipped -> Delivered).
- Progress statuses map to colored step badges and connector lines.

---

## 4. Theme & Profile Updates

- Theme toggle checks call the global `ThemeContext` setter directly, refreshing dark themes instantly.
- Profile changes edit fields inside the global `AuthContext`, update greets on navbar instantly.
