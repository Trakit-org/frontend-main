import Header from '../components/Header';
import Testimonial from '../components/Testimonial'
import Features from '../components/Features'
import Footer from '../components/Footer';
import Contact from '../components/contact'
import Team from '../components/Team';
const Home = () => {
    return (
        <div>
            <Header/>
            <div className='home-hero flex items-center h-[70vh]'>
                <div className='md:px-20 px-6 space-y-5 md:w-3/5'> 
                    <h1 className='text-3xl md:text-4xl font-bold'>Managing Subscriptions Made Easy</h1>
                    <p className='text-lg text-gray-600'>Trakit is a subscription analytics tool that leverages built-in charts to provide actionable insights for informed decision making. With Trackit, businesses can easily track and analyze their subscription data to optimize their revenue streams.                    </p>
                    <button className='px-5 py-2 bg-blueish-100 text-white rounded-md'>Get Started</button>
                </div>
            </div>
            <div>
                <Features/>
            </div>
            <div>
                <Testimonial/>
            </div>
            <div>
                <Team />
            </div>
            <div>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;