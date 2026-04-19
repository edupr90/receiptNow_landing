import IPhoneFrame from '../ui/IPhoneFrame'
import StoreButtons from '../ui/StoreButtons'

export default function CTASection() {
  return (
    <section id="download" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            top: '-10%',
            right: '-5%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-5%',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Phone mockup */}
          <div className="mb-12 relative">
            <div
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative z-10">
              <IPhoneFrame src={`${import.meta.env.BASE_URL}ins.png`} alt="ReceiptNow Insights" animation="slow" />
            </div>
          </div>

          {/* Text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center max-w-3xl">
            Ready to take control of your expenses?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto text-center">
            Download ReceiptNow free and start scanning your receipts today. Available on iOS and Android.
          </p>

          <StoreButtons className="justify-center" />
        </div>
      </div>
    </section>
  )
}
