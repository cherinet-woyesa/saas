'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI analyzes your input and generates high-quality social media posts, captions, and content ideas tailored to your brand.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel or change your plan at any time directly from your account dashboard.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! Our Starter plan is completely free to help you try out the platform before upgrading.",
  },
  {
    question: "Can I connect multiple social media accounts?",
    answer: "Yes. With our Pro and Enterprise plans, you can connect multiple accounts and manage them easily.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div
                className={`mt-4 text-gray-600 text-base overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
