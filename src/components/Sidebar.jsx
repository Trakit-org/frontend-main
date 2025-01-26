import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import { FaCog, FaCalendarAlt, FaPlus, FaTachometerAlt } from 'react-icons/fa';



const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full md:w-60 w-[380px] sidebar">
        <div className=' bg-gray-900 w-full md:py-6 py-8'>
            <img className='md:w-28  md:h-fit w-20 md:ml-5 ml-2' src={Logo} alt="" />
        </div>
        <ul className='md:flex flex flex-col items-center md:items-start mt-8 font-semibold md:gap-4 gap-y-6'>
            <Link to='/dashboard' className="md:flex px-4 py-2 ">
                <li className="">
                    <FaTachometerAlt size={24} className="inline mr-2" />
                </li>
                <div className='md:flex hidden'>
                    Dashboard
                </div>
            </Link>
            <Link to='/manage-subscriptions' className="md:flex px-4 py-2  ">
                <li className=" ">
                    <FaCog size={24} className="inline mr-2" />
                </li>
                <div className='md:flex hidden'>
                    subscription
                </div>
            </Link>
            <Link to='/renewals' className="md:flex px-4 py-2  ">
                <li className=" ">
                    <FaCalendarAlt size={24} className="inline mr-2" />
                </li>
                <div className='md:flex hidden'>
                    Renewals
                </div>
            </Link>
            <Link to='/add-subscription' className="md:flex px-4 py-2  ">
                <li className=" ">
                    <FaCalendarAlt size={24} className="inline mr-2" />
                </li>
                <div className='md:flex hidden'>
                    Add Subscription
                </div>
            </Link>
            {/* <li className=" border-2 px-4 py-2">
                <FaCalendarAlt size={24} className="inline mr-2 " />
                <Link to="/renewals" className="hover:text-gray-400 md:block hidden">Renewals</Link>
            </li> */}
            {/* <li className='border-2 px-4 py-2'>
                <FaPlus size={24} className="inline mr-2" />
                <Link to="/add-subscription" className="hover:text-gray-400 md:block hidden">Add subscription</Link>
            </li> */}
        </ul>
    </div>
  );
};

export default Sidebar;
