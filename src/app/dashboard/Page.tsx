'use client';

import { useState } from 'react';
import { Bell, Settings, LogOut, UserCircle2 } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
          <LogOut className="w-5 h-5 text-red-500 cursor-pointer" />
        </div>
      </header>

      {/* Sidebar & Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)] p-6">
          <div className="flex items-center gap-3 mb-8">
            <UserCircle2 className="w-10 h-10 text-indigo-600" />
            <span className="text-lg font-semibold">Welcome, User</span>
          </div>
          <nav className="flex flex-col gap-3">
            {['overview', 'generate', 'history', 'profile'].map((tab) => (
              <button
                key={tab}
                className={`text-left px-3 py-2 rounded-md font-medium ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'overview' && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600">
                Welcome to your dashboard. Here you’ll find quick access to generate content, track usage, and manage your profile.
              </p>
            </section>
          )}
          {activeTab === 'generate' && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Generate Content</h2>
              <p>Coming soon: 
                
                 generator integration.</p>
            </section>
          )}
          {activeTab === 'history' && (
            <section>
              <h2 className="text-xl font-semibold mb-4">History</h2>
              <p>Track your recent generations and actions.</p>
            </section>
          )}
          {activeTab === 'profile' && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
              <p>Edit your user information and preferences.</p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
