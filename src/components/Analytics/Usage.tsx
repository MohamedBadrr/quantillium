import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const maxUsage = 10000
const usageValue = 7500
const usagePercentage = (usageValue / maxUsage) * 100

const endAngle = 90 - (usagePercentage / 100) * 270

const chartData = [{ usage: "Usage", count: usageValue }]

const chartConfig = {
  usage: {
    label: "Usage",
  },
} satisfies ChartConfig;

const Usage = () => {
  return (
    <Card className="lg:max-w-[390px] w-full max-h-[264px] max-sm:max-h-max">
      <CardTitle>API Usage Breakdown</CardTitle>
      <CardContent className="h-full flex items-center justify-between mt-[23px] max-sm:flex-wrap gap-y-[16px] max-sm:justify-center">
        <div className="flex items-start justify-start flex-col gap-[24px] max-sm:flex-row">
            <div className="flex items-start justify-start flex-col gap-[6px] text-accent">
                <span className="text-[10px] text-[#959595]">Used API Calls</span>
                <span className="flex items-center gap-[6px] text-[14px]"><span className="text-primary">&bull;</span>7,500 calls</span>
            </div>
            <div className="flex items-start justify-start flex-col gap-[6px] text-accent">
                <span className="text-[10px] text-[#959595]">Remaining API Calls</span>
                <span className="flex items-center gap-[6px] text-[14px]"><span className="text-[#0C133F]">&bull;</span>2,500 calls</span>
            </div>
        </div>
        <ChartContainer
          config={chartConfig}
          className="h-[178px] max-w-[178px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={endAngle}
            innerRadius={83}
            outerRadius={113}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-primary/20 last:fill-[#0f0f0f]"
              polarRadius={[90, 76]}
            />
            <RadialBar dataKey="count" className="fill-primary" />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-[29px] font-light"
                        >
                          $175.00
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Usage;
