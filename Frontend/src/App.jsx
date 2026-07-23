import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./app/layouts/MainLayout";
import ErrorBoundary from "./components/feedback/ErrorBoundary";
import LoadingSpinner from "./components/feedback/LoadingSpinner";
import ScrollToTop from "./components/common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./app/router/ProtectedRoute";
import AdminRoute from "./app/router/AdminRoute";

const Home = lazy(() => import("./Pages/Home"));
const Shop = lazy(() => import("./Pages/Shop"));
const Product = lazy(() => import("./components/Product"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const Account = lazy(() => import("./Pages/Account"));
const Logout = lazy(() => import("./components/Logout"));
const Wishlist = lazy(() => import("./Pages/Wishlist"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const AdminDashboard = lazy(() => import("./Pages/AdminDashboard"));
const Unauthorized = lazy(() => import("./Pages/Unauthorized"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const HomePageShimmer = lazy(() => import("./components/HomePageShimmer.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <MainLayout>
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product" element={<Product />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Account />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/shemmer" element={<HomePageShimmer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </ErrorBoundary>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}
