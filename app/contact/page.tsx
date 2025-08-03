import React from "react";
import { Navbar } from "@/components/navbar";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <div className="pt-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get in touch with us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Subject</label>
                  <Input 
                    placeholder="How can we help you?" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-300">info@vibe4.app</p>
                      <p className="text-gray-300">support@vibe4.app</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">Address</h3>
                      <p className="text-gray-300">123 Business Street</p>
                      <p className="text-gray-300">Suite 456</p>
                      <p className="text-gray-300">New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Find Us</h3>
                <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-gray-600 mx-auto" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-gray-600 text-sm">Map integration coming soon</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">How quickly do you respond?</h4>
                    <p className="text-gray-300 text-sm">We typically respond within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Do you offer free consultations?</h4>
                    <p className="text-gray-300 text-sm">Yes, we offer a free 30-minute consultation for all new clients.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">What industries do you serve?</h4>
                    <p className="text-gray-300 text-sm">We work with clients across various industries including tech, healthcare, finance, and e-commerce.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}