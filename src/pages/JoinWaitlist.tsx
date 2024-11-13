import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const JoinWaitlist = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">You're In.</h2>
          <p className="text-gray-400">Welcome to the future of Fort Worth's art scene.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Join The Movement
            </h1>
            <p className="text-xl text-gray-400">
              Be part of Fort Worth's art revolution. No gatekeepers. No bullshit.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                  What Should We Call You?
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Where Can We Reach You?
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Your Creative Weapon of Choice
                </label>
                <select
                  required
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-purple-500 transition-colors"
                >
                  <option value="">Select your medium</option>
                  <option value="photography">Photography</option>
                  <option value="painting">Painting</option>
                  <option value="sculpture">Sculpture</option>
                  <option value="digital">Digital Art</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Your Story (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your art and vision..."
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full group bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-6 py-4 font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;