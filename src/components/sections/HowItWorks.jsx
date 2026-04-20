import SectionHeading from '../ui/SectionHeading'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const steps = [
  {
    number: '1',
    title: 'Scan Your Receipt',
    description: 'Point your camera at any receipt or import from your gallery. Works with store receipts, restaurant bills, and online order confirmations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'AI Reads It',
    description: 'AI instantly extracts the merchant, items, totals, tax, and date. Review and edit if needed.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Stay Organized',
    description: 'Receipts are categorized and stored automatically. Track spending, set budgets, and export reports anytime.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <SectionHeading
            title="How it works"
            subtitle="Three simple steps to organize all your receipts."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-border" style={{ left: '20%', right: '20%' }} />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center relative animate-on-scroll animate-delay-${(index + 1) * 100} ${isVisible ? 'visible' : ''}`}
            >
              {/* Number badge */}
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-primary mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
