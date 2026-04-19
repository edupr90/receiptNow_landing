export default function StoreButtons({ className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a href="#download" className="transition-transform hover:scale-105">
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
