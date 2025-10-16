import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
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
  
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooZ55ezy-JVHJoXbuBtrhq6911tUCcyJ7cA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUj7AqdLI-KrP6-X2YKo9GM65OfAQkmW3kiQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5I0VHdg9-wXzpkgeZtty2nVucJa8oAwQbA&s'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload images for smoother transitions
    images.forEach((image) => {
        new Image().src = image;
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds interval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Slideshow */}
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: 1,
          }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80" style={{ zIndex: 2 }}></div>
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 animate-fade-in-down">
          Steve Harvey $10,000 Challenges
        </h1>
        <p className="text-lg text-gray-200 mb-8 animate-fade-in-up">
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
