import { BlurIn } from "@/components/Effects/Blur";
import Fade from "@/components/Effects/Fade";
import Header from "@/components/Common/Header";
import Errors from "@/components/Common/Errors";
import TotalRequests from "@/components/Common/TotalRequests";
import { useState } from "react";
import RequestsAnalytics from "@/components/Analytics/Requests";
import Usage from "@/components/Analytics/Usage";
import PlanDetails from "@/components/Common/PlanDetails";

const Analytics = () => {
  const [period, setPeriod] = useState("today");

  return (
    <BlurIn className="w-full">
      <Fade direction="down" className="flex flex-col w-full mx-auto">
        {/* Header */}
        <Header
          title="Usage Analytics"
          subtitle="Updated: Today, 01:48 AM"
          period={period}
          onSetPeriod={setPeriod}
        />

        <div className="flex flex-col items-start justify-start mt-[40px] gap-[24px] flex-wrap">
          <div className="flex items-start justify-center w-full gap-[24px] flex-wrap">
            {/* Total Requests */}
            <TotalRequests
              extraTitle="Today"
              requests={18432}
              grow={30}
              period="Yesterday"
            />
            <TotalRequests
              extraTitle="This Month"
              requests={450890}
              grow={15}
              period="Yesterday"
            />

            {/* Errors */}
            <Errors
              rate={0.2}
              extraTitle="Rate"
              grow={2.3}
              negative
              period="Yesterday"
            />
          </div>

          <div className="flex items-start justify-center w-full gap-[24px] flex-wrap">
            {/* Requests */}
            <RequestsAnalytics />

            {/* Usage */}
            <Usage />
          </div>

          <div className="flex items-start justify-end w-full gap-[24px] flex-wrap">
            {/* Plan Details */}
            <PlanDetails
              limit={50000}
              value={45000}
              plan="Pro API (On-Demand)"
            />
          </div>
        </div>
      </Fade>
    </BlurIn>
  );
};

export default Analytics;
