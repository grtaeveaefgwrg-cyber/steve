import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialData = [
  {
    imgSrc: "https://i.postimg.cc/9F2jsw5d/download-9.jpg",
    name: "John M.",
    location: "USA",
    comment: "I actually won a Steve Harvey T-shirt! Can’t believe it! The quality is amazing. Thank you, Steve!",
  },
  {
    imgSrc: "https://i.postimg.cc/jSkmqLmb/download-10.jpg",
    name: "Sarah L.",
    location: "Canada",
    comment: "Never thought I'd win anything. This made my entire year. So grateful for this opportunity.",
  },
  {
    imgSrc: "https://i.postimg.cc/Xv4GJYCs/images.jpg",
    name: "David K.",
    location: "UK",
    comment: "The whole process was so easy and legitimate. Just got my prize today. This is the real deal!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-[#111]" id="testimonials">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12">
          Hear From Our Recent Winners
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imgSrc={testimonial.imgSrc}
              name={testimonial.name}
              location={testimonial.location}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;