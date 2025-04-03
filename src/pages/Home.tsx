import Errors from "@/components/Common/Errors";
import Header from "@/components/Common/Header";
import PlanDetails from "@/components/Common/PlanDetails";
import QuickActions from "@/components/Home/QuickActions";
import Requests from "@/components/Home/Requests";
import ResponseTime from "@/components/Home/ResponseTime";
import Support from "@/components/Home/Support";
import TotalRequests from "@/components/Common/TotalRequests";
import { useState } from "react";
import SubscriptionEnd from "@/components/Common/SubscriptionEnd";
import Fade from "@/components/Effects/Fade";
import { BlurIn } from "@/components/Effects/Blur";
// import { useApiQuery } from "@/hooks/useAPIQuery";
// import { useApiMutation } from "@/hooks/useAPIMutation";

const Home = () => {
  const [period, setPeriod] = useState("today");
  return (
    <BlurIn className="w-full">
      <Fade direction="down" className="flex flex-col w-full mx-auto">
        {/* Header */}
        <Header
          period={period}
          onSetPeriod={(v) => setPeriod(v)}
          title="Good Morning, Ayoub"
          subtitle="Updated: Today, 01:48 AM"
        />

        {/* Main */}
        <div className="flex flex-col items-start justify-start mt-[40px] gap-[24px] flex-wrap">
          {/* Subscription End Alert */}
          <SubscriptionEnd value={90} limit={100} />

          <div className="flex items-start justify-center w-full gap-[24px] flex-wrap">
            {/* Requests */}
            <Requests />

            {/* Quick Actions */}
            <QuickActions />
          </div>

          <div className="flex items-start justify-center w-full gap-[24px] flex-wrap">
            {/* Total Requests */}
            <TotalRequests requests={18432} grow={30} period="Yesterday" />

            {/* Response Time */}
            <ResponseTime />

            {/* Errors */}
            <Errors rate={0.2} grow={2.3} negative period="Yesterday" />
          </div>

          <div className="flex items-start justify-end w-full gap-[24px] flex-wrap">
            {/* Plan Details */}
            <PlanDetails
              limit={50000}
              value={45000}
              plan="Pro API (On-Demand)"
            />

            {/* Support */}
            <Support />
          </div>
        </div>
      </Fade>
    </BlurIn>
  );
};

export default Home;
