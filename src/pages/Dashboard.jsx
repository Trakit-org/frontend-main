import React, { useState, useContext } from 'react';
import { FaRegCalendar, FaMoneyBillAlt, FaChartLine } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthContext } from '../AuthContext';
import Sidebar from '../components/Sidebar'; // Import the Sidebar

const Dashboard = () => {
  const { subscriptions, user } = useContext(AuthContext);

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-8 md:px-20">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-2 py-5 md:py-4">
              <div className="h-full text-white bg-blueish-100 rounded-lg shadow-md  py-5 px-6 flex items-start">
                <FaChartLine size={36} className=" mr-4" />
                <div className='mb-12'>
                    <p className="text-lg font-bold mb-2 ">Subscriptions Overview</p>
                    <p className="">You have total of {subscriptions ? subscriptions.length : 0 } active subscriptions</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 md:p-2 py-5 md:py-4">
              <div className="h-full text-white bg-greenish rounded-lg shadow-md  py-5 px-6 flex items-start">
                <FaMoneyBillAlt size={34} className=" mr-4" />
                <div className='mb-20'>
                  <p className="text-lg font-bold mb-2">Money Spent</p>
                  <p className="">$1000 this month</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 md:p-2 py-5 md:py-4">
              <div className="h-full bg-yellow-400 text-white rounded-lg shadow-md  py-5 px-6 flex items-start">
                <FaRegCalendar size={34} className=" mr-4" />
                <div className='mb-16'>
                <p className="text-lg font-bold mb-2">Upcoming Renewals</p>
                <p className="">5 subscriptions renewing this week</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
