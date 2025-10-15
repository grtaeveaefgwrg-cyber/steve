import React, { useState } from 'react';

const SpinWheel: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);
    
    const handleSpin = () => {
        if (isSpinning || result) return;
        
        setIsSpinning(true);
        setTimeout(() => {
            setResult("Unlocked – You Won a Reward!");
            setIsSpinning(false);
        }, 2500); // Simulate a 2.5 second spin
    };

    return (
        <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-lg">
            {!result ? (
                <>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">You're In!</h3>
                    <p className="text-gray-200 mb-6">Spin the wheel for a bonus reward!</p>
                    <div className="relative w-48 h-48 mb-6">
                        <div className={`w-full h-full rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 transition-transform duration-[2500ms] ease-out ${isSpinning ? 'rotate-[1080deg] scale-105' : ''}`}>
                            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-lg">
                                SPIN
                            </div>
                        </div>
                         <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-white"></div>
                    </div>
                    <button
                        onClick={handleSpin}
                        disabled={isSpinning}
                        className="w-full bg-yellow-400 text-black py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:scale-105 transform disabled:bg-gray-500 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                        {isSpinning ? 'Spinning...' : 'Spin to Win!'}
                    </button>
                </>
            ) : (
                <div className="animate-fade-in">
                    <h3 className="text-3xl font-bold text-green-400">{result}</h3>
                    <p className="text-gray-300 mt-2">Your chances have just increased. Good luck!</p>
                </div>
            )}
             <style>{`
                @keyframes fade-in {
                  from { opacity: 0; transform: scale(0.8); }
                  to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
              `}</style>
        </div>
    );
};

export default SpinWheel;
