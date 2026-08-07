import type { ProcessStep } from '@/types'

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div
      className="grid gap-px bg-rule"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
    >
      {steps.map((step, i) => (
        <div key={step.title} className="border border-rule bg-white p-6">
          <span className="font-heading text-4xl font-bold text-silver/20">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-3 text-navy">{step.title}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-mid">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
