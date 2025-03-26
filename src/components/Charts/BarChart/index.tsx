import {
  BarChart as MuiBarChart,
  BarChartProps as MuiBarChartProps
} from '@mui/x-charts/BarChart';

export interface BarChartProps extends MuiBarChartProps { }

export const BarChart = (props: BarChartProps) => {
  return (
    <MuiBarChart {...props} />
  );
}
