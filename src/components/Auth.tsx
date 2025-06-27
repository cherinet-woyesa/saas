"use client";

import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            {isLogin ? "Log In to Your Account" : "Create an Account"}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {isLogin ? "Welcome back!" : "Join us and start creating with AI"}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-medium ml-1 hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </section>
  );
}
