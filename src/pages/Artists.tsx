import React from 'react';
import { Camera, Palette, Brush, PenTool } from 'lucide-react';

const featuredArtists = [
  {
    name: 'Sarah Chen',
    medium: 'Photography',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    description: 'Capturing the raw energy of urban life',
    icon: Camera
  },
  {
    name: 'Marcus Rivera',
    medium: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'Breaking boundaries in digital spaces',
    icon: PenTool
  },
  {
    name: 'Emily Thompson',
    medium: 'Oil Painting',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    description: 'Reimagining Texas through bold strokes',
    icon: Palette
  },
  {
    name: 'David Kim',
    medium: 'Mixed Media',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    description: 'Blending tradition with digital rebellion',
    icon: Brush
  }
];

const ArtistCard = ({ artist }: { artist: typeof featuredArtists[0] }) => {
  const Icon = artist.icon;
  
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-purple-500 transition-all duration-300">
      <div className="relative h-48">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-white">{artist.name}</h3>
        <p className="text-purple-400 font-medium mb-3">{artist.medium}</p>
        <p className="text-gray-400">{artist.description}</p>
      </div>
    </div>
  );
};

const Artists = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            The Revolutionaries
          </h1>
          <p className="text-xl text-gray-400">
            Meet the artists leading Fort Worth's creative uprising
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;