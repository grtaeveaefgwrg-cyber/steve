import React, { useState } from 'react';
import SpinWheel from './SpinWheel';

interface RegisterProps {
  isUnlocked: boolean;
  onLockClick: () => void;
}

const Register: React.FC<RegisterProps> = ({ isUnlocked, onLockClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-20 px-5 bg-[#111]" id="register">
      <div className="container mx-auto max-w-md">
        {!isUnlocked ? (
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400"
              style={{
                textShadow: '0 0 8px rgba(253, 224, 71, 0.6), 0 0 16px rgba(253, 224, 71, 0.4), 2px 2px 5px rgba(0,0,0,0.5)',
                animation: 'text-glow 2.5s ease-in-out infinite'
              }}
            >
              Register Now to Win!
            </h2>
            <style>{`
              @keyframes text-glow {
                0%, 100% {
                  text-shadow: 0 0 8px rgba(253, 224, 71, 0.6), 0 0 16px rgba(253, 224, 71, 0.4), 2px 2px 5px rgba(0,0,0,0.5);
                }
                50% {
                  text-shadow: 0 0 12px rgba(253, 224, 71, 0.8), 0 0 24px rgba(253, 224, 71, 0.6), 2px 2px 5px rgba(0,0,0,0.5);
                }
              }
            `}</style>
            <p className="text-gray-300 mb-6">Complete a quick step to unlock the entry form and secure your spot.</p>
            <button
              onClick={onLockClick}
              className="w-full bg-yellow-400 text-black py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:scale-105 transform"
            >
              Unlock Entry Form
            </button>
          </div>
        ) : !isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold text-yellow-400 mb-8">
              You're In! Complete Your Entry
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-lg border-2 border-transparent bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg border-2 border-transparent bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:scale-105 transform"
              >
                Submit Entry
              </button>
            </form>
          </>
        ) : (
          <SpinWheel />
        )}
      </div>
    </section>
  );
};

export default Register;