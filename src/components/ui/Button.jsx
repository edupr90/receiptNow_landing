import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  dark: 'bg-secondary hover:bg-secondary/90 text-white',
  white: 'bg-white hover:bg-gray-100 text-secondary',
  'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-secondary',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center font-bold rounded-md transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }

  return <button className={classes} {...props}>{children}</button>
}
