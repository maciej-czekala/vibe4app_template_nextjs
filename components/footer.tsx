import React from 'react'
import Link from 'next/link'

const FooterLinks = () => (
  <div className="flex flex-wrap justify-center gap-4 text-xs">
    <Link 
      href="/privacy" 
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      Privacy Policy
    </Link>
    <span className="text-gray-600">•</span>
    <span className="text-gray-400">© 2024 vibe4.app</span>
  </div>
)

const TechStack = () => (
  <div className="text-center text-gray-500 text-sm">
    <p>Next.js • TypeScript • Tailwind CSS • Radix UI</p>
  </div>
)

export function Footer() {
  return (
    <footer className="mt-auto py-8">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        <TechStack />
        <FooterLinks />
      </div>
    </footer>
  )
}