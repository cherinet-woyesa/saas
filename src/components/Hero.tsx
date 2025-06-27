// src/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-32 px-6 overflow-hidden">
      {/* Background blob animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <svg
          className="absolute top-[-50px] left-[-50px] w-[800px] h-[800px] opacity-30 blur-2xl animate-pulse"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M54.4,-69.3C68.2,-61.3,75.3,-40.7,77.3,-21.3C79.3,-1.9,76.1,16.2,67.9,30.2C59.8,44.2,46.7,54.1,32.7,64.6C18.6,75.2,3.7,86.3,-10.4,89C-24.5,91.8,-38,86.2,-48.1,75.6C-58.2,64.9,-65,49.1,-69.8,33.8C-74.5,18.5,-77.2,3.6,-74.7,-9.7C-72.2,-23,-64.4,-34.6,-53.5,-44.2C-42.6,-53.9,-28.6,-61.7,-13.4,-68.3C1.7,-74.9,17.3,-80.2,33.5,-77.2C49.7,-74.2,66.5,-62.9,54.4,-69.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-500 to-indigo-500 drop-shadow-xl animate-gradient">
          AI-Powered Social Media Content Generator
        </h1>
        <p className="mt-6 text-lg md:text-xl opacity-90 max-w-xl mx-auto">
          Create stunning, personalized posts in seconds. Save time and grow your audience with the power of AI.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/signup"
            className="bg-white/10 backdrop-blur-lg border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold shadow-lg"
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="bg-gradient-to-tr from-pink-500 to-indigo-500 px-6 py-3 rounded-xl text-white font-semibold shadow-xl hover:opacity-90 transition"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
