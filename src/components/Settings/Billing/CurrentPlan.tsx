import Fade from "@/components/Effects/Fade";
import PlanDetails from "../../Common/PlanDetails";
import { Button } from "../../ui/button";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const CurrentPlan: React.FC<{ onPlansOpen: (e: boolean) => void }> = ({
  onPlansOpen,
}) => {
  const [searchParams , setSearchParams] = useSearchParams();
  console.log(searchParams.get("success"));
  
  if(searchParams.get("success") === "true"){
    toast.success("Transaction Successes.")
  }else if (searchParams.get("success") === "false"){
    toast.error("Transaction Fails.")
  }
  
  return (
    <Fade direction="down" className="flex flex-col flex-grow bg-[#0f0f0f] p-[32px] max-sm:p-[16px]">
      <h3 className="text-[24px] font-light">Current Plan</h3>
      <p className="mt-[12px] text-white/50 leading-[26px]">
        View your current subscription details and upgrade if needed.
      </p>

      <Fade direction="down" className="mt-[32px] w-full p-[32px] max-sm:p-[16px] flex flex-col bg-white/2">
        <div className="w-full flex items-center">
          <PlanDetails plan="Starter" limit={50000} value={44892} mini />
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center justify-between flex-wrap gap-y-[12px]">
          <h3 className="text-[24px] font-light">$99/mo</h3>
          <Button
            variant="outline"
            className="px-[24px] h-[47px] max-sm:w-full text-[14px] font-light"
            onClick={() => onPlansOpen(true)}
          >
            Upgrade Plan
          </Button>
        </div>
      </Fade>
    </Fade>
  );
};

export default CurrentPlan;
