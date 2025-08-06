import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { type ColumnSpan, responsiveSpanClassMap, spanClassMap, variantStyles } from './variants';

export interface DashboardCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  span?: {
    default?: ColumnSpan;
    md?: ColumnSpan;
    lg?: ColumnSpan;
    xl?: ColumnSpan;
  };
}

export function DashboardCard({
  title,
  description,
  children,
  className,
  variant = 'default',
  span,
}: DashboardCardProps) {
  const spanClasses = span
    ? [
        span.default && spanClassMap[span.default],
        span.md && responsiveSpanClassMap.md[span.md],
        span.lg && responsiveSpanClassMap.lg[span.lg],
        span.xl && responsiveSpanClassMap.xl[span.xl],
      ]
        .filter(Boolean)
        .join(' ')
    : '';

  return (
    <Card className={cn(variantStyles[variant], spanClasses, className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
