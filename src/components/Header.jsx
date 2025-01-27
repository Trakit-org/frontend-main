import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Header = () => {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
  };

  return (
    <header className="p-2 shadow-md bg-blue-500">
      <div className={`max-w-7xl mx-auto ${!user ? 'justify-between': 'justify-end'} px-4 sm:px-6 lg:px-8 py-6 flex items-center`}>
          {!user && <img src={Logo} alt="Logo" className="h-8 mr-3" />}

          <div className="flex ">
          <div className="flex items-center">
            {!user && (
              <nav className="flex space-x-6 text-lg">
                <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
                {/* <Link to="/contact" className="text-white hover:text-gray-200">Contact Us</Link> */}
                {/* <Link to="/login" className="text-white hover:text-gray-200">Login</Link> */}
              </nav>
            )}
          </div>

          <div className="flex text-white items-center space-x-4 ml-16 mr-12">
            {user ? (
              <>
                <div>Hi, {user.name}</div>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <FaUserCircle className=" text-white" size={30}  />
                </button>
                <Link to="/logout" className="text-white bg-blue-500 px-6 py-2 rounded-full text-lg" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="text-blue-600 bg-white px-6 py-2 rounded-full text-lg ">
                Login
              </Link>
            )}
          </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
