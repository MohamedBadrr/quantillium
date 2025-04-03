import Header from "@/components/Common/Header";
import PlanDetails from "@/components/Common/PlanDetails";
import { useState } from "react";
import SubscriptionEnd from "@/components/Common/SubscriptionEnd";
import Fade from "@/components/Effects/Fade";
import { BlurIn } from "@/components/Effects/Blur";
import Unlock from "@/components/Home/Unlock";

const HomeLocked = () => {
  const [period, setPeriod] = useState("today");

  return (
    <Fade direction="down" className="flex flex-col w-full mx-auto">
      <BlurIn>
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
          <SubscriptionEnd value={100} limit={100} />

          <div className="flex items-center justify-end w-full gap-[24px] flex-wrap">
            {/* Plan Details */}
            <PlanDetails
              limit={100}
              value={100}
              plan="Free Plan"
              large
            />

            {/* Support */}
            <Unlock />
          </div>
        </div>
      </BlurIn>
    </Fade>
  );
};

export default HomeLocked;
