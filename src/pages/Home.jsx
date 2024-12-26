import Header from '../components/Header';
const Home = () => {
    return (
        <div>
            <Header/>
            <div className='home-hero flex items-center h-[70vh]'>
                <div className='md:px-20 px-2 mx-4 space-y-5 md:w-3/5 w-4/5'> 
                    <h1 className='text-3xl md:text-4xl font-semibold'>Managing Subscriptions Made Easy</h1>
                    <p className='md:text-lg'>Trackit is a subscription analytics tool that leverages built-in charts to provide actionable insights for informed decision making. With Trackit, businesses can easily track and analyze their subscription data to optimize their revenue streams.                    </p>
                    <button className='px-5 py-2 bg-blueish-100 text-white rounded-md'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Home;