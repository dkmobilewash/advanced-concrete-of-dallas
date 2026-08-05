import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  icon?: LucideIcon
  children: React.ReactNode
  className?: string
}

export default function Badge({ icon: Icon, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-light px-4 py-2 text-sm font-medium text-primary font-body',
        className
      )}
    >
      {Icon && <Icon className="h-4 w-4 text-accent" aria-hidden="true" />}
      {children}
    </span>
  )
}
