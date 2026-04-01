import { cn } from '../../lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = { sm: 'p-4', md: 'p-6 md:p-8', lg: 'p-8 md:p-10' };

export default function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: Props) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl',
        hover &&
          'hover:bg-white/[0.08] hover:border-royal-500/30 transition-all duration-500',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}