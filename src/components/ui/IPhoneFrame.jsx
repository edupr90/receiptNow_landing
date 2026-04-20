export default function IPhoneFrame({ src, alt = 'App screenshot', className = '', size = 'default' }) {
  const sizes = {
    sm: 'w-[220px] md:w-[260px]',
    default: 'w-[280px] md:w-[300px]',
    lg: 'w-[300px] md:w-[340px]',
  }

  return (
    <div
      className={`relative ${sizes[size]} ${className}`}
      style={{
        aspectRatio: '9 / 19.5',
        background: '#1A1A2E',
        borderRadius: '44px',
        padding: '10px',
        boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: 'absolute',
          top: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '28px',
          background: '#1A1A2E',
          borderRadius: '14px',
          zIndex: 10,
        }}
      />

      {/* Screen */}
      <div
        className="w-full h-full overflow-hidden relative"
        style={{
          borderRadius: '34px',
          background: 'linear-gradient(145deg, #00C896 0%, #00A878 30%, #1A1A2E 100%)',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}reciboLogo.png`}
              alt="ReceiptNow"
              className="w-20 h-20 opacity-50"
            />
            <p className="text-white/40 text-xs font-semibold tracking-wide">Screenshot coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}
