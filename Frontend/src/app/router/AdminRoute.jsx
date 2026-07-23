import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/Auth/AuthContext";

export default function AdminRoute({ children }) {
  const { token, userDetail, isLoading } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--color-bg-primary)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-primary)]"></div>
      </div>
    );
  }

  const isAdmin =
    userDetail?.role === "admin" ||
    userDetail?.isAdmin === true ||
    (userDetail?.email && userDetail.email.toLowerCase().includes("admin"));

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
