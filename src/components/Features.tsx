// src/sections/Features.tsx
import { Sparkles, Zap, Brain, Clock, Mic } from 'lucide-react';

const features = [
  {
    title: 'Instant Post Ideas',
    description: 'Generate high-converting content ideas instantly using AI.',
    icon: <Zap className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'Smart Hashtags',
    description: 'Automatically generate hashtags to improve reach and visibility.',
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
  },
  {
    title: 'AI Content Writing',
    description: 'Quickly write optimized content tailored for your audience.',
    icon: <Brain className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Scheduling Integration',
    description: 'Plan and schedule your posts ahead to stay consistent.',
    icon: <Clock className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Personalized Tone',
    description: 'Match your brand voice using tone customization tools.',
    icon: <Mic className="w-8 h-8 text-rose-500" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Powerful Features for Modern Creators
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          From ideas to scheduled posts—our AI handles the hard parts so you can focus on creativity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
