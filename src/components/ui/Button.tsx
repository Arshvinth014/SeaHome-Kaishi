import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer focus:outline-none';
  
  const variants = {
    primary: 'bg-[#0066FF] hover:bg-blue-700 text-white shadow-sm',
    secondary: 'bg-teal-500 hover:bg-teal-600 text-white shadow-sm',
    outline: 'border border-slate-200 hover:bg-slate-50 text-slate-700',
    ghost: 'hover:bg-slate-100 text-slate-600',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}