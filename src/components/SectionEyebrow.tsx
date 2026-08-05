interface SectionEyebrowProps {
  eyebrow: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark'
}

export default function SectionEyebrow({
  eyebrow,
  heading,
  subtitle,
  align = 'center',
  variant = 'light',
}: SectionEyebrowProps) {
  const isCenter = align === 'center'
  const isDark = variant === 'dark'

  return (
    <div className={`mb-10 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left'}`}>
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="block h-[2px] w-10 bg-gold" />
        <span
          className={`font-heading text-xs font-semibold uppercase tracking-[0.15em] ${
            isDark ? 'text-gold-lt' : 'text-gold'
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className={isDark ? 'text-white' : 'text-navy'}>{heading}</h2>
      {subtitle && (
        <p
          className={`mt-4 font-serif italic text-lg ${
            isDark ? 'text-white/70' : 'text-mid'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
