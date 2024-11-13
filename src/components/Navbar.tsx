import React from 'react';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Basqi
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/artists" className="text-gray-400 hover:text-purple-500 transition-colors">
              Artists
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
              About
            </Link>
            <Link
              to="/join-waitlist"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}