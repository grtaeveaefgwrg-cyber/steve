
import React from 'react';

const leaderboardData = [
  { rank: 1, name: 'John S.', invites: 15, icon: '🥇' },
  { rank: 2, name: 'Maria G.', invites: 12, icon: '🥈' },
  { rank: 3, name: 'Kevin P.', invites: 9, icon: '🥉' },
  { rank: 4, name: 'Linda H.', invites: 7 },
  { rank: 5, name: 'Robert C.', invites: 5 },
];

const Leaderboard: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-[#111]">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">
          Top Referrers Leaderboard
        </h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <ul className="space-y-4">
            {leaderboardData.map((player) => (
              <li key={player.rank} className="flex items-center justify-between p-2 sm:p-3 bg-gray-900 rounded-md">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-lg sm:text-xl font-bold text-yellow-400 w-6 sm:w-8 text-center">{player.icon || player.rank}</span>
                  <span className="font-semibold text-white">{player.name}</span>
                </div>
                <span className="font-bold text-base sm:text-lg text-green-400">{player.invites} invites</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;