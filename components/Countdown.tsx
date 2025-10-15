
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +new Date("2025-12-31T23:59:59") - +new Date();
    let timeLeft: TimeLeft | {} = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerKeys = Object.keys(timeLeft) as Array<keyof TimeLeft>;

  return (
    <section className="py-20 px-5 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">
          ⏰ Challenges Close In:
        </h2>
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          {timerKeys.length > 0 ? timerKeys.map((key, index) => (
            <React.Fragment key={key}>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-bold">
                  {String(timeLeft[key]).padStart(2, '0')}
                </span>
                <span className="text-sm uppercase text-gray-400">{key}</span>
              </div>
              {index < timerKeys.length - 1 && <span className="text-4xl md:text-6xl font-light text-gray-600">:</span>}
            </React.Fragment>
          )) : 
          <span className="text-3xl font-bold text-red-500">Challenges Closed</span>}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
