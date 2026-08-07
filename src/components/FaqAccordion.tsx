import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from './icons'
import type { FaqItem } from '@/types'

interface FaqAccordionProps {
  items: FaqItem[]
  variant?: 'light' | 'dark'
}

export default function FaqAccordion({ items, variant = 'light' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isDark = variant === 'dark'

  return (
    <div className={`divide-y ${isDark ? 'divide-white/15' : 'divide-rule'}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.question} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 text-left font-heading text-base font-semibold ${
                isDark ? 'text-white' : 'text-navy'
              }`}
            >
              {item.question}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`shrink-0 ${isDark ? 'text-silver-lt' : 'text-silver'}`}
              >
                <Plus className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className={`pt-3 font-body text-sm leading-relaxed ${isDark ? 'text-white/75' : 'text-mid'}`}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
