import { useSampleThroughput } from '@/api';
import { DashboardCard } from '@/components/cards';
import { LineChart } from '@/components/charts/LineChart';
import type { ChartConfig } from '@/components/ui';
import { useDashboardContext } from '@/context';

const DashboardPage = () => {
  const { dateRange } = useDashboardContext();
  const { data, loading, error } = useSampleThroughput(dateRange);

  const chartConfig = {
    count: {
      label: 'Samples Processed',
      color: 'var(--color-chart-1)',
    },
  } satisfies ChartConfig;

  const variant = error ? 'error' : undefined;

  return (
    <div className="p-6">
      <div className="grid grid-cols-12 gap-6">
        {loading && <div className="col-span-12">Loading...</div>}
        {error && !loading && <div className="col-span-12">Error: {error}</div>}
        {!loading && !error && (
          <>
            <DashboardCard
              title="Samples Processed Per Day"
              span={{ default: 12, lg: 6 }}
              variant={variant}
            >
              <LineChart
                chartConfig={chartConfig}
                chartData={data}
                xAxisKey="date"
                yAxisKey="count"
              />
            </DashboardCard>
            <DashboardCard
              title="Sample Breakdown By Location And Type"
              span={{ default: 12, lg: 6 }}
            >
              TABLE
            </DashboardCard>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
