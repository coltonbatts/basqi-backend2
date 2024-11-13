import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, DollarSign, Users, BarChart } from 'lucide-react';

const Home = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Where Art Meets Revolution
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join Fort Worth's underground movement for artists to connect, price fearlessly, and get paid what they deserve.
            </p>
            <Link
              to="/join-waitlist"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Palette className="h-6 w-6" />}
              title="Raw Transparency"
              description="See what other artists charge. No more guessing games."
            />
            <FeatureCard
              icon={<DollarSign className="h-6 w-6" />}
              title="Get Paid. Period."
              description="Instant payments. No more chasing invoices."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Real Community"
              description="Connect with the rebels changing Fort Worth's art scene."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Voices of the Movement
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Testimonial
              quote="Finally, someone's disrupting the old guard. Basqi lets me price my work on my terms."
              author="Local Fort Worth Photographer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
            />
            <Testimonial
              quote="No more gatekeepers. No more bullshit. Just pure artistic freedom and fair pay."
              author="Local Fort Worth Painter"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-purple-500 transition-colors">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Testimonial = ({ quote, author, image }: { quote: string; author: string; image: string }) => (
  <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
    <p className="text-gray-300 mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover border-2 border-purple-500" />
      <span className="ml-3 font-medium text-gray-400">{author}</span>
    </div>
  </div>
);

export default Home;