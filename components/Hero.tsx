'use client';

import { ArrowRight, Download, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={
          {
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-purple-900/90"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <TrendingUp className="h-5 w-5 text-blue-300" />
            <span className="text-white text-sm font-medium">Trending Now: Top Rated Retail Platform of 2024</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Favorite Brand
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join millions of shoppers discovering, rating, and sharing the best retail experiences. Your community-driven shopping companion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all hover:shadow-2xl"
            >
              Explore Features
            </a>
          </div>

          <div className="flex items-center justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">4.9★</div>
              <div className="text-blue-200 text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">2M+</div>
              <div className="text-blue-200 text-sm">Active Users</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50K+</div>
              <div className="text-blue-200 text-sm">Brands Listed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}