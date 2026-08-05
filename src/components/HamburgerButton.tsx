interface HamburgerButtonProps {
  open: boolean
  onClick: () => void
}

export default function HamburgerButton({ open, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
    >
      <span
        className={`block h-0.5 w-6 bg-navy transition-transform duration-300 ${
          open ? 'translate-y-2 rotate-45' : ''
        }`}
      />
      <span className={`block h-0.5 w-6 bg-navy transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
      <span
        className={`block h-0.5 w-6 bg-navy transition-transform duration-300 ${
          open ? '-translate-y-2 -rotate-45' : ''
        }`}
      />
    </button>
  )
}
