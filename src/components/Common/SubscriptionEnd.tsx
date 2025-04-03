import alert from "@/assets/alert.svg";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const SubscriptionEnd: React.FC<SubscriptionEndProps> = ({ value, limit }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full border border-border lg:px-[32px] px-[16px] lg:py-[24px] py-[12px] flex items-center justify-between gap-x-[30px] flex-wrap gap-y-[24px]">
      <div className="flex items-center justify-center gap-[24px]">
        <img src={alert} width={60} height={60} alt="Alert" />

        <div className="flex flex-col gap-y-[4px]">
          <h2 className="text-[24px] font-light text-accent">
            {value >= limit ? "Free Plan Limit Reached" : "Approaching Limit"}
          </h2>

          <span className="text-[#959595] text-[14px]">
            {value >= limit
              ? "You're on the free plan and have hit your API call limit. Upgrade now to continue using our service without restrictions."
              : "92% of your quota used. Upgrade to avoid limits."}
          </span>
        </div>
      </div>

      {value < limit && (
        <Progress
          className="flex-grow lg:w-fit w-full"
          value={value}
          asDestructive
        />
      )}

      <Button
        onClick={() =>
          navigate("/settings#billing", { state: { upgrade: true } })
        }
        className="text-[16px] leading-[115%] h-[50px] px-[32px] py-[16px] max-lg:flex-grow ms-auto"
        variant="secondary"
      >
        Upgrade
      </Button>
    </div>
  );
};

export default SubscriptionEnd;
