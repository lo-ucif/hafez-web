import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#1a5a81] text-white hover:bg-[#154e70] active:bg-[#0f3d58]',
  gold: 'bg-[#cab178] text-white hover:bg-[#b89d60] active:bg-[#a68c52]',
  outline:
    'bg-transparent border border-[rgba(255,255,255,0.2)] text-white hover:bg-white/10 active:bg-white/20',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-[16px] py-[6px] text-[14px]',
  md: 'px-[23px] py-[10px] text-[18px]',
  lg: 'px-[27px] py-[12px] text-[20px]',
};

/**
 * Generic Button component used throughout the app.
 * Supports three visual variants (primary / gold / outline) and three sizes.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        inline-flex items-center justify-center
        font-['Almarai:Regular'] not-italic leading-none
        transition-colors duration-200
        cursor-pointer
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
