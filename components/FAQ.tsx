
import React, { useState } from 'react';

const faqData = [
  {
    question: "How are winners selected?",
    answer: "Winners are selected through a random drawing from all eligible entries. The drawing will be conducted within 7 days of the challenges closing date."
  },
  {
    question: "When will the challenges end?",
    answer: "The challenges end on the date shown in the countdown timer. Make sure to get your entry in before then!"
  },
  {
    question: "Are these challenges free to enter?",
    answer: "Yes, these challenges are completely free to enter. No purchase is necessary to win."
  },
  {
    question: "How will I know if I've won?",
    answer: "Winners will be notified via the email address they provided during registration. Be sure to check your inbox (and spam folder)!"
  }
];

const FaqItem: React.FC<{ faq: { question: string, answer: string } }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-gray-700 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                 <p className="text-gray-300">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;