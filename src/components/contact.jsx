import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="container md:w-2/3 mx-auto p-4 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-start">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8 text-center md:text-start">
          Have a question or need help with something? Our team is here to assist you.
        </p>
        <form>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-4 md:mb-0">
              <input className="appearance-none block w-full text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white" id="grid-full-name" type="text" placeholder="Fullname" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-4 md:mb-0">
              <input className="appearance-none block w-full text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white" id="grid-email" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-4 md:mb-0">
              <textarea rows='10' className="appearance-none block w-full text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white" id="grid-message" placeholder="Write your message here..." />
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
