import React from "react";
import { Code, Terminal, GitBranch, Package } from "lucide-react";

function Header() {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <Code className="h-8 w-8 text-blue-500" />
        <h1 className="text-4xl font-bold text-white">
          vibe4.app
        </h1>
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-200">
        Next.js Development Template
      </h2>
      
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        A production-ready Next.js template with TypeScript, Tailwind CSS, and a comprehensive UI component library.
      </p>
    </div>
  );
}

function QuickStartCard() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
        <GitBranch className="h-4 w-4 text-blue-500" />
        Quick Start
      </h4>
      <ul className="text-gray-300 space-y-2 text-sm">
        <li>• Type your requirements in the chat</li>
        <li>• Describe features or components needed</li>
        <li>• AI agent will implement changes</li>
        <li>• Real-time code generation and updates</li>
      </ul>
    </div>
  );
}

function WhatsIncludedCard() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
        <Package className="h-4 w-4 text-purple-500" />
        What's Included
      </h4>
      <ul className="text-gray-300 space-y-2 text-sm">
        <li>• Next.js 15 with App Router</li>
        <li>• TypeScript configuration</li>
        <li>• Tailwind CSS v4</li>
        <li>• Radix UI components</li>
        <li>• Form handling with React Hook Form</li>
      </ul>
    </div>
  );
}

function ReadyToBuildSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
        <Terminal className="h-5 w-5 text-green-500" />
        Ready to Build
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <QuickStartCard />
        <WhatsIncludedCard />
      </div>
    </div>
  );
}

function DevelopmentExamples() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h4 className="text-lg font-medium text-white mb-4">
        Development Examples
      </h4>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="space-y-2">
          <p className="text-gray-400 font-medium">UI Components:</p>
          <ul className="text-gray-300 space-y-1">
            <li>• "Add a user authentication form"</li>
            <li>• "Create a data table with sorting"</li>
            <li>• "Build a navigation sidebar"</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400 font-medium">Features:</p>
          <ul className="text-gray-300 space-y-1">
            <li>• "Implement API route for user data"</li>
            <li>• "Add state management with Zustand"</li>
            <li>• "Create a dashboard layout"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
      <h4 className="text-lg font-medium text-white mb-3">
        Start Building
      </h4>
      <p className="text-gray-300 mb-4 text-sm">
        Describe your requirements below and the AI agent will help you build your application. 
        Focus on functionality, architecture, and user experience.
      </p>
      <div className="bg-gray-900 border border-gray-700 rounded p-3">
        <p className="text-xs text-gray-400 font-mono">
          Example: "Add a navbar and update the header with my project description using lorem ipsum content"
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="text-center text-gray-500 text-sm space-y-1">
      <p>Next.js • TypeScript • Tailwind CSS • Radix UI</p>
      <p className="text-xs">
        Production-ready template with modern development tools
      </p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 space-y-6">
      <ReadyToBuildSection />
      <DevelopmentExamples />
      <CallToAction />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
