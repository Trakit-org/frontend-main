import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from 'react-router-dom';
import { FaFileInvoice, FaSignInAlt, FaUser, FaBell, FaUserCircle, FaCog } from 'react-icons/fa';
import Logo from '../assets/Logo.png'

const Header = () => {
  const { user } = useContext(AuthContext);

    return (
        <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <FaUserCircle size={30} />
            </button>
            <Link to="/logout" className="text-gray-600 hover:text-gray-900">
              Logout
            </Link>
          </div>
        </div>
      </header>
    );
}

export default Header;