
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-8 px-5">
      <div className="container mx-auto text-center">
        <p>© 2025 Steve Harvey Official Challenges | All rights reserved.</p>
        <p className="mt-2 text-sm">
          For support, contact: <a href="mailto:support@steveharveychallenges.com" className="hover:text-yellow-400 transition-colors">support@steveharveychallenges.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;