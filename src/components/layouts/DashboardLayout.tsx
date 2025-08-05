import { Typography } from '@/components/ui/typography';

export const DashboardLayout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-6 py-4 shadow-2xl border-b border-border">
        <div>
          <Typography variant="h1" size="2xl">
            {title || 'Dashboard'}
          </Typography>
          <Typography variant="muted" color="muted" size="sm">
            {description || 'QBench case study demo dashboard'}
          </Typography>
        </div>
      </header>
      <main className="flex-1 p-6 bg-slate-100">{children}</main>
    </div>
  );
};
