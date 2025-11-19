'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Unlimited brand ratings and reviews',
    'Access to trending content feed',
    'Social discovery and networking',
    'Real-time notifications',
    'Verified review badge',
    'Priority customer support',
    'Exclusive brand partnerships',
    'Advanced analytics dashboard',
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get premium access to all features and join our thriving community of shoppers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-500">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">MOST POPULAR</span>
              </div>
            </div>

            <div className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Premium Membership</h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-2xl text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mt-4">Everything you need to shop smarter</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:shadow-2xl hover:scale-105"
              >
                Start Your Premium Journey
              </a>

              <div className="mt-8 text-center space-y-2">
                <p className="text-gray-600">✓ Cancel anytime, no questions asked</p>
                <p className="text-gray-600">✓ 30-day money-back guarantee</p>
                <p className="text-gray-600">✓ Instant access to all features</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">256-bit</div>
              <div className="text-gray-600">SSL Encryption</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Secure Payments</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}