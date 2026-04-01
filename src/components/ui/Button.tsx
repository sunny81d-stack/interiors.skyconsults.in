import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 font-body';

  const variants = {
    primary:
      'bg-royal-500 text-white hover:bg-royal-600 shadow-lg shadow-royal-500/25',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 border border-white/10',
    outline:
      'border-2 border-royal-500/30 text-royal-300 hover:bg-royal-500/10',
    ghost:
      'bg-transparent text-silver-300 hover:bg-white/5 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const styles = `${baseStyles} ${variants[variant || 'primary']} ${sizes[size || 'md']} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}