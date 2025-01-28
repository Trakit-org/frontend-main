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
    setError(error + 1);
    console.log("error cc", error);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetch(
        "https://trakit-backend.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        console.log("response", response);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setUser(data.user);
      // setAccessToken(data.token);
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      console.error("Error logging in user:", error);
      return { success: false, error: "Wrong email or password" };
    }
  };

  const register = async (credentials) => {
    try {
      const response = await fetch(
        "https://trakit-backend.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        console.log("response", response);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setUser(data.user);
      // setAccessToken(data.token);
    } catch (error) {
      console.error("Error registering user:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    // Logout logic here
    setUser(null);
    setAccessToken(null);
    setIsAuthenticated(false);
  };

  const getSubscription = (id) => {
    const subscription = subscriptions.filter((subs) => subs.id == id);
    setSubscription(subscription);
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(
        "https://trakit-backend-main.onrender.com/api/v1/subscriptions",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setSubscriptions(data);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };

  const addSubscription = async (subscriptionData) => {
    try {
      const response = await fetch(
        "https://trakit-backend-main.onrender.com/api/v1/subscriptions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(subscriptionData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setSubscriptions((prevSubs) => [...prevSubs, data.subscription]);
      return { success: true };
    } catch (error) {
      console.error("Error adding subscription:", error);
      return { success: false, error: error.message };
    }
  };

  const updateSubscription = async (id, updatedData) => {
    try {
      const response = await fetch(
        `https://trakit-backend-main.onrender.com/api/v1/subscriptions/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      fetchSubscriptions();
      return { success: true };
    } catch (error) {
      console.error("Error updating subscription:", error);
      return { success: false, error: error.message };
    }
  };

  const deleteSubscription = async (id) => {
    try {
      const response = await fetch(
        `https://trakit-backend-main.onrender.com/api/v1/subscriptions/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const newSubs = subscriptions.filter((sub) => sub.id !== id);
      setSubscriptions(newSubs);
      fetchSubscriptions();
    } catch (error) {
      console.error("Error deleting subscription:", error);
    }
  };

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
