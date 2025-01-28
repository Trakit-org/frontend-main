import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
        text: "Say goodbye to surprise bills and hello to stress-free subscription management. Here's what our users love about Trakit.",
        author: 'John Doe',
    },
    {
      text: "Trakit has been a game-changer for me! I was tired of unexpected subscription charges and overdraft fees. Now, I can easily track and manage all my subscriptions in one place. Thanks to Trakit,",
      author: 'Jane Evans',
    },
    {
      text: "I was skeptical at first, but Trakit has genuinely simplified my life. The platform is intuitive, and the reminders are super helpful. I no longer worry about missing payments or forgetting to cancel unwanted subscriptions.",
      author: 'Bob Smith',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // cycle through every 5 seconds

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:p-20 px-12 py-16 items-center bg-green-300'>
        <div className='space-y-4'>
            <div className='text-4xl font-semibold text-white'>
                What People Say About Trakit
            </div>
            <div className=' text-white text-lg'>
                Say goodbye to surprise bills and hello to stress-free subscription management. Here's what our users love about Trakit.
            </div>
        </div>
        <div className="relative w-full md:w-96 h-96 mx-auto flex md:justify-center items-center">
        {testimonials.map((testimonial, index) => {
            const isCurrent = index === currentIndex;
            const isPrevious = index < currentIndex;
            const translateValue = (isPrevious ? index - currentIndex : currentIndex - index) * 20;

            return (
            <div
                key={index}
                className={`absolute md:w-4/5 h-4/5 p-5 ml-6 bg-white border-gray-300 rounded-lg shadow-xl transition-transform duration-500 ${
                isCurrent ? 'z-10 translate-x-0' : `z-${testimonials.length - index} translate-x-[${translateValue}px]`
                }`}
                style={{transform: `translateX(${translateValue}px)` }}
            >
                <p className="text-lg text-slate-600 mt-4">{testimonial.text}</p>
                <h3 className=" font-semibold mt-4">{testimonial.author}</h3>
            </div>
            );
        })}
        </div>
    </div>
  );
};

export default Testimonial;
