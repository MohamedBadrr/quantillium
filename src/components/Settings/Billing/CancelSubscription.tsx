import { Button } from "@/components/ui/button";
import { useState } from "react";
import CancelSubscriptionDialog from "./CancelDialog";
import Fade from "@/components/Effects/Fade";

const CancelSubscription = () => {
  const [cancelOpen, setCancelOpen] = useState(false);

  return (
    <>
      <Fade
        direction="down"
        className="flex flex-grow w-full items-center justify-between flex-wrap bg-[#0f0f0f] p-[32px] max-sm:p-[16px] gap-y-[16px]"
      >
        <Fade direction="down" className="flex flex-col">
          <h3 className="text-[24px] font-light">Cancel Subscription</h3>
          <p className="mt-[12px] text-white/50 leading-[26px]">
            If you wish to cancel your subscription, please follow the steps
            below.
          </p>
        </Fade>

        <Button
          variant="outline-destructive"
          className="px-[24px] h-[47px] max-sm:w-full text-[14px] font-light"
          onClick={() => setCancelOpen(true)}
        >
          Cancel Subscription
        </Button>
      </Fade>

      <CancelSubscriptionDialog
        open={cancelOpen}
        onOpenChange={setCancelOpen}
      />
    </>
  );
};

export default CancelSubscription;
