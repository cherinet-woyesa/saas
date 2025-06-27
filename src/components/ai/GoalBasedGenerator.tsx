'use client';

import { useState } from 'react';
import { generateContent } from '@/lib/openai';

const goals = [
  'Increase Engagement',
  'Promote a Product',
  'Drive Website Traffic',
  'Build Brand Awareness',
  'Announce an Event',
];

export default function GoalBasedGenerator() {
  const [goal, setGoal] = useState(goals[0]);
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleGenerate = async () => {
    if (!topic) {
      setError('Please enter a topic');
      return;
    }

    setError('');
    setLoading(true);
    setGeneratedContent('');

    try {
      const content = await generateContent(goal, topic);
      setGeneratedContent(content || '');
    } catch (err: any) {
      const errorMessage = err instanceof Error ? (err.message || 'Failed to generate content. Please try again.') : 'Failed to generate content. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">AI Generator by Goal</h2>

      <label className="block text-gray-700 mb-2">Select a Goal</label>
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full mb-4 p-3 border rounded-lg"
      >
        {goals.map((g) => (
          <option key={g}>{g}</option>
        ))}
      </select>

      <label className="block text-gray-700 mb-2">Enter Topic or Idea</label>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your topic or idea..."
      />

      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error}
        </div>
      )}

      <button
        onClick={handleGenerate}
        disabled={loading || !topic}
        className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Generating...' : 'Generate Content'}
      </button>

      {generatedContent && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Generated Content:</h3>
          <p className="whitespace-pre-wrap">{generatedContent}</p>
        </div>
      )}
    </div>
  );
}
