import React from 'react'
import Link from 'next/link'

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </section>
)

const BackButton = () => (
  <Link 
    href="/" 
    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
  >
    ← Back to Home
  </Link>
)

const Header = () => (
  <header className="mb-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
  </header>
)

const Content = () => (
  <div className="space-y-8">
    <Section title="Information We Collect">
      <p>
        We collect information you provide directly to us, such as when you create an account, 
        use our services, or contact us for support. This may include your name, email address, 
        and other contact information.
      </p>
    </Section>

    <Section title="How We Use Your Information">
      <p>
        We use the information we collect to provide, maintain, and improve our services, 
        process transactions, send you technical notices and support messages, and communicate 
        with you about products, services, and events.
      </p>
    </Section>

    <Section title="Information Sharing">
      <p>
        We do not sell, trade, or otherwise transfer your personal information to third parties 
        without your consent, except as described in this policy or as required by law.
      </p>
    </Section>

    <Section title="Data Security">
      <p>
        We implement appropriate security measures to protect your personal information against 
        unauthorized access, alteration, disclosure, or destruction.
      </p>
    </Section>

    <Section title="Contact Us">
      <p>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:privacy@vibe4app.com" className="text-blue-600 hover:underline">
          privacy@vibe4app.com
        </a>
      </p>
    </Section>
  </div>
)

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BackButton />
        <Header />
        <Content />
      </div>
    </div>
  )
}