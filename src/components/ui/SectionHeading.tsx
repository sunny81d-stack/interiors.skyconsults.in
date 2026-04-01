import { cn } from '../../lib/utils';
import AnimatedSection from './AnimatedSection';

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
}: Props) {
  return (
    <div className={cn('mb-16', align === 'center' && 'text-center')}>
      {label && (
        <AnimatedSection>
          <p className="font-accent text-xs tracking-[0.35em] uppercase text-royal-400 mb-4">
            {label}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gradient">
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p
            className={cn(
              'mt-5 text-lg max-w-2xl font-body font-light text-silver-400',
              align === 'center' && 'mx-auto'
            )}
          >
            {subtitle}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.3}>
        <div
          className={cn(
            'mt-8 gradient-line w-24',
            align === 'center' && 'mx-auto'
          )}
        />
      </AnimatedSection>
    </div>
  );
}