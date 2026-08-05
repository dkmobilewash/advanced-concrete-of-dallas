import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline-navy'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary',
  'outline-navy': 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
}

const baseClasses =
  'font-display font-semibold uppercase tracking-wide text-sm inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md transition-colors duration-200 min-h-[44px]'

interface CommonProps {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

interface LinkButtonProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> {
  href: string
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined
}

type ButtonProps = LinkButtonProps | NativeButtonProps

export default function Button({ variant = 'primary', className, children, href, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className)

  if (href) {
    const isExternalScheme = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')
    if (isExternalScheme) {
      return (
        <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
