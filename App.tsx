import React, { useState } from 'react';
import Header from './components/Header';
import SocialProof from './components/SocialProof';
import Prizes from './components/Prizes';
import Countdown from './components/Countdown';
import WhyWeDoThis from './components/WhyWeDoThis';
import Testimonials from './components/Testimonials';
import Register from './components/Register';
import Share from './components/Share';
import Leaderboard from './components/Leaderboard';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Popup from './components/Popup';
import LockerModal from './components/LockerModal';
import { getCookie, setCookie } from './utils/cookies';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const [isLockerModalOpen, setIsLockerModalOpen] = useState(false);
  const [isGiveawayUnlocked, setIsGiveawayUnlocked] = useState(() => !!getCookie('challenges_locker_done'));

  const handleOpenLocker = () => {
    if (!isGiveawayUnlocked) {
      setIsLockerModalOpen(true);
    }
  };

  const handleLockerComplete = () => {
    if (!isGiveawayUnlocked) {
      setCookie('challenges_locker_done', '1', 1);
      setIsGiveawayUnlocked(true);
      setIsLockerModalOpen(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white text-center">
      <Header />
      <SocialProof />
      <main>
        <Prizes />
        <Countdown />
        <WhyWeDoThis />
        <Testimonials />
        <Register isUnlocked={isGiveawayUnlocked} onLockClick={handleOpenLocker} />
        <Share />
        <Leaderboard />
        <FAQ />
      </main>
      <Footer />
      <Popup 
        show={showPopup} 
        onClose={() => setShowPopup(false)}
        onRegisterClick={() => {
            setShowPopup(false);
            handleOpenLocker();
        }}
      />
      <LockerModal
        show={isLockerModalOpen}
        onClose={() => setIsLockerModalOpen(false)}
        onComplete={handleLockerComplete}
      />
    </div>
  );
};

export default App;