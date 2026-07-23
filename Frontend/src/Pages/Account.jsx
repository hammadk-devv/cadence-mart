import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import AuthContext from "../context/Auth/AuthContext.jsx";
import { loginUser, registerUser } from "../services/userService";
import AuthCard from "../components/auth/AuthCard";
import Container from "../components/ui/Container";

export default function Account() {
  const { dark } = useContext(ThemeContext);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    setError("");
    try {
      const data = await loginUser(email, password);
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        toast.success("Login Successful!");
        navigate("/");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError(err.message || "Failed to log in. Please check your network connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (name, email, password) => {
    setIsLoading(true);
    setError("");
    try {
      const data = await registerUser(name, email, password);
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        toast.success("Account created successfully!");
        navigate("/");
      } else {
        setError(data.message || "Failed to create account");
      }
    } catch (err) {
      setError(err.message || "Registration failed. Please check details and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-4 ${dark ? "bg-zinc-950" : "bg-zinc-50"}`}
    >
      <Container className="max-w-md w-full">
        <AuthCard
          onLogin={handleLogin}
          onRegister={handleRegister}
          isLoading={isLoading}
          error={error}
        />
      </Container>
    </div>
  );
}
