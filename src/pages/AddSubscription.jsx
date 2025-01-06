import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddSubscription = () => {
  return (
    <div>
        <Header />
        <div className="flex flex-col md:flex-row justify-center md:items-start md:p-20 p-10">
        <div className="md:w-1/2 mt-4 md:mt-0  md:text-start">
            <h1 className="text-3xl font-bold mb-4">Add Subscription Details</h1>
            <p className="text-lg text-gray-600">
                Please enter your subscription details below.This will help us track your subscriptions and provide 
                personalized recommendations.
            </p>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 mb-8">
            <form>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="subscription-name">Subscription Name: <span className='ml-2 text-red-600'> *</span></label>
                <input className="block w-full p-2 border border-gray-300 rounded-lg" type="text" id="subscription-name" name="subscription-name" placeholder='eg. Netflix, Sportify etc' required/>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="billing">Billing Cycle: <span className='ml-2 text-red-600'> *</span></label>
                <select className='block w-full p-2 border border-gray-300 rounded-lg' name="" id="" required>
                    <option value="monthly">---------</option>
                    <option value="monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
                <p className=' text-slate-500 text-sm mt-1'>Set to monthly by default</p>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="">Subscription Cost: <span className='ml-2 text-red-600'> *</span></label>
                <input className="block w-full p-2 border border-gray-300 rounded-lg" type='number' step='any' min='0' id="subscription-date" name="subscription-date" placeholder='0.00' required/>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="subscription-date">Next Billing Date: <span className='ml-2 text-red-600'> *</span></label>
                <input className="block w-full p-2 border border-gray-300 rounded-lg" type="date" id="subscription-date" name="subscription-date" required/>
            </div>
            <button className="bg-greenish hover:bg-teal-600 text-white font-bold py-3 px-6 rounded mt-4" type="submit">Add Subscription</button>
            </form>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default AddSubscription;


