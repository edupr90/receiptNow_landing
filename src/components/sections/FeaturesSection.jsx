import IPhoneFrame from '../ui/IPhoneFrame'
import { features } from '../../data/features'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function FeatureShowcase({ label, title, description, bullets, screenshotSrc, reversed, animation }) {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
        {/* Text side */}
        <div className={`flex-1 text-center lg:text-left animate-on-scroll ${reversed ? 'from-right' : 'from-left'} ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-primary mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            {description}
          </p>
          {bullets && (
            <ul className="space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Phone side */}
        <div className={`flex-1 flex items-center justify-center relative animate-on-scroll ${reversed ? 'from-left' : 'from-right'} animate-delay-200 ${isVisible ? 'visible' : ''}`}>
          <div className="gradient-orb" style={{ width: '380px', height: '380px' }} />
          <div className="relative z-10">
            <IPhoneFrame src={screenshotSrc} alt={title} animation={animation} size="lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <>
      {features.map((feature, index) => (
        <section
          key={feature.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-bg' : 'bg-white'}`}
        >
          <FeatureShowcase {...feature} />
        </section>
      ))}
    </>
  )
}
