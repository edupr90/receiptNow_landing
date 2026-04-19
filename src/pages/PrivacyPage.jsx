import { Link } from 'react-router-dom'
import { privacyContent } from '../data/privacyContent'

export default function PrivacyPage() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-xl border border-border p-6 md:p-10 lg:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-text-tertiary text-sm mb-2">Last Updated: March 29, 2026</p>
          <p className="text-text-secondary text-sm mb-8">
            Please also review our{' '}
            <Link to="/terms" className="text-primary hover:text-primary-dark font-semibold">
              Terms & Conditions
            </Link>.
          </p>

          <div className="space-y-8">
            {privacyContent.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold text-text-primary mb-3">{section.title}</h2>
                <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line prose-sm">
                  {section.body.split('\n').map((paragraph, i) => {
                    if (paragraph.startsWith('- ')) {
                      return (
                        <div key={i} className="flex gap-2 ml-2 mb-1">
                          <span className="text-primary mt-0.5">&#8226;</span>
                          <span>{paragraph.slice(2)}</span>
                        </div>
                      )
                    }
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <p key={i} className="font-bold text-text-primary mt-3 mb-1">
                          {paragraph.slice(2, -2)}
                        </p>
                      )
                    }
                    if (paragraph.match(/^\*\*.+?\*\*:/)) {
                      const [, bold, rest] = paragraph.match(/^\*\*(.+?)\*\*:(.*)/)
                      return (
                        <p key={i} className="mt-2">
                          <strong className="text-text-primary">{bold}:</strong>{rest}
                        </p>
                      )
                    }
                    if (paragraph.trim() === '') return <br key={i} />
                    return <p key={i} className="mb-2">{paragraph}</p>
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
