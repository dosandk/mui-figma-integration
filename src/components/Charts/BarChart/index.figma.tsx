import { BarChart } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  BarChart,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=12032%3A83455",
  {
    variant: { Type: 'Grouped Bars' },
    props: {
      legendProps: figma.nestedProps("Elements / Legend", {
        direction: figma.string("Direction"),
        series1: figma.string("Series 1"),
        series2: figma.string("Series 2"),
      }),
      //   type: figma.enum("Type", {
      //     Simple: "simple",
      //     "Grouped Bars": "grouped-bars",
      //     "Stacked Bars": "stacked-bars",
      //   }),
      // xAxis: figma.boolean("X Axis?"),
      yAxis: figma.enum("Y Axis?", {
        True: "true",
        False: "false",
        Biaxial: "biaxial",
      }),
    },
    example: ({ ...props }) => {
      // NOTE: replace hardcoded values by your own
      const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
      const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
      const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
      ];
      return (
        <BarChart
          {...props}
          series={[
            { data: pData, label: 'pv', id: 'pvId' },
            { data: uData, label: 'uv', id: 'uvId' },
          ]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
      );
    }
  },
)

figma.connect(
  BarChart,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=12032%3A83455",
  {
    variant: { Type: 'Simple' },
    example: ({ ...props }) => {
      // NOTE: replace hardcoded values by your own
      const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
      const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
      const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
      ];

      return (
        <BarChart
          {...props}
          series={[
            { data: pData, label: 'pv', id: 'pvId' },
            { data: uData, label: 'uv', id: 'uvId' },
          ]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
      )
    }
  });

