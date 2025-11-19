'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      quote: 'RetailHub has completely transformed how I discover new brands. The community recommendations are spot-on, and I love being able to share my finds with friends!',
    },
    {
      name: 'Michael Chen',
      role: 'Tech Reviewer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      quote: 'The rating system is incredibly reliable. I trust the reviews here more than any other platform. It\'s become my go-to before making any purchase decision.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lifestyle Blogger',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      quote: 'As a content creator, RetailHub gives me amazing insights into trending products. The social discovery feature helps me stay ahead of the curve.',
    },
    {
      name: 'David Thompson',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
      quote: 'This platform has been instrumental in growing our brand visibility. The verified reviews have built tremendous trust with our customers.',
    },
    {
      name: 'Lisa Park',
      role: 'Home Decor Expert',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      rating: 5,
      quote: 'I\'ve discovered so many amazing home brands through RetailHub. The trending section always has exactly what I\'m looking for. Absolutely love it!',
    },
    {
      name: 'James Wilson',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      rating: 5,
      quote: 'The instant notifications keep me updated on the latest fitness gear and wellness products. Best shopping companion I\'ve ever used!',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Loved by Millions of
            <span className="block text-blue-600">Happy Shoppers</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See what our community is saying about their RetailHub experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-900 font-semibold">4.9 out of 5 stars from 50,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}