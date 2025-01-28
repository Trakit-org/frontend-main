import { useContext, useState } from 'react';
import { useParams, useNavigate,redirect } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const UpdateSubscription = () => {
  const { updateSubscription, subscriptions, user, accessToken } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { id } = useParams()

  const navigate = useNavigate()

  const subscription = subscriptions.filter((subscription) => subscription.id == id)
  
  const [formData, setFormData] = useState({
    name: subscription[0].name,
    billing_cycle: subscription[0].billing_cycle,
    price: subscription[0].price,
    renewal_date: subscription[0].renewal_date,
    user_id: user ? user.id : '',
  });

  console.log(id, subscription, 'updated')

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(accessToken, 'tokennn')

    const isValid = validateFormData();
    if (isValid) {
      const results = await updateSubscription(id, formData);

      console.log(results, 'results')

      setFormData({
        name: '',
        billing_cycle: '',
        price: '',
        renewal_date: '',
      });

     if (results.success){ 
      console.log('success')
      navigate('/dashboard')
      redirect('/dashboard')
    }
    }
  };

  const validateFormData = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.billing_cycle) {
      errors.billing_cycle = 'Billing cycle is required';
    }
    if (!formData.price) {
      errors.price = 'Cost is required';
    }
    if (!formData.renewal_date) {
      errors.renewal_date = 'Next billing date is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'date') {
      setFormData({ ...formData, [name]: value });
    } else if (type === 'select-one') {
      setFormData({ ...formData, billing_cycle: value });
    } else if (name === 'cost') {
        setFormData({ ...formData, price: parseFloat(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  return (
    <div className="flex relative min-h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-grow flex flex-col">
            <Header />
            <div className="flex flex-col md:flex-row justify-center md:items-start md:p-20 p-4">
            <div className="md:w-1/2 mt-4 md:mt-0  md:text-start">
                <h1 className="text-3xl font-bold mb-4">Add Subscription Details</h1>
                <p className="text-lg text-gray-600">
                    Please enter your subscription details below.This will help us track your subscriptions and provide 
                    personalized recommendations.
                </p>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 mb-8">

                <form className='' onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
                    Subscription Name:
                    <span className="ml-2 text-red-600">*</span>
                    </label>
                    <input
                    className="block w-full p-2 border border-gray-300 rounded-lg"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="billingCycle">
                    Billing Cycle:
                    <span className="ml-2 text-red-600">*</span>
                    </label>
                    <select
                    className="block w-full p-2 border border-gray-300 rounded-lg"
                    name="billingCycle"
                    id="billingCycle"
                    value={formData.billing_cycle}
                    onChange={handleChange}
                    required
                    >
                    <option value="">---------</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    </select>
                    {errors.billingCycle && <p className="text-red-600">{errors.billingCycle}</p>}
                </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="cost">
                Subscription Cost:
                <span className="ml-2 text-red-600">*</span>
                </label>
                <input
                className="block w-full p-2 border border-gray-300 rounded-lg"
                type="number"
                id="cost"
                name="cost"
                value={formData.price}
                onChange={handleChange}
                required
                />
                {errors.cost && <p className="text-red-600">{errors.cost}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="nextBillingDate">
                Next Billing Date:
                <span className="ml-2 text-red-600">*</span>
                </label>
                <input
                className="block w-full p-2 border border-gray-300 rounded-lg"
                type="date"
                id="nextBillingDate"
                name="renewal_date"
                value={formData.renewal_date}
                onChange={handleChange}
                required
                />
                {errors.nextBillingDate && <p className="text-red-600">{errors.nextBillingDate}</p>}
            </div>
            <button
                className="bg-greenish hover:bg-teal-600 text-white font-bold py-3 px-6 rounded mt-4"
                type="submit"
            >
                Update Subscription
            </button>
                </form>
            </div>
            </div>
        </div>
    </div>


  );
};

export default UpdateSubscription;

