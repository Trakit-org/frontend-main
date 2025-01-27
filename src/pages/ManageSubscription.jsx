// ManageSubscriptionPage.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const subscriptionData = [
  {
    id: 1,
    name: 'Netflix Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-03-15',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Amazon Prime Subscription',
    billingCycle: 'Yearly',
    nextBillingDate: '2024-03-15',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Spotify Premium Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-04-15',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Hulu Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-05-15',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Apple Music Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-06-15',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Disney+ Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-07-15',
    status: 'Active',
  },
  {
    id: 7,
    name: 'HBO Max Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-08-15',
    status: 'Inactive',
  },
  {
    id: 8,
    name: 'Starz Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-09-15',
    status: 'Active',
  },
  {
    id: 9,
    name: 'Showtime Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-10-15',
    status: 'Active',
  },
  {
    id: 10,
    name: 'Paramount+ Subscription',
    billingCycle: 'Monthly',
    nextBillingDate: '2023-11-15',
    status: 'Inactive',
  },

];

const ManageSubscriptionPage = () => {
  // const [subscriptions, setSubscriptions] = useState(subscriptions);
  const { subscriptions, user, deleteSubscription } = useContext(AuthContext);

  const [filteredSubscriptions, setFilteredSubscriptions] = useState(subscriptions);
  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptionsPerPage, setSubscriptionsPerPage] = useState(5);

  const navigate = useNavigate()

  console.log(subscriptions)


  const handleFilter = (event) => {
    if (event && event.target && event.target.value) {
      const filterValue = event.target.value.toLowerCase();
      const filteredSubscriptions = subscriptions.filter((subscription) => {
        return (
          subscription.name.includes(filterValue) ||
          subscription.billing_cycle.includes(filterValue)
          // subscription.status.toLowerCase().includes(filterValue)
        );
      });
      setFilteredSubscriptions(filteredSubscriptions);
    }
  };
  
  const handleDelete = (event, id) => {
    event.preventDefault();
    deleteSubscription(id)
    !currentSubscriptions && 
    navigate('/dashboard')

  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastSubscription = currentPage * subscriptionsPerPage;
  const indexOfFirstSubscription = indexOfLastSubscription - subscriptionsPerPage;
  const currentSubscriptions = filteredSubscriptions.slice(indexOfFirstSubscription, indexOfLastSubscription);

  return (
    <div className="flex relative min-h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-grow flex flex-col">
          <Header/>
          <div className=" md:mx-auto p-4 md:p-5 md:px-12 md:mt-8 mt-2 mb-12  w-full">
          <h1 className="text-3xl font-bold mb-4">Manage Subscriptions</h1>
          <div className="flex justify-between mb-4">
              <input
              type="search"
              placeholder="Filter subscriptions"
              className="w-full md:w-1/2 xl:w-1/3 p-2 outline-none  rounded"
              onChange={handleFilter}
              />
          </div>
          <div className="flex flex-wrap -mx-4">
              {currentSubscriptions.length === 0 && filteredSubscriptions === 0 ? (
                  <h2 className="text-center font-semibold text-2xl w-full mt-16 pt-4 pb-28 ">No matching subscription</h2>
              ) : currentSubscriptions.map((subscription) => (
              <div key={(subscription.id)} className="w-full md:w-1/2 xl:w-1/3 p-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold mb-2">{subscription.name} Subscription</h2>
                  <p className="text-gray-600">Billing Cycle: {subscription.billing_cycle}</p>
                  <p className="text-gray-600">Next Billing Date: {subscription.renewal_date}</p>
                  {/* <p className="text-gray-600">Status:</p> */}
                  <div className="flex justify-end">
                    <Link to={`/update-subscription/${subscription.id}`}>
                      <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                      Edit
                      </button>
                    </Link>

                    <Link to=''>
                      <button onClick={(e) => handleDelete(e, subscription.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                      >
                      Cancel
                      </button>
                    </Link>
                  </div>
                  </div>
              </div>
              ))}

              

          </div>

          {
          !(subscriptions.length < 5 || currentSubscriptions.length < 5) && (    
          <div className="flex justify-end mt-4 ">
              <button
              className="bg-greenish text-white font-bold py-2 px-4 rounded"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              >
              Previous
              </button>
              <button
              className="bg-greenish text-white font-bold py-2 px-8 rounded ml-2"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= Math.ceil(filteredSubscriptions.length / subscriptionsPerPage)}
              >
              Next
              </button>
          </div>
          )
          }

          </div>
      </div>
    </div>
  );
};

export default ManageSubscriptionPage;

