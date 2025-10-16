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
    <section className="py-12 px-5 bg-[#111]" id="register">
      <div className="container mx-auto max-w-md">
        {!isUnlocked ? (
          <div 
            className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 rounded-2xl text-center border border-yellow-400/30 relative"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.6), 0 0 25px rgba(250, 204, 21, 0.15)',
            }}
          >
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400"
              style={{
                textShadow: '0 0 12px rgba(253, 224, 71, 0.5), 0 0 25px rgba(253, 224, 71, 0.3)',
              }}
            >
              Register Now to Win!
            </h2>
            <p className="text-gray-400 mb-8 text-base leading-relaxed">Complete a quick step to unlock the entry form and secure your spot.</p>
            <button
              onClick={onLockClick}
              className="w-full bg-gradient-to-b from-yellow-400 to-yellow-500 text-black py-3 px-8 rounded-full font-bold text-lg tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.7)] active:scale-100"
              style={{
                 boxShadow: '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.4)',
              }}
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
