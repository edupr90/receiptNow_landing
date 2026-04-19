import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/reciboLogo.png" alt="ReceiptNow" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold">ReceiptNow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered receipt scanner and expense tracker. Take control of your finances with smart technology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-bold text-lg mb-4">Download</h3>
            <div className="space-y-3">
              <a href="#download" className="block transition-transform hover:scale-105">
                <img src="/appstore.png" alt="Download on the App Store" className="h-10 w-auto" />
              </a>
              <a href="#download" className="block transition-transform hover:scale-105">
                <img src="/playstore.png" alt="Get it on Google Play" className="h-10 w-auto" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ReceiptNow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
