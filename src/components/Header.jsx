import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import Logo from '../assets/Logo.png'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center px-6 md:px-12 py-7 md:py-5 bg-blueish-50'>
                <div className='flex md:w-32 w-28'>
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <ul className='hidden md:flex space-x-8 text-white items-center text-lg font-semibold '>
                    <div className='flex space-x-10'>
                        <Link to="/"><li>Features</li></Link>
                        <Link to="/">
                            <li>
                                How It Works
                            </li>
                        </Link>
                        <Link to="/about"><li>About Us</li></Link>
                    </div>
                    <div className='flex space-x-5 px-8 py-4 border-s-[1.5px]'>
                        <Link to="/login">
                            <li>
                                <FaSignInAlt /> Login
                            </li>
                        </Link>
                        <Link to="/register">
                            <li>
                                <FaUser /> Register
                            </li>
                        </Link>
                    </div>
                </ul>
                <div className='md:hidden flex text-2xl'>
                    <button className='text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;