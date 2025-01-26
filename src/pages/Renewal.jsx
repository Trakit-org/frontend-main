import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const renewalData = [
  {
    id: 1,
    subscriptionName: 'Netflix Subscription',
    renewalDate: '2023-03-15',
    amount: '$9.99',
    status: 'Upcoming',
  },
  {
    id: 2,
    subscriptionName: 'Amazon Prime Subscription',
    renewalDate: '2024-03-15',
    amount: '$12.99',
    status: 'Upcoming',
  },
  {
    id: 3,
    subscriptionName: 'Amazon Prime Subscription',
    renewalDate: '2024-03-15',
    amount: '$12.99',
    status: 'Upcoming',
  },
  {
    id: 4,
    subscriptionName: 'Amazon Prime Subscription',
    renewalDate: '2024-03-15',
    amount: '$12.99',
    status: 'Upcoming',
  },
  {
    id: 5,
    subscriptionName: 'Amazon Prime Subscription',
    renewalDate: '2024-03-15',
    amount: '$12.99',
    status: 'Upcoming',
  },
  {
    id: 6,
    subscriptionName: 'Amazon Prime Subscription',
    renewalDate: '2024-03-15',
    amount: '$12.99',
    status: 'Upcoming',
  },
  {
    id: 7,
    subscriptionName: 'Amazon Prime Subscription',
    renewalDate: '2024-03-15',
    amount: '$12.99',
    status: 'Upcoming',
  },
  {
    id: 8,
    subscriptionName: 'Amazon Prime Subscription',
    renewalDate: '2024-03-15',
    amount: '$12.99',
    status: 'Upcoming',
  },
  // Add more renewal data here...
];

const Renewal = () => {
  const [renewals, setRenewals] = useState(renewalData);
  const [filteredRenewals, setFilteredRenewals] = useState(renewalData);
  const [currentPage, setCurrentPage] = useState(1);
  const [renewalsPerPage, setRenewalsPerPage] = useState(5);

  const handleFilter = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filteredRenewals = renewalData.filter((renewal) => {
      return (
        renewal.subscriptionName.toLowerCase().includes(filterValue) ||
        renewal.renewalDate.includes(filterValue) ||
        renewal.status.toLowerCase().includes(filterValue)
      );
    });
    setFilteredRenewals(filteredRenewals);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRenewal = currentPage * renewalsPerPage;
  const indexOfFirstRenewal = indexOfLastRenewal - renewalsPerPage;
  const currentRenewals = filteredRenewals.slice(indexOfFirstRenewal, indexOfLastRenewal);

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="container mx-auto p-4 my-12 ">
        <h1 className="text-3xl font-bold mb-4">Manage Renewals</h1>
        <div className="flex justify-between mb-4">
            <input
            type="search"
            placeholder="Filter renewals"
            className="w-full md:w-1/2 xl:w-1/3 p-2 outline-none border-2 rounded"
            onChange={handleFilter}
            />
        </div>
        <div className="flex flex-wrap -mx-4">
        {currentRenewals.length === 0 ? (
              <h2 className="text-center font-semibold text-2xl w-full mt-16 pt-4 pb-28 border-2">No matching subscription</h2>
              ) : currentRenewals.map((renewal) => (
            <div key={(renewal.id)} className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold mb-2">{renewal.subscriptionName}</h2>
                <p className="text-gray-600">Renewal Date: {renewal.renewalDate}</p>
                <p className="text-gray-600">Amount: {renewal.amount}</p>
                <p className="text-gray-600">Status: {renewal.status}</p>
                </div>
            </div>
            ))}
        </div>
        {
           !(renewalData.length < 5 || currentRenewals.length < 5) &&
            (<div className="flex justify-end my-4">
                <button
                className="bg-greenish hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                >
                Previous
                </button>
                <button
                className="bg-greenish hover:bg-teal-600 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= Math.ceil(filteredRenewals.length / renewalsPerPage)}
                >
                Next
                </button>
            </div>)
        }
        </div>
      </div>
    </div>
  );
};

export default Renewal;

