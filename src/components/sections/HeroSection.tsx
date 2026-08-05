import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  ctaText2?: string
  ctaHref2?: string
  imageSrc: string
  imageAlt: string
  height?: 'full' | 'tall' | 'medium' | 'short'
  align?: 'left' | 'center'
  showScrollChevron?: boolean
  priority?: boolean
}

const heightClasses: Record<NonNullable<HeroSectionProps['height']>, string> = {
  full: 'h-screen min-h-[560px]',
  tall: 'h-[600px]',
  medium: 'h-[400px]',
  short: 'h-[300px]',
}

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  ctaText2,
  ctaHref2,
  imageSrc,
  imageAlt,
  height = 'medium',
  align = 'center',
  showScrollChevron = false,
  priority = false,
}: HeroSectionProps) {
  const isLeft = align === 'left'

  return (
    <section
      className={cn('relative flex w-full items-center overflow-hidden', heightClasses[height])}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: noiseTexture }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className={cn('max-w-2xl', isLeft ? 'text-left' : 'mx-auto text-center')}>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-base leading-relaxed text-gray-200 md:text-lg">{subtitle}</p>
          )}
          {(ctaText || ctaText2) && (
            <div className={cn('mt-8 flex flex-wrap gap-4', !isLeft && 'justify-center')}>
              {ctaText && ctaHref && (
                <Button href={ctaHref} variant="primary">
                  {ctaText}
                </Button>
              )}
              {ctaText2 && ctaHref2 && (
                <Button href={ctaHref2} variant="secondary">
                  {ctaText2}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {showScrollChevron && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounceChevron">
          <ChevronDown className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
      )}
    </section>
  )
}
