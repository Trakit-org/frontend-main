import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const { login, setIsAuthenticated, accessToken } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    console.log("acess: ", accessToken)

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(e.target.email)
        const credentials = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const result = await login(credentials);
        console.log(result, "results")
        if (result.success) {
            setError(null);
            setIsAuthenticated(true);
            console.log("acess: ", accessToken)
            navigate('/dashboard');
        }else{
            setError(result.error == 'Failed to fetch' ? 'Try again': result.error);
            console.log("login: ",result)
        }
    }

    return (
     <>
        <div className="text-center pt-16 pb-8">
            <div className="flex text-blue-600 justify-center items-center space-x-2 font-bold text-4xl mb-2">
                <FaSignInAlt />
                <span>Login</span>
            </div>
            <p className="text-xl font-semibold text-gray-800">Login to your account</p>
        </div>
        <div className="">
            {error && <div className="mt-2 text-red-600 text-center">{error}</div>}
        </div>
        <div className="md:w-7/12 mx-auto px-16 py-6">
            <form onSubmit={handleSubmit}>
                <div className=" mb-2">
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md mb-2 outline-none" placeholder="Enter email" /> 
                </div>
                
                <div className="mb-2">
                    <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md mb-2 outline-none" placeholder="Enter password" />
                </div>

                <button type="submit" className="w-full mb-5 rounded-md bg-blue-600 text-white p-2"> 
                    Login
                </button>        
                <p className=" text-gray-800">Don't have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
            </form>
        </div>
     </>
    );
}

export default Login;