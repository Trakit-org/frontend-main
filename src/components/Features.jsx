import { FaPencilAlt, FaBell, FaCalendar, FaWallet } from 'react-icons/fa';

const Features = () => {
  return (
    <div className=" mx-auto md:p-20 p-10 mb-20 mt-8">
      <h2 className="text-3xl font-bold mb-8 md:text-center">Features Our Users Love</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 xl:w-1/3 p-6 shadow-md">
        <div className=" flex w-20 h-20 p-2 shadow-lg rounded-full justify-center items-center mb-4">
            <FaPencilAlt className="w-full text-4xl text-blue-500" />
        </div>
          <h3 className="text-xl font-semibold mb-2">Manual Subscription Management</h3>
          <p className="text-lg text-gray-600">Input details such as service name, cost, renewal date, and notes.</p>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-6 shadow-md">
            <div className=" flex w-20 h-20 p-2 shadow-lg rounded-full justify-center items-center mb-4">
                <FaCalendar className="w-full text-4xl text-blue-500" />
            </div>

          <h3 className="text-xl font-semibold mb-2">Renewal Tracking</h3>
          <p className="text-lg text-gray-600">Keep track of your subscription renewal dates and stay organized.</p>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-6 shadow-md">
            <div className=" flex w-20 h-20 p-2 shadow-lg rounded-full justify-center items-center mb-4">
                <FaBell className="w-full text-4xl text-blue-500" />
            </div>
          <h3 className="text-xl font-semibold mb-2">Reminders</h3>
          <p className="text-lg text-gray-600">Automated email or in-app notifications for upcoming renewals.</p>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-6 shadow-md">
  <div className="flex w-20 h-20 p-2 shadow-lg rounded-full justify-center items-center mb-4">
    <FaWallet className="w-full text-4xl text-blue-500" />
  </div>
  <h3 className="text-xl font-semibold mb-2">Expense Tracking</h3>
  <p className="text-lg text-gray-600">Easily track your expenses on subscriptions and stay on top of your finances.</p>
</div>
      </div>
    </div>
  );
};

export default Features