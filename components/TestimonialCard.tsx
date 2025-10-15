
import React from 'react';

interface TestimonialCardProps {
  imgSrc: string;
  name: string;
  location: string;
  comment: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imgSrc, name, location, comment }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full max-w-sm sm:w-80 flex flex-col items-center text-center shadow-lg shadow-black/50 transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/20">
      <img src={imgSrc} alt={name} className="w-24 h-24 rounded-full object-cover border-4 border-gray-700 mb-4" />
      <p className="text-gray-300 italic">"{comment}"</p>
      <div className="mt-4">
        <h4 className="font-bold text-yellow-400 text-lg">{name}</h4>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
