import React from 'react';

interface PrizeCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  isCentered?: boolean;
  onClick?: () => void;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ imgSrc, imgAlt, title, description, buttonText, buttonLink, isCentered, onClick }) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  const isClickable = !!onClick;

  return (
    <div 
      className={`bg-[#2a2a2a] rounded-xl w-full max-w-[280px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-yellow-400/20 flex flex-col ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={isClickable ? onClick : undefined}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-pressed={isClickable ? "false" : undefined}
    >
      <img src={imgSrc} alt={imgAlt} className="w-full h-[160px] object-cover" />
      <div className={`px-4 flex flex-col flex-grow ${isCentered ? 'text-center' : ''}`}>
        <h3 className="text-xl font-bold text-yellow-400 mt-[15px] mb-[5px]">
          {title}
        </h3>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
        {buttonText && buttonLink && (
          <div className="mt-auto pt-4 mb-[15px]">
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black py-2.5 px-5 rounded-lg font-bold transition-colors duration-300 hover:bg-[#e6c200]"
              onClick={(e) => e.stopPropagation()}
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrizeCard;