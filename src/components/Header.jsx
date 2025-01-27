import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Header = () => {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="p-2 shadow-md bg-blue-500">
      <div className={`max-w-7xl mx-auto ${!user ? 'justify-between': 'justify-end'} px-4 sm:px-6 lg:px-8 py-6 flex items-center`}>
        {!user && <img src={Logo} alt="Logo" className="h-8 mr-3" />}
        <div className="flex ">
          <div className="flex items-center">
            <nav className={`lg:flex hidden space-x-6 text-lg`}>
              <Link to="/" className="text-white hover:text-gray-200">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
              {/* <Link to="/contact" className="text-white hover:text-gray-200">Contact Us</Link> */}
              {/* <Link to="/login" className="text-white hover:text-gray-200">Login</Link> */}
            </nav>
            <button className="lg:hidden border2 text-white" onClick={handleNavToggle}>
              {/* Hamburger icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="md:flex hidden text-white items-center space-x-4 ml-16 mr-12">
            {user ? (
              <>
                <div>Hi, {user.name}</div>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <FaUserCircle className=" text-white" size={30} />
                </button>
                <Link to="/logout" className="text-white bg-blue-500 px-6 py-2 rounded-full text-lg" onClick={handleLogout}> Logout </Link>
              </>
            ) : (
              <div className="md:flex hidden">
                <Link to="/register" className="text-white mr-2 bg-greenish px-6 py-2 rounded-full text-lg "> Register </Link>
                <Link to="/login" className="text-blue-600 bg-white px-6 py-2 rounded-full text-lg "> Login </Link>
              </div>
            )}
          </div>
        </div>
        <div className={`fixed top-0 left-0 w-64 h-screen bg-gray-800 p-4 flex flex-col justify-start items-start ${isNavOpen ? 'block' : 'hidden'}`}>
  <button className="self-end" onClick={handleNavToggle}>
    {/* Close button */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
  <ul className="mt-4">
    <li className="mb-4">
      <Link to="/" className="text-white hover:text-gray-200">Home</Link>
    </li>
    <li className="mb-4">
      <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
    </li>
    {user ? (
      <>
        <li className="mb-4">
          <Link to="/logout" className="text-white hover:text-gray-200" onClick={handleLogout}>Logout</Link>
        </li>
      </>
    ) : (
      <>
        <li className="mb-4">
          <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
        </li>
        <li className="mb-4">
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
        </li>
      </>
    )}
  </ul>
</div>
      </div>
    </header>
  );
};

export default Header;

