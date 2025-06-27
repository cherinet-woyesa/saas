'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Ava Johnson',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This tool has completely changed how we plan and publish content. Our productivity doubled!',
  },
  {
    name: 'Liam Smith',
    role: 'Content Creator',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Easy to use, powerful, and smart. It’s like having a creative assistant in your pocket.',
  },
  {
    name: 'Emily Chen',
    role: 'Social Media Lead',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Saves me hours every week. The AI-generated content is surprisingly good!',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">What Our Users Say</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base italic leading-relaxed">“{testimonial.text}”</p>
            </div>        
          ))}
        </div>
      </div>
    </section>
  );
}
