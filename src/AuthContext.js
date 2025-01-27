import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("token");
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(0);
  // const [refreshToken, setRefreshToken] = useState(null);
  const [refreshTokenExpiration, setRefreshTokenExpiration] = useState(null);

  useEffect(() => {
    fetchSubscriptions(); // Fetch subscriptions when authenticated
    fetchUser();
    setError(error + 1);
    console.log("error cc", error);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetch(
        "https://trakit-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );
      const data = await response.json();
      if (data.error) {
        console.log(data.error);
        throw new Error(data.error);
      }
      setUser(data.user);
      // setAccessToken(data.token);
      localStorage.setItem("token", data.token.toString());
      setIsAuthenticated(true);
      console.log("data received: ", data);
      console.log("data received: ", data.user, data.token);
      return { success: true };
    } catch (error) {
      console.log("error", error);
      console.error("err:", error);
      return { success: false, error: error.message };
      // Handle login error
    }
  };

  //   Can I use contextapi instead of redux toolkits for authentication and authentication, including login registration, user dashboard, and also how to handle routing
  const register = async (credentials) => {
    try {
      const response = await fetch(
        "https://trakit-backend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setUser(data.user);
      // setAccessToken(data.token);
      localStorage.setItem("token", data.token.toString());
      setIsAuthenticated(true);
      console.log("data received: ", data.user, data.token);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: error.message };
      // Handle register error
    }
  };

  const logout = () => {
    // Logout logic here
    setUser(null);
    setAccessToken(null);
    setIsAuthenticated(false);
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(
        "https://trakit-backend.onrender.com/api/subscriptions",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const data = await response.json();
      console.log("subs", data);
      setSubscriptions(data);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://trakit-backend.onrender.com/api/users/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const data = await response.json();
      console.log(data, "data");
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user1:", error);
    }
  };

  const getSubscription = (id) => {
    const subscription = subscriptions.filter((subs) => subs.id == id);
    setSubscription(subscription);
  };

  const addSubscription = async (subscriptionData) => {
    try {
      const response = await fetch(
        "https://trakit-backend.onrender.com/api/subscriptions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(subscriptionData),
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setSubscriptions((prevSubs) => [...prevSubs, data.subscription]);
      return { success: true };
    } catch (error) {
      console.log(error.message);
      console.error("Error adding subscription:", error);
      return { success: false, error: error.message };
    }
  };

  const updateSubscription = async (id, updatedData) => {
    try {
      const response = await fetch(
        `https://trakit-backend.onrender.com/api/subscriptions/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(updatedData),
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      fetchSubscriptions();
      return { success: true };
    } catch (error) {
      console.error("Error updating subscription:", error);
      return { success: false, error: error.message };
    }
  };

  const deleteSubscription = async (id) => {
    try {
      await fetch(
        `https://trakit-backend.onrender.com/api/subscriptions/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const newSubs = subscriptions.filter((sub) => sub.id !== id);
      setSubscriptions(newSubs);
      fetchSubscriptions();
    } catch (error) {
      console.error("Error deleting subscription:", error);
    }
  };

  // const refreshAccessToken = async () => {
  //   try {
  //     const response = await fetch("https://trakit-backend.onrender.com/api/refresh-token", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ acc }),
  //     });
  //     const data = await response.json();
  //     setAccessToken(token);
  //   } catch (error) {
  //     if (error.status === 401) {
  //       // Refresh token has expired, log user out
  //       logout();
  //       // Redirect to login page
  //       // navigate("/login");
  //     }
  //   }
  // };
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Check if access token is expired
  //     if (accessToken && Date.now() / 1000 > accessToken.exp) {
  //       refreshAccessToken();
  //     }
  //   }, 1000 * 60); // Check every minute

  //   return () => clearInterval(intervalId);
  // }, [accessToken, refreshAccessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isAuthenticated,
        setIsAuthenticated,
        subscriptions,
        getSubscription,
        addSubscription,
        updateSubscription,
        deleteSubscription,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
