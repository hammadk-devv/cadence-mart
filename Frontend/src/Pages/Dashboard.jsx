import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutDashboard, User, ShoppingBag, MapPin, Settings, Shield } from "lucide-react";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import AuthContext from "../context/Auth/AuthContext.jsx";
import CartContext from "../context/Cart/CartContext.jsx";
import DashboardLayout from "../components/account/DashboardLayout";
import {
  DashboardOverview,
  ProfileSection,
  OrdersSection,
  AddressesSection,
  PreferencesSection,
  SecuritySection,
} from "../components/account";

export default function Dashboard() {
  const { dark } = useContext(ThemeContext);
  const { token, userDetail, setUserDetail } = useContext(AuthContext);
  const { getCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const [notifSettings, setNotifSettings] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
  });

  // Guard dashboard access - redirect if unauthenticated
  useEffect(() => {
    if (!token && !localStorage.getItem("token")) {
      toast.warning("Please sign in to access your Customer Dashboard.");
      navigate("/login");
    }
  }, [token, navigate]);

  // Load wishlist count
  const loadWishlistCount = () => {
    try {
      const stored = localStorage.getItem("cadence_favorites");
      const favs = stored ? JSON.parse(stored) : [];
      setWishlistCount(favs.length);
    } catch (e) {
      console.error(e);
    }
  };

  // Load saved addresses from localStorage
  const loadAddresses = () => {
    try {
      const stored = localStorage.getItem("cadence_saved_addresses");
      const list = stored
        ? JSON.parse(stored)
        : [
            {
              id: "addr-1",
              name: userDetail.name || "Default Member",
              phone: "+1 (555) 019-2834",
              address: "1200 Commerce Blvd, Suite 400",
              city: "San Francisco",
              state: "CA",
              zipCode: "94103",
              isDefault: true,
            },
          ];
      setAddresses(list);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadWishlistCount();
    loadAddresses();

    const handleUpdate = () => loadWishlistCount();
    window.addEventListener("cadence_favorites_updated", handleUpdate);
    return () => window.removeEventListener("cadence_favorites_updated", handleUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetail]);

  const tabsConfig = [
    {
      id: "overview",
      label: "Dashboard Overview",
      icon: LayoutDashboard,
      desc: "Account summaries and quick actions settings",
    },
    {
      id: "profile",
      label: "My Profile Details",
      icon: User,
      desc: "Update full name, phone number, and security credentials",
    },
    {
      id: "orders",
      label: "Order History",
      icon: ShoppingBag,
      desc: "Inspect track speeds and print invoices of previous orders",
    },
    {
      id: "addresses",
      label: "Addresses Directory",
      icon: MapPin,
      desc: "Add, delete, or edit saved shipping address settings",
    },
    {
      id: "preferences",
      label: "Settings Preferences",
      icon: Settings,
      desc: "Enable dark modes or weekly newsletter updates options",
    },
    {
      id: "security",
      label: "Security Center",
      icon: Shield,
      desc: "Inspect device sessions logs and configure logins security",
    },
  ];

  // Address Handlers
  const handleAddAddress = (data) => {
    const newAddress = {
      id: "addr-" + Date.now(),
      ...data,
      isDefault: addresses.length === 0,
    };
    const updated = [...addresses, newAddress];
    setAddresses(updated);
    localStorage.setItem("cadence_saved_addresses", JSON.stringify(updated));
    toast.success("New shipping address added!");
  };

  const handleEditAddress = (id, data) => {
    const updated = addresses.map((addr) => (addr.id === id ? { ...addr, ...data } : addr));
    setAddresses(updated);
    localStorage.setItem("cadence_saved_addresses", JSON.stringify(updated));
    toast.success("Shipping address updated successfully!");
  };

  const handleDeleteAddress = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);
    localStorage.setItem("cadence_saved_addresses", JSON.stringify(updated));
    toast.info("Shipping address removed.");
  };

  // Preference Handlers
  const handleNotifChange = (key, value) => {
    setNotifSettings((prev) => ({ ...prev, [key]: value }));
    toast.success("Notification preferences updated.");
  };

  // Profile Edit
  const handleUpdateProfile = async (data) => {
    setIsUpdating(true);
    try {
      // Simulate profile post endpoint updates
      setTimeout(() => {
        setUserDetail((prev) => ({ ...prev, ...data }));
        toast.success("Profile details updated successfully!");
        setIsUpdating(false);
      }, 1000);
    } catch (e) {
      toast.error("Failed to update profile details.");
      setIsUpdating(false);
    }
  };

  // Mock orders list
  const mockOrders = [
    {
      orderId: "CAD-298374",
      date: "May 14, 2026",
      status: "Delivered",
      total: 129.99,
      items: [
        { _id: "prod-1", name: "Premium Noise-Cancelling Headphones", quantity: 1, price: 129.99 },
      ],
      address: addresses[0] || {
        name: "Default Member",
        address: "1200 Commerce Blvd",
        city: "San Francisco",
      },
    },
  ];

  const renderActiveSection = () => {
    switch (activeTab) {
      case "overview":
        return (
          <DashboardOverview
            user={userDetail}
            cartCount={getCartCount()}
            wishlistCount={wishlistCount}
            addressCount={addresses.length}
            onNavigate={setActiveTab}
          />
        );
      case "profile":
        return (
          <ProfileSection
            user={userDetail}
            onSubmitProfile={handleUpdateProfile}
            isLoading={isUpdating}
          />
        );
      case "orders":
        return <OrdersSection orders={mockOrders} />;
      case "addresses":
        return (
          <AddressesSection
            addresses={addresses}
            onAdd={handleAddAddress}
            onEdit={handleEditAddress}
            onDelete={handleDeleteAddress}
          />
        );
      case "preferences":
        return <PreferencesSection settings={notifSettings} onChangeSettings={handleNotifChange} />;
      case "security":
        return <SecuritySection />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"}`}>
      <DashboardLayout tabs={tabsConfig} activeTab={activeTab} onTabChange={setActiveTab}>
        {renderActiveSection()}
      </DashboardLayout>
    </div>
  );
}
