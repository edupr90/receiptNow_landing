export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
