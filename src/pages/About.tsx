import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Shield } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:border-purple-500 transition-colors">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Mission
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Basqi emerged from the underground. We're here to disrupt the status quo and build 
            a platform that gives power back to the artists.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ValueCard
            icon={Target}
            title="Raw Transparency"
            description="We expose the truth about pricing and payments in the art world."
          />
          <ValueCard
            icon={Heart}
            title="Artist First"
            description="Every feature we build serves the creator, not the gatekeepers."
          />
          <ValueCard
            icon={Users}
            title="Power to the People"
            description="We're building an army of artists ready to change the game."
          />
          <ValueCard
            icon={Shield}
            title="No Bullshit"
            description="Fair pay, clear terms, and zero tolerance for exploitation."
          />
        </div>

        {/* Story Section */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            The Revolution Starts Here
          </h2>
          <p className="text-gray-400 mb-6">
            Born in Fort Worth's underground art scene, Basqi is the result of countless 
            conversations with artists tired of being undervalued and overlooked. We're not 
            just building a platform—we're igniting a movement.
          </p>
          <p className="text-gray-400">
            We're here to demolish the old ways of doing business in the art world. No more 
            middlemen taking their cut. No more arbitrary pricing. No more waiting to get paid.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Join the Revolution
          </h2>
          <p className="text-gray-400 mb-6">
            It's time to take back control of your art career.
          </p>
          <Link
            to="/join-waitlist"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;