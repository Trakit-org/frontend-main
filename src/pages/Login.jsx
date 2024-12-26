import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
    return (
     <>
        <div className="text-center pt-16 pb-8">
            <div className="flex text-blue-600 justify-center items-center space-x-2 font-bold text-4xl mb-2">
                <FaSignInAlt />
                <span>Login</span>
            </div>
            <p className="text-xl font-semibold text-gray-800">Login to your account</p>
        </div>
        <div className="md:w-7/12 mx-auto px-16 py-8">
            <form>
                <div className=" mb-2">
                    <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter email" /> 
                </div>
                
                <div className="mb-2">
                    <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter password" />
                </div>

                <button type="submit" className="w-full mb-5 rounded-md bg-blue-600 text-white p-2"> 
                    Login
                </button>
{/* 
                <button type="button" className="btn-reverse w-full mb-5 p-2 border border-black rounded-md bg-white text-black flex items-center justify-center">
                    <svg className="mr-2" ></svg>
                    Cancel
                </button> */}
            </form>
        </div>
     </>
    );
}

export default Login;