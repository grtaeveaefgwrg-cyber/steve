import React from 'react';

const shareButtons = [
  {
    platform: 'youtube',
    label: 'YouTube',
    icon: '▶',
    style: { background: '#FF0000' },
    url: 'https://www.youtube.com/@SteveHarvey_Challenge',
  },
  {
    platform: 'tiktok',
    label: 'TikTok',
    icon: '♬',
    style: { background: '#000000' },
    url: 'https://www.tiktok.com/@steve.harvey_show?_t=ZS-90Xpqx8eSTo&_r=1',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    icon: '✦',
    style: { background: 'linear-gradient(45deg, #f09433, #e6683c, #cc2a7d, #833ab4)' },
    url: 'https://www.instagram.com/steve_harvey_challenge?igsh=MWM3ODNxeHp4dXU0cw==',
  },
];

const Share: React.FC = () => {
  const handleShareClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-9 px-[18px] bg-[#111] text-center" id="share">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-[28px] font-bold text-yellow-400 mb-2">
          Follow Us on These Platforms!
        </h2>
        <p className="text-gray-300 mb-5">
          Stay connected and never miss an update from our community.
        </p>
        <div className="flex justify-center items-center gap-[14px] flex-wrap" role="group" aria-label="Follow buttons">
          {shareButtons.map((button) => (
            <button
              key={button.platform}
              onClick={() => handleShareClick(button.url)}
              className="min-w-[130px] py-3 px-[18px] rounded-[10px] font-semibold transition-transform hover:scale-105 text-white inline-flex items-center justify-center gap-[10px] shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              style={button.style}
              aria-label={button.label}
            >
              <span className="text-lg">{button.icon}</span>
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Share;