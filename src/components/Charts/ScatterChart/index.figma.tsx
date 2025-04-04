import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import figma from "@figma/code-connect";

figma.connect(ScatterChart, "<FIGMA_SCATTER_CHART>", {
  example: () => {
    const data1 = [
      { x: 100, y: 200, id: 1 },
      { x: 120, y: 100, id: 2 },
      { x: 170, y: 300, id: 3 },
      { x: 140, y: 250, id: 4 },
      { x: 150, y: 400, id: 5 },
      { x: 110, y: 280, id: 6 },
      { x: 130, y: 320, id: 7 },
      { x: 160, y: 180, id: 8 },
      { x: 125, y: 220, id: 9 },
      { x: 155, y: 350, id: 10 },
    ];

    const data2 = [
      { x: 300, y: 300, id: 1 },
      { x: 400, y: 500, id: 2 },
      { x: 200, y: 700, id: 3 },
      { x: 340, y: 350, id: 4 },
      { x: 560, y: 500, id: 5 },
      { x: 230, y: 780, id: 6 },
      { x: 500, y: 400, id: 7 },
      { x: 300, y: 500, id: 8 },
      { x: 240, y: 300, id: 9 },
      { x: 320, y: 550, id: 10 },
      { x: 500, y: 400, id: 11 },
      { x: 420, y: 280, id: 12 },
      { x: 280, y: 450, id: 13 },
      { x: 380, y: 600, id: 14 },
      { x: 260, y: 380, id: 15 },
    ];

    return (
      <ScatterChart
        width={600}
        height={400}
        series={[
          {
            data: data1,
            yAxisId: "leftAxis",

            valueFormatter: ({ x, y }) => x + "cm, " + y + "kg",
          },
          {
            data: data2,
            yAxisId: "rightAxis",

            valueFormatter: ({ x, y }) => x + "cm, " + y + "kg",
          },
        ]}
        xAxis={[{ min: 0 }]}
        yAxis={[
          { id: "leftAxis", min: 0 },
          { id: "rightAxis", min: 0 },
        ]}
        rightAxis="rightAxis"
        grid={{ vertical: true, horizontal: true }}
        sx={{
          ["& ." + axisClasses.left]: {
            line: { stroke: "#8884d8" },
            text: { fill: "#8884d8" },
          },
          ["& ." + axisClasses.right]: {
            line: { stroke: "#82ca9d" },
            text: { fill: "#82ca9d" },
          },
        }}
      />
    );
  },
});
