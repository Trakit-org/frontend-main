import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Renewal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [renewalsPerPage] = useState(5);
  const { subscriptions } = useContext(AuthContext);
  const [filteredRenewals, setFilteredRenewals] = useState(subscriptions); // Initialize with all subscriptions

  const currentDate = new Date();
  // Filtered renewals based on due date
  const renewalsDueSoon = useMemo(() => {
    const currentDate = new Date();
    const oneWeekAway = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    return subscriptions.filter((subscription) => {
      const renewalDate = new Date(subscription.renewal_date);
      console.log(renewalDate, oneWeekAway, subscription.name)
      return renewalDate < oneWeekAway;
    });
  }, [subscriptions]);
  
  
  const handleFilter = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setCurrentPage(1); // Reset to first page on new filter
    setFilteredRenewals(renewalsDueSoon.filter((renewal) => {
      return (
        renewal.subscriptionName.toLowerCase().includes(filterValue) ||
        renewal.renewalDate.includes(filterValue) ||
        renewal.status.toLowerCase().includes(filterValue)
      );
    }));
  };

  const indexOfLastRenewal = currentPage * renewalsPerPage;
  const indexOfFirstRenewal = indexOfLastRenewal - renewalsPerPage;
  const currentRenewals = renewalsDueSoon.slice(indexOfFirstRenewal, indexOfLastRenewal);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="container mx-auto p-4 my-12">
          <h1 className="text-3xl font-bold mb-4">Manage Renewals</h1>
          <div className="flex justify-between mb-4">
            <input
              type="search"
              placeholder="Filter renewals"
              className="w-full md:w-1/2 xl:w-1/3 p-2 outline-none  rounded"
              onChange={handleFilter}
            />
          </div>
          <div className="flex flex-wrap -mx-4">
            {currentRenewals.length === 0 ? (
              <h2 className="text-center font-semibold text-2xl w-full mt-16 pt-4 pb-28 ">
                No renewal of subscriptions due soon
              </h2>
            ) : (
              currentRenewals.map((renewal) => (
                <div key={renewal.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold mb-2">{renewal.name}</h2>
                    <p className="text-gray-600">Renewal Date: {renewal.renewal_date}</p>
                    <p className="text-gray-600">Amount: {renewal.price}</p>
                    <p className="text-gray-600">Status: {currentDate < new Date(renewal.renewal_date) ? "Active": "Not Active" }</p>

                    {/* <p className="text-gray-600">Status: {renewal.status}</p> */}
                    <div className=' mt-2'>

                         <Link to={`/update-subscription/${renewal.id}`} className='mt-2'>
                                        <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                        Edit
                                        </button>
                                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {!(filteredRenewals.length < renewalsPerPage || currentRenewals.length < renewalsPerPage) && (
            <div className="flex justify-end my-4">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Renewal;
