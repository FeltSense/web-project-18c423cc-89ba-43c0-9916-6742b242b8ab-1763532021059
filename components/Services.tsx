'use client';

import { Star, Users, TrendingUp, Share2, Award, Zap } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Star,
      title: 'Smart Rating System',
      description: 'Rate and review your favorite brands with our intelligent 5-star system. Your voice matters in shaping the retail community.',
      color: 'bg-yellow-500',
    },
    {
      icon: Users,
      title: 'Social Discovery',
      description: 'Connect with like-minded shoppers, follow friends, and discover brands through trusted recommendations from your network.',
      color: 'bg-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Trending Content',
      description: 'Stay ahead of the curve with real-time trending products, brands, and retail experiences based on community engagement.',
      color: 'bg-purple-500',
    },
    {
      icon: Share2,
      title: 'Instant Sharing',
      description: 'Share your finds across all social platforms. Build your influence as a trusted voice in the retail community.',
      color: 'bg-green-500',
    },
    {
      icon: Award,
      title: 'Verified Reviews',
      description: 'Every review is verified and authenticated. Trust the ratings from real customers with proven purchase history.',
      color: 'bg-red-500',
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Get real-time notifications about new products, exclusive deals, and updates from your favorite brands.',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-blue-600">Shop Smarter</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Powerful features designed to enhance your shopping experience and connect you with the best retail brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}