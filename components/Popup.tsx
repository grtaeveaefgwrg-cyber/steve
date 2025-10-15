import React from 'react';

interface PopupProps {
  show: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

const Sparkle: React.FC<{className: string; style?: React.CSSProperties}> = ({ className, style }) => (
    <div className={`absolute bg-yellow-300 rounded-full ${className}`} style={style}></div>
);

const Popup: React.FC<PopupProps> = ({ show, onClose, onRegisterClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 backdrop-blur-sm"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(10, 25, 47, 0.4) 0%, rgba(0, 30, 60, 0.8) 100%)'
      }}
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-yellow-400/30 rounded-2xl p-6 max-w-[290px] w-11/12 text-center transform transition-all duration-300 scale-95 animate-scale-in"
        style={{
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(250, 204, 21, 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sparkles & Confetti */}
        <Sparkle className="top-[10%] left-[5%] w-1.5 h-1.5 animate-sparkle" style={{ animationDelay: '0s' }} />
        <Sparkle className="top-[20%] right-[8%] w-2 h-2 animate-drift" style={{ animationDelay: '0.2s' }} />
        <Sparkle className="top-[80%] left-[15%] w-2 h-2.5 animate-sparkle" style={{ animationDelay: '0.4s' }} />
        <Sparkle className="bottom-[10%] right-[12%] w-1.5 h-1.5 animate-drift" style={{ animationDelay: '0.6s' }} />
        <Sparkle className="top-[5%] right-[30%] w-1 h-1 animate-sparkle" style={{ animationDelay: '0.8s' }} />
        <Sparkle className="bottom-[20%] left-[25%] w-1.5 h-1.5 animate-drift" style={{ animationDelay: '1s' }} />
        <Sparkle className="top-[50%] left-[10%] w-1 h-1 animate-sparkle" style={{ animationDelay: '1.2s' }} />
        <Sparkle className="bottom-[30%] right-[5%] w-2 h-2 animate-sparkle" style={{ animationDelay: '1.4s' }} />


        <h2 className="text-2xl font-bold text-yellow-300 mb-3" style={{ textShadow: '0 0 5px rgba(250, 204, 21, 0.8), 0 0 15px rgba(250, 204, 21, 0.6), 0 0 25px rgba(250, 204, 21, 0.4)' }}>
          Register Now to Win!
        </h2>
        <p className="text-gray-200 text-sm mb-5">
          Don't miss out on your chance to win. The clock is ticking! Register now to claim your spot.
        </p>
        <button 
          onClick={onRegisterClick}
          className="text-black py-2.5 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform inline-block mb-4"
           style={{
            background: 'linear-gradient(180deg, #FDE047 0%, #FACC15 100%)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3), 0 0 15px rgba(250, 204, 21, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)',
           }}
        >
          Register Now
        </button>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white transition-colors text-xs"
          aria-label="Close popup"
        >
          No, thanks
        </button>
      </div>
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }

        @keyframes sparkle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
          100% { transform: scale(0) rotate(360deg); opacity: 0.5; }
        }
        .animate-sparkle {
          animation: sparkle 2.5s ease-in-out infinite;
        }

        @keyframes drift {
          0% { transform: translateY(0px) scale(1); opacity: 0.7; }
          100% { transform: translateY(-40px) scale(0); opacity: 0; }
        }
        .animate-drift {
          animation: drift 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Popup;