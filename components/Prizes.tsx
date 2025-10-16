import React, { useState } from 'react';
import PrizeCard from './PrizeCard';
import SharePopup from './SharePopup';

const prizeData = [
  {
    imgSrc: "https://i.postimg.cc/PxQLQgZZ/download.png",
    imgAlt: "Telegram Chat",
    title: "Chat on Telegram",
    description: "VIP access to Steve Harvey on Telegram — only for selected winners!",
    buttonText: "Chat on Telegram",
    buttonLink: "https://t.me/cryptominingao",
    isCentered: true,
  },
  {
    imgSrc: "https://i.postimg.cc/Qd5M3Wc7/download-1.png",
    imgAlt: "Signed T-shirt",
    title: "Share to Win T-Shirts",
    description: "Share with friends for more entries and a higher chance to win signed T-shirts.",
    isCentered: true,
  },
  {
    imgSrc: "https://i.postimg.cc/J0k2WKT2/download-2.png",
    imgAlt: "$10,000 Cash Prize",
    title: "$10,000 Grand Prize",
    description: "The grand prize winner will receive a whopping $10,000 in cash.",
    buttonText: "Enter Now",
    buttonLink: "#register",
    isCentered: true,
  },
];

const Prizes: React.FC = () => {
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  return (
    <section className="bg-gray-900 py-12 px-5 text-center" id="prizes">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 drop-shadow-lg">
          Exclusive Rewards
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {prizeData.map((prize, index) => (
            <PrizeCard
              key={index}
              imgSrc={prize.imgSrc}
              imgAlt={prize.imgAlt}
              title={prize.title}
              description={prize.description}
              buttonText={prize.buttonText}
              buttonLink={prize.buttonLink}
              isCentered={prize.isCentered}
              onClick={!prize.buttonLink ? () => setIsSharePopupOpen(true) : undefined}
            />
          ))}
        </div>
      </div>
      <SharePopup show={isSharePopupOpen} onClose={() => setIsSharePopupOpen(false)} />
    </section>
  );
};

export default Prizes;