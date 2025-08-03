import React from "react";
import { Navbar } from "@/components/navbar";
import { Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <div className="pt-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Target className="h-6 w-6 text-blue-500" />
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-500" />
              Our Team
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto"></div>
                <h3 className="text-white font-medium">John Doe</h3>
                <p className="text-gray-400 text-sm">CEO & Founder</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto"></div>
                <h3 className="text-white font-medium">Jane Smith</h3>
                <p className="text-gray-400 text-sm">CTO</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto"></div>
                <h3 className="text-white font-medium">Mike Johnson</h3>
                <p className="text-gray-400 text-sm">Lead Developer</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-green-500" />
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-white font-medium">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-white font-medium">Quality</h3>
                <p className="text-gray-300 text-sm">
                  Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-white font-medium">Collaboration</h3>
                <p className="text-gray-300 text-sm">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-white font-medium">Excellence</h3>
                <p className="text-gray-300 text-sm">
                  Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}