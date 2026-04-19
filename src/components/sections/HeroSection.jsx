import IPhoneFrame from '../ui/IPhoneFrame'
import StoreButtons from '../ui/StoreButtons'

const stats = [
  {
    value: '10K+',
    label: 'Receipts Scanned',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: '4.9',
    label: 'App Rating',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Private & Secure',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-36 overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00A878 0%, transparent 70%)',
          transform: 'translate(20%, -30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-sm px-4 py-2 rounded-full mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI-Powered Expense Tracking
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.05] mb-7">
              Your Receipts,{' '}
              <span className="text-primary">Organized by AI.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Scan any receipt in seconds. Track expenses, set budgets, and get insights &mdash; all in one beautiful app.
            </p>

            <StoreButtons className="justify-center lg:justify-start mb-12" />

            {/* Stats row */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-bg border border-border rounded-xl px-4 py-3"
                >
                  <div className="text-primary">{stat.icon}</div>
                  <div>
                    <p className="text-lg font-extrabold text-text-primary leading-none">{stat.value}</p>
                    <p className="text-[11px] font-semibold text-text-tertiary">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* iPhone frame */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="gradient-orb" style={{ width: '400px', height: '400px' }} />
            <div className="relative z-10">
              <IPhoneFrame src={`${import.meta.env.BASE_URL}home.png`} alt="ReceiptNow App Dashboard" animation="default" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
