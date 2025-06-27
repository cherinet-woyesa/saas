// src/components/CTA.tsx
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white py-20 px-6 text-center shadow-inner">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Sign up and start generating high-quality content in seconds with AI.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition shadow-lg"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
