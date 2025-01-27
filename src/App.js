import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import AddSubscription from "./pages/AddSubscription";
import Dashboard from "./pages/Dashboard";
import ManageSubscription from "./pages/ManageSubscription";
import Renewal from "./pages/Renewal";
import { AuthProvider, AuthContext } from "./AuthContext";
import { useContext } from "react";
import UpdateSubscription from "./pages/UpdateSubscription";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainRoutes />
      </Router>
    </AuthProvider>
  );
}

function MainRoutes() {
  const { isAuthenticated, accessToken } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-subscription" element={<AddSubscription />} />
      <Route path="/update-subscription/:id" element={<UpdateSubscription />} />
      <Route path="/manage-subscriptions" element={<ManageSubscription />} />
      <Route path="/renewals" element={<Renewal />} />
      <Route
        path="/dashboard"
        element={isAuthenticated || accessToken ? <Dashboard /> : <Login />}
      />
    </Routes>
  );
}

export default App;
