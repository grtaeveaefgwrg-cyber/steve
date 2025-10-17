import React from 'react';

const WhyWeDoThis: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center">
          <img
            src="https://i.postimg.cc/KcPw5Xqb/images.jpg"
            alt="Steve Harvey"
            className="mx-auto mb-8 w-44 h-44 rounded-full object-cover border-4 border-yellow-400/30 shadow-2xl shadow-black/60"
          />
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">A Message From Steve</h2>
          <blockquote className="text-lg text-gray-200 italic border-l-4 border-yellow-400 pl-6 text-left inline-block">
            <p>“I've been blessed beyond my wildest dreams, and it’s all because of you, my fans. These challenges are more than just prizes; it's my way of saying thank you for all the love and support you've shown me throughout the years. Let's spread some joy together!”</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDoThis;