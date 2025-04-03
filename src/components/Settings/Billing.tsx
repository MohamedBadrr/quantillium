import { BlurIn } from "../Effects/Blur";
import CancelSubscription from "./Billing/CancelSubscription";
import CurrentPlan from "./Billing/CurrentPlan";
import History from "./Billing/History";

const Billing: React.FC<{ onPlansOpen: (e: boolean) => void }> = ({ onPlansOpen }) => {
  return (
    <BlurIn className="flex flex-col flex-grow gap-y-[24px]">
      {/* Current Plan */}
      <CurrentPlan onPlansOpen={onPlansOpen} />

      {/* Billing History */}
      <History />

      {/* Cancel Subscription */}
      <CancelSubscription />
    </BlurIn>
  );
};

export default Billing;
