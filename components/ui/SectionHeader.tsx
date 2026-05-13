import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-10', className)}>
      <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-base text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
