import React from 'react';

// High-quality SVG icon components for a professional look.
const YouTubeIcon: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-auto">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg role="img" aria-label="Instagram icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.457.718-2.123 1.385S.935 3.356.63 4.14C.333 4.905.13 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.558 2.913.306.783.718 1.457 1.385 2.123s1.34 1.08 2.123 1.385c.766.298 1.636.498 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.913-.558.783-.306 1.457-.718 2.123-1.385s1.08-1.34 1.385-2.123c.298-.765.498-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.558-2.913-.306-.784-.718-1.457-1.385-2.123S20.643.935 19.86.63c-.765-.298-1.636-.498-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.25 1.805-.414 2.227-.216.562-.477.96-.896 1.382-.419.419-.824.679-1.38.896-.423.164-1.065.36-2.235.413-1.267.057-1.646.07-4.85.07-3.203 0-3.585-.015-4.85-.074-1.17-.056-1.805-.25-2.227-.414-.562-.216-.96-.477-1.382-.896-.419-.419-.679-.824-.896-1.38-.165-.423-.36-1.065-.413-2.235-.057-1.267-.07-1.646-.07-4.85s.015-3.585.07-4.85c.055-1.17.248-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.165 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
  </svg>
);


const shareButtons = [
  {
    platform: 'youtube',
    label: 'YouTube',
    icon: <YouTubeIcon />,
    style: { background: '#FF0000' },
    url: 'https://www.youtube.com/@SteveHarvey_Challenge',
  },
  {
    platform: 'tiktok',
    label: 'TikTok',
    icon: null,
    style: { 
      background: '#000000',
      textShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
    },
    url: 'https://www.tiktok.com/@steve.harvey_show?_t=ZS-90Xpqx8eSTo&_r=1',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    icon: <InstagramIcon />,
    style: { background: 'linear-gradient(45deg, #f09433, #e6683c, #cc2a7d, #833ab4)' },
    url: 'https://www.instagram.com/steve_harvey_challenge?igsh=MWM3ODNxeHp4dXU0cw==',
  },
];

const Share: React.FC = () => {
  const handleShareClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 px-5 bg-gray-900" id="share">
      <div className="container mx-auto max-w-3xl">
        <div 
          className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 text-center shadow-lg border border-yellow-400/30"
          style={{
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(250, 204, 21, 0.2)'
          }}
        >
          <h2 
            className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Follow Us on These Platforms!
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Stay connected and never miss an update from our community.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap" role="group" aria-label="Follow buttons">
            {shareButtons.map((button) => (
              <button
                key={button.platform}
                onClick={() => handleShareClick(button.url)}
                className="min-w-[140px] text-base py-3 px-5 rounded-full font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl text-white inline-flex items-center justify-center gap-2 shadow-md"
                style={button.style}
                aria-label={button.label}
              >
                {button.icon}
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;