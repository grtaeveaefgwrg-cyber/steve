import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

declare global {
  interface Window {
    _Cd?: () => void;
  }
}

interface LockerModalProps {
  show: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const LockerModal: React.FC<LockerModalProps> = ({ show, onClose, onComplete }) => {
  const [showFallback, setShowFallback] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!show) {
      return;
    }

    document.body.style.overflow = 'hidden';
    setShowFallback(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleFocus = () => {
      // Small delay to ensure any locker-related scripts have finished.
      setTimeout(() => {
        onComplete();
      }, 200);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('focus', handleFocus);

    if (typeof window._Cd === 'function') {
      window._Cd();
    } else {
      console.error("Content locker function _Cd() not found.");
    }

    timeoutRef.current = window.setTimeout(() => {
        setShowFallback(true);
    }, 8000);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('focus', handleFocus);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [show, onClose, onComplete]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      style={{ backdropFilter: 'blur(6px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#1a1a1a] rounded-2xl p-5 text-center shadow-lg w-[90vw] max-w-[200px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-yellow-400 mb-3">Complete a Quick Step</h3>
        <p className="text-gray-300 text-sm mb-5">Please complete the verification to continue to the challenges.</p>
        <div className="flex-grow flex items-center justify-center">
        {showFallback ? (
            <div className="text-center text-red-400">
                <p className="text-sm">Locker not loading?</p>
                <button onClick={onClose} className="mt-3 bg-yellow-400 text-black py-2 px-4 rounded-full font-semibold text-sm">
                    Retry
                </button>
            </div>
        ) : (
            <div className="text-center">
                <svg className="animate-spin h-8 w-8 text-yellow-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-3 text-gray-400 text-sm">Loading verification...</p>
            </div>
        )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LockerModal;