import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}

export function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'primary' &&
          'bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300',
        variant === 'outline' &&
          'border border-border text-text-muted',
        variant === 'default' &&
          'bg-surface-subtle text-text-secondary dark:bg-neutral-800 dark:text-neutral-300',
        className
      )}
    >
      {label}
    </span>
  );
}
