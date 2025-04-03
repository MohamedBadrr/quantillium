import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
    { time: "00:00", requests: 186 },
    { time: "01:00", requests: 100 },
    { time: "02:00", requests: 186 },
    { time: "03:00", requests: 56 },
    { time: "04:00", requests: 24 },
    { time: "05:00", requests: 200 },
    { time: "06:00", requests: 105 },
    { time: "07:00", requests: 182 },
    { time: "08:00", requests: 106 },
    { time: "09:00", requests: 86 },
    { time: "10:00", requests: 96 },
    { time: "11:00", requests: 89 },
    { time: "12:00", requests: 186 },
    { time: "13:00", requests: 30 },
    { time: "14:00", requests: 316 },
    { time: "15:00", requests: 116 },
    { time: "16:00", requests: 126 },
    { time: "17:00", requests: 176 },
    { time: "18:00", requests: 166 },
    { time: "19:00", requests: 156 },
    { time: "20:00", requests: 176 },
    { time: "21:00", requests: 400 },
];

const chartConfig = {
    requests: {
        label: "Requests",
        color: "#fff",
    },
} satisfies ChartConfig;

const RequestsAnalytics = () => {
    const [xAxisAngle, setXAxisAngle] = useState(0);

    useEffect(() => {
        const updateAngle = () => {
            setXAxisAngle(window.innerWidth < 768 ? -90 : 0);
        };

        updateAngle();
        window.addEventListener("resize", updateAngle);

        return () => window.removeEventListener("resize", updateAngle);
    }, []);

    return (
        <Card className="flex-grow h-[264px] max-w-full">
            <CardTitle>Requests</CardTitle>
            <CardContent className="h-full">
                <div
                    style={{
                        width: "100%",
                        height: "170px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <ChartContainer
                            config={chartConfig}
                            style={{ width: "100%", height: "100%" }}
                        >
                            <AreaChart
                                accessibilityLayer
                                data={chartData}
                                margin={{ left: -25 }}
                            >
                                <YAxis tickLine={false} axisLine={false} />
                                <XAxis
                                    dataKey="time"
                                    tickLine={false}
                                    tickMargin={xAxisAngle === -90 ? 0 : 10}
                                    axisLine={false}
                                    fontSize={8}
                                    interval={0}
                                    angle={xAxisAngle}
                                    textAnchor={xAxisAngle === -90 ? "end" : "middle"}
                                />
                                <Area
                                    dataKey="requests"
                                    type="linear"
                                    fill="url(#fillRequests)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-primary)"
                                    stackId="a"
                                />
                                <defs>
                                    <linearGradient id="fillRequests" x1="0" y1="0" x2="0" y2="1">
                                        <stop
                                            offset="5%"
                                            stopColor="var(--color-primary)"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="var(--color-primary)"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                            </AreaChart>
                        </ChartContainer>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default RequestsAnalytics;
