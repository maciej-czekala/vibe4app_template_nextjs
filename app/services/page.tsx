import React from "react";
import { Navbar } from "@/components/navbar";
import { Code, Smartphone, Globe, Zap, Shield, Headphones } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <div className="pt-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">Web Development</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• React & Next.js Applications</li>
                <li>• Custom Web Solutions</li>
                <li>• E-commerce Platforms</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-purple-500" />
                <h3 className="text-xl font-semibold text-white">Mobile Development</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• iOS & Android Apps</li>
                <li>• React Native Development</li>
                <li>• Cross-platform Solutions</li>
                <li>• App Store Optimization</li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-semibold text-white">Digital Marketing</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• SEO Optimization</li>
                <li>• Social Media Marketing</li>
                <li>• Content Strategy</li>
                <li>• PPC Campaigns</li>
              </ul>
            </div>

            {/* Performance Optimization */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-yellow-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-yellow-500" />
                <h3 className="text-xl font-semibold text-white">Performance Optimization</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Speed Optimization</li>
                <li>• Database Tuning</li>
                <li>• Caching Strategies</li>
                <li>• CDN Implementation</li>
              </ul>
            </div>

            {/* Security Services */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-semibold text-white">Security Services</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Security Audits</li>
                <li>• Penetration Testing</li>
                <li>• SSL Implementation</li>
                <li>• Data Protection</li>
              </ul>
            </div>

            {/* Support & Maintenance */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="h-8 w-8 text-cyan-500" />
                <h3 className="text-xl font-semibold text-white">Support & Maintenance</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• 24/7 Technical Support</li>
                <li>• Regular Updates</li>
                <li>• Bug Fixes</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
            <div className="space-y-4">
              <p className="text-blue-400 font-medium">Contact us today to discuss your project</p>
              <div className="text-gray-400 text-sm">
                Email: info@vibe4.app | Phone: (555) 123-4567
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}