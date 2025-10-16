import React, { useState, useEffect } from 'react';

const backgroundImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJNc38KkkdV_oTCJSAF3lb0fYWuasZ23K6g&s';

const Header: React.FC = () => {
  const headlines = [
    "Win $10K + Signed T-Shirt from Steve Harvey",
    "Chance to Meet Steve Harvey & Win Big"
  ];
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setIsFading(true); // Trigger fade out
      setTimeout(() => {
        setCurrentHeadlineIndex(prevIndex => (prevIndex + 1) % headlines.length);
        setIsFading(false); // Trigger fade in
      }, 500); // This should match the transition duration
    }, 4000); // 4 seconds interval

    return () => clearInterval(headlineInterval);
  }, [headlines.length]);


  const handleJoinNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // The user wants to find the registration section dynamically by its text content.
    // We will look for unique text that appears in either the locked or unlocked state.
    const searchTexts = [
      'Unlock Entry Form',          // Text on the button in the locked state
      'Register Now to Win!',       // Heading in the locked state
      "You're In! Complete Your Entry" // Heading in the unlocked state
    ];

    const allElements = document.querySelectorAll('h2, button');
    let targetElement: Element | null = null;

    for (const el of allElements) {
      const textContent = el.textContent;
      if (textContent && searchTexts.some(searchText => textContent.includes(searchText))) {
        targetElement = el;
        break;
      }
    }

    // Find the parent section of the identified element
    const sectionToScroll = targetElement?.closest('section');

    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // As a fallback, try to use the href attribute if the text search fails
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        const fallbackElement = document.getElementById(href.substring(1));
        if (fallbackElement) {
          fallbackElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          zIndex: 1,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" style={{ zIndex: 2 }}></div>
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="min-h-[100px] md:min-h-[120px] flex items-center justify-center">
            <h1
                className={`text-3xl md:text-5xl font-bold text-yellow-400 mb-4 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
             >
                {headlines[currentHeadlineIndex]}
            </h1>
        </div>
        <p className="text-base md:text-lg text-gray-200 mb-8 animate-fade-in-up">
          Enter now for your chance to win exclusive prizes and meet Steve Harvey himself!
        </p>
        <a
          href="#register"
          onClick={handleJoinNowClick}
          className="bg-yellow-400 text-black py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:scale-110 transform inline-block"
        >
          Join Now
        </a>
      </div>
    </header>
  );
};

export default Header;