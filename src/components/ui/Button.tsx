import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
        variant === 'ghost' && 'text-[var(--color-text)] hover:bg-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
