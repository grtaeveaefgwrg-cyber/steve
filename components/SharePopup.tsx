import React, { useEffect } from 'react';

interface SharePopupProps {
  show: boolean;
  onClose: () => void;
}

const SharePopup: React.FC<SharePopupProps> = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }
  
  const handleFollowClick = () => {
    // Using Steve Harvey's actual verified Instagram
    const instagramUrl = 'https://instagram.com/iamsteveharveytv'; 
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 bg-black/65 flex items-center justify-center z-50 p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popupTitle"
    >
      <div
        className="bg-[#2a2a2a] rounded-xl p-5 w-full max-w-[380px] text-center shadow-2xl shadow-black/50 animate-popup-in"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="popupTitle" className="text-lg font-bold text-yellow-400 mb-[10px]">🎁 Win More Chances!</h2>
        <p className="text-gray-300 text-sm leading-snug mb-[18px]">
          Share this website with your friends to increase your chances of winning the T-shirts!<br/><br/>And follow me on Instagram 💥
        </p>
        <div className="flex gap-[10px] justify-center flex-wrap">
          <button className="bg-yellow-400 text-black py-[9px] px-3.5 rounded-[9px] font-bold cursor-pointer" onClick={onClose}>
            OK
          </button>
          <button 
            className="bg-transparent text-yellow-400 border border-yellow-400/20 py-[9px] px-3.5 rounded-[9px] font-bold cursor-pointer"
            onClick={handleFollowClick}
          >
            Follow on Instagram
          </button>
        </div>
      </div>
      <style>{`
        @keyframes popupIn {
          from { transform: translateY(8px) scale(.98); opacity:0; }
          to { transform: translateY(0) scale(1); opacity:1; }
        }
        .animate-popup-in { animation: popupIn .28s cubic-bezier(.2,.9,.2,1); }
      `}</style>
    </div>
  );
};

export default SharePopup;