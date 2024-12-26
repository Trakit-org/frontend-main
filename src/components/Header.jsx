import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import Logo from '../assets/Logo.png'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center px-12 py-5 bg-blueish-50'>
                <div className='flex w-32'>
                    <img src={Logo} alt="" />
                </div>
                <ul className='flex space-x-8 text-white items-center text-lg font-semibold'>
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
            </div>
        </header>
    );
}

export default Header;