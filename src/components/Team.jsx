import React from "react";
import Front from '../assets/front.jpg'
import member1 from '../assets/member1.jpg'
import member2 from '../assets/member2.jpg'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


const Team = () => {
  return (
    <section className="key-employees bg-white py-16 md:pt-28 md:px-32 px-9">
      <h2 className="text-4xl text-center font-bold">
        Our <span className="span mb-2">Team</span>
      </h2>
      <div className="text-center mb-8 text-gray-600">
        Meet the Faces Behind Our Exceptional Services
      </div>
      <div className="employee-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 mt-8 mb-10">

        <div className="flex flex-col py-5 items-center bg-white rounded shadow-md">
          <div className="">
            <img
              src={Front}
              alt="Employee 3"
              className=" w-40 rounded-full"
            />
          </div>

          <div className=" ">
            <h3 className="text-lg font-semibold md:mt-4 mt-3 name ">Donkor James</h3>
            <p className="text-gray-600 mb-6">Full Stack Engineer</p>
          </div>
          <div className="flex space-x-1">
            <FaFacebook className=" w-12 h-8 text-greenish"/>
            <FaLinkedin className=" w-12 h-8 text-greenish"/>
            <FaTwitter className=" w-12 h-8 text-greenish"/>
          </div>
        </div>
        <div className="flex flex-col py-5 items-center bg-white rounded shadow-md">
          <div className="">
            <img
              src={member1}
              alt="Employee 3"
              className=" w-40 rounded-full"
            />
          </div>

          <div className=" ">
            <h3 className="text-lg font-semibold md:mt-4 mt-3 name ">Ikechukwu Ashimonye </h3>
            <p className="text-gray-600 mb-6">Backend Engineer</p>
          </div>
          <div className="flex space-x-1">
            <FaFacebook className=" w-12 h-8 text-greenish"/>
            <FaLinkedin className=" w-12 h-8 text-greenish"/>
            <FaTwitter className=" w-12 h-8 text-greenish"/>
          </div>
        </div>
        <div className="flex flex-col py-5 items-center bg-white rounded shadow-md">
          <div className="">
            <img
              src={member2}
              alt="Employee 3"
              className=" w-40 rounded-full"
            />
          </div>

          <div className=" ">
            <h3 className="text-lg font-semibold md:mt-4 mt-3 name ">Mustapha Mohammed</h3>
            <p className="text-gray-600 mb-6">Backend Engineer</p>
          </div>
          <div className="flex space-x-1">
            <FaFacebook className=" w-12 h-8 text-greenish"/>
            <FaLinkedin className=" w-12 h-8 text-greenish"/>
            <FaTwitter className=" w-12 h-8 text-greenish"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
