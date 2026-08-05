import { cn } from '@/lib/utils'

interface TagProps {
  label: string
  className?: string
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]',
        className
      )}
    >
      {label}
    </span>
  )
}
