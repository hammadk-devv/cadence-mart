import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { getUserDetails as fetchUserDetails } from "../../services/userService";

const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userDetail, setUserDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getUserDetails = async () => {
    if (!token) {
      setUserDetail({});
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const data = await fetchUserDetails();

      if (data && data.success) {
        setUserDetail(data.user);
      } else {
        setUserDetail({});
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUserDetail({});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        backendUrl,
        userDetail,
        setUserDetail,
        getUserDetails,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
