import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { FaUser } from "react-icons/fa";

const Register = () => {
    const { register, setIsAuthenticated } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (event.target.password.value !== event.target.confirmPassword.value) {
            setError('Passwords do not match');
            event.target.password.value = '';
            event.target.confirmPassword.value = '';
        }
        else{
            const credentials = {
                fullname: event.target.fullname.value,
                email: event.target.email.value,
                password: event.target.password.value
            };
            const result = await register(credentials);
            if (result.success) {
                setError(null);
                setIsAuthenticated(true);
                navigate('/dashboard');
            }else{
                setError(result.error);
            }
        }
    };
  
    return (
        <>
              <div className="text-center pt-16 pb-10">
                    <div className="flex text-blue-600 justify-center items-center space-x-2 font-bold text-4xl mb-2">
                        <FaUser />
                        <span>Register</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-800">Please create an account</p>
                </div>
                <div className="text-center my-4">
                    {error && <div className="text-red-600 text-center">{error}</div>}
                </div>
                <div className="md:w-7/12 mx-auto md:px-16 px-8 ">
                    <form onSubmit={handleSubmit}>
                        <div className=" mb-2">
                            <input type="text" id="fullname" name='fullname' className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter fullname" /> 
                        </div>
                        <div className=" mb-2">
                            <input type="email" id="email" name='email' className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter email" /> 
                        </div>
                        
                        <div className="mb-2">
                            <input type="password" id="password" name='password' className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Create password" />
                        </div>
                        <div className="mb-2">
                            <input type="password" id="confirm password" name='confirmPassword' className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Confirm password" />
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