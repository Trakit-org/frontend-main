import { FaUser } from "react-icons/fa";

const Register = () => {
    return (
        <>
              <div className="text-center pt-16 pb-10">
                    <div className="flex text-blue-600 justify-center items-center space-x-2 font-bold text-4xl mb-2">
                        <FaUser />
                        <span>Register</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-800">Please create an account</p>
                </div>
                <div className="md:w-7/12 mx-auto md:px-16 px-8 ">
                    <form>
                        <div className=" mb-2">
                            <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter fullname" /> 
                        </div>
                        <div className=" mb-2">
                            <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter email" /> 
                        </div>
                        
                        <div className="mb-2">
                            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Create password" />
                        </div>
                        <div className="mb-2">
                            <input type="password" id="confirm password" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Confirm password" />
                        </div>
        
                        <button type="submit" className="w-full mb-5 rounded-md bg-blue-600 text-white p-2"> 
                            Submit
                        </button>
                    </form>
                </div>
        </>
    )
}
export default Register;