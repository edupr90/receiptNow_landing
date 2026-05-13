export default function StoreButtons({ className = '' }) {
  return (
    <div className={`flex flex-row gap-3 ${className}`}>
      <a href="https://apps.apple.com/us/app/receiptnow-receipt-scanner/id6760916767" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
        <img
          src={`${import.meta.env.BASE_URL}appstore.png`}
          alt="Download on the App Store"
          className="h-12 w-auto"
        />
      </a>
      <a href="#download" className="transition-transform hover:scale-105">
        <img
          src={`${import.meta.env.BASE_URL}playstore.png`}
          alt="Get it on Google Play"
          className="h-12 w-auto"
        />
      </a>
    </div>
  )
}
