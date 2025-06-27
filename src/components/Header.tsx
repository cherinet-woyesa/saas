// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400">
          SaaS Tool
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition">Features</Link>
          <Link href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition">About</Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition">Contact</Link>
          <Link href="/ai-generator" className="text-gray-700 hover:text-indigo-600">
  AI Generator
</Link>

        </nav>

        {/* Call to Action */}
        <Link
          href="/signup"
          className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition shadow-md"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
