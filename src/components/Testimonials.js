import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "Working with Ganesh was an absolute pleasure. His attention to detail and creative approach to problem-solving resulted in a website that exceeded our expectations.",
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    text: "Ganesh delivered our e-commerce platform on time and with all the features we requested. His technical skills and communication made the process smooth and stress-free.",
    name: "Michael Chen",
    position: "Founder, StyleShop",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    text: "I was impressed by Ganesh's ability to translate our vision into a beautiful, functional website. He was responsive, professional, and delivered exceptional work.",
    name: "Emily Rodriguez",
    position: "Marketing Director, Innovate Inc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center p-10 bg-light dark:bg-dark rounded-2xl border border-solid border-dark dark:border-light shadow-xl
        ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary dark:border-primaryDark">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              width={80}
              height={80}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 text-4xl">
            &ldquo;
          </div>
        </div>

        <p className="text-lg italic text-dark/90 dark:text-light/90 mb-6">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div>
          <h4 className="font-bold text-dark dark:text-light">{testimonial.name}</h4>
          <p className="text-primary dark:text-primaryDark">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-16 w-full text-center text-dark dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl">
        Testimonials
      </h2>

      <div className="relative w-full max-w-3xl mx-auto h-[400px] md:h-[450px] sm:h-[500px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isActive={index === activeIndex}
          />
        ))}

        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 z-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex
                  ? 'bg-primary dark:bg-primaryDark'
                  : 'bg-dark/30 dark:bg-light/30'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center z-20 md:-left-6"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <button
          className="absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center z-20 md:-right-6"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
