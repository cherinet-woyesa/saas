// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t-4 border-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 py-8 text-center shadow-inner">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm text-gray-600">
          © 2025 <span className="font-semibold text-indigo-600">SaaS Tool</span>. All rights reserved.
        </p>

        {/* Optional: Socials or links */}
        <div className="mt-4 flex justify-center gap-4 text-gray-500 text-xl">
          {/* <a href="#" className="hover:text-indigo-600 transition">🌐</a>
          <a href="#" className="hover:text-indigo-600 transition">🐦</a>
          <a href="#" className="hover:text-indigo-600 transition">📸</a> */}
        </div>
      </div>
    </footer>
  );
}
