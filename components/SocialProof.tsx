
import React, { useState, useEffect } from 'react';

const SocialProof: React.FC = () => {
  const [count, setCount] = useState(4589);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + Math.floor(Math.random() * 5) + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 bg-gray-900">
      <div className="container mx-auto text-center px-4">
        <p className="text-xl md:text-3xl font-semibold text-white animate-pulse">
          🎉 <span className="text-yellow-400 font-bold">{count.toLocaleString()}</span> people have already joined! 🎉
        </p>
      </div>
    </section>
  );
};

export default SocialProof;