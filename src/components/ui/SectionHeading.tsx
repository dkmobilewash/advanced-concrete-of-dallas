import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  variant = 'light',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const isDark = variant === 'dark'

  return (
    <div className={cn('mb-12', isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left')}>
      {eyebrow && (
        <div className={cn('flex items-center gap-3 mb-3', isCenter && 'justify-center')}>
          <span className="h-0.5 w-10 bg-accent" />
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={cn('font-display font-semibold text-3xl md:text-4xl', isDark ? 'text-white' : 'text-dark')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-base leading-relaxed', isDark ? 'text-gray-300' : 'text-mid')}>{subtitle}</p>
      )}
    </div>
  )
}
