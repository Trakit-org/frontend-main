import React from 'react';
import { FaRegCalendar, FaMoneyBillAlt, FaChartLine } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className="flex h-screen md:mt-8">
            <div className="w-full p-10 md:px-20">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 xl:w-1/3 p-4 py-5 md:py-4">
                    <div className="bg-white rounded-lg shadow-md p-5 flex items-start">
                    <FaChartLine size={24} className="text-gray-600 mr-4" />
                    <div className=''>
                        <h2 className="text-lg font-bold mb-2">Subscriptions Overview</h2>
                        <p className="text-gray-600">You have 10 active subscriptions</p>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-4 py-5 md:py-4">
                    <div className="bg-white rounded-lg shadow-md p-5 flex items-start">
                    <FaMoneyBillAlt size={24} className="text-gray-600 mr-4" />
                    <div>
                        <h2 className="text-lg font-bold mb-2">Money Spent</h2>
                        <p className="text-gray-600">$1000 this month</p>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-4 py-5 md:py-4">
                    <div className="bg-white rounded-lg shadow-md p-5 flex items-start">
                    <FaRegCalendar size={24} className="text-gray-600 mr-4" />
                    <div>
                        <h2 className="text-lg font-bold mb-2">Upcoming Renewals</h2>
                        <p className="text-gray-600">5 subscriptions renewing this week</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col fixed md:absolute right-10 bottom-24 md:-bottom-10 p-4 md:p-0">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded mb-4">Manage Subscriptions</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded mb-4">Add Subscription</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded">Delete Subscription</button>
            </div>
        </div>
        <div className=''>
            <Footer/>
        </div>
    </div>
  );
};

export default Dashboard;
