import { type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { typographyVariants } from './typographyVariants';

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, size, weight, color, align, as, ...props }, ref) => {
    // Use 'as any' to bypass complex TypeScript union type issues with dynamic components.
    // This allows JSX syntax which provides better ref handling, DevTools integration, and Fast Refresh.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = (as || getDefaultElement(variant || 'p')) as any;

    return (
      <Component
        className={cn(typographyVariants({ variant, size, weight, color, align, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

// Helper function to determine default element based on variant
function getDefaultElement(variant: string): keyof React.JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'p':
      return 'p';
    case 'lead':
      return 'p';
    case 'large':
      return 'div';
    case 'small':
      return 'small';
    case 'muted':
      return 'p';
    case 'code':
      return 'code';
    case 'blockquote':
      return 'blockquote';
    case 'list':
      return 'ul';
    case 'inlineCode':
      return 'code';
    default:
      return 'p';
  }
}

export { Typography };
