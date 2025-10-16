
import React from 'react';

const WhyWeDoThis: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-gray-900">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <img 
            src="https://i.postimg.cc/FK2k5S3g/images.jpg" 
            alt="Steve Harvey" 
            className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover border-4 border-yellow-400 shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">A Message From Steve</h2>
          <blockquote className="text-lg text-gray-200 italic border-l-4 border-yellow-400 pl-6">
            <p>“I've been blessed beyond my wildest dreams, and it’s all because of you, my fans. These challenges are more than just prizes; it's my way of saying thank you for all the love and support you've shown me throughout the years. Let's spread some joy together!”</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDoThis;