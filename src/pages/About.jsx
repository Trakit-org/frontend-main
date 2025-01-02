import Header from '../components/Header'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Contact from '../components/contact'
import Free from '../assets/Stress-free.jpg'

const About = () =>{
    return(
        <div>
            <Header />
            <div className=" flex justify-center items-center md:p-20 rounded-lg md:mb-8 hero-about">
                <h1 className=" text-3xl md:text-4xl font-semibold mb-2 md:w-2/3 text-center md:mr-16">Stay on top of your subscriptions effortlessly and take control of your spending</h1>
                {/* <p className="text-xl text-gray-600">T</p> */}
            </div>

            <div className='text-lg flex md:flex-row flex-col md:items-start md:p-20 p-10 gap-x-14'>
                <h2 className="text-3xl block md:hidden font-semibold mb-8 text-center">We Want Your Subscription Stree Free</h2>
                <img className='md:w-1/2 md:h-[76vh] h-72 mb-8' src={Free} alt=''/>
                <section className="mb-8">
                    <h2 className="text-3xl hidden md:block font-bold mb-8">We Want Your Subscription Stree-Free</h2>
                    <p className='text-center md:text-start text-gray-600'>
                    We aim to make your subscription experience hassle-free. 
                    That's the reason we developed this app—to assist you in managing 
                    your subscriptions with ease. We understand that keeping track of 
                    various services with differing renewal dates, costs, and payment methods can be daunting. 
                    Our app streamlines this process by offering an intuitive tool for monitoring your subscriptions and sending prompt 
                    reminders, ensuring you never miss a payment or unwanted renewal.
                    </p>
                </section>
            </div>

            <div className="mx-auto md:p-32 py-20 p-8 bg-greenish mt-16">
                <section className="mb-8 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-slate-200">Our Story</h2>
                    <p className="text-lg text-slate-200 leading-9">
                    We envision subscription management as a seamless experience, much like streaming 
                        your favorite shows. Our project, initiated during the ALX software engineering program, 
                        started as a simple tracker for a small community and has evolved into a robust application that simplifies 
                        subscription management for hundreds of thousands of users worldwide. 
                        Our app empowers users to easily monitor, manage, and optimize their subscriptions, 
                        ensuring they can take control of their spending without hassle.
                    </p>
                </section>
            </div>

            <div>
                <Team />
            </div>
            <div>
                <Contact />
            </div>
            <Footer/>
        </div>
    )
}

export default About