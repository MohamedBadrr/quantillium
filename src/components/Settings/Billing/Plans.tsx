import { Button } from "@/components/ui/button";
import x from "@/assets/close.svg";
import Fade from "@/components/Effects/Fade";
import Enterprise from "./Enterprise";
import PayAsYouGo from "./PayAsYouGo";
import { useUser } from "@/context/UserContext";
import { SENDPLANE } from "@/types/Plane";
import { useApiMutation } from "@/hooks/useAPIMutation";
import { SENDPLANEResponse, upgradePlane } from "@/services/planes/upgradePlane";
import { toast } from "sonner";

const Plans: React.FC<PlansDialog> = ({ open, onOpenChange }) => {
  const { user } = useUser();
  const PLANS = {
    plan1: {
      description: "Payment for premium subscription",
      currency: "USD",
      userId: user?.id as string,
      callsType: "PLAN",
      callsId: 1,
      callsAmount: 100,
    },
    plan2: {
      description: "Payment for premium subscription",
      currency: "USD",
      userId: user?.id as string,
      callsType: "PLAN",
      callsId: 2,
      callsAmount: 100,
    },
    plan3: {
      description: "Payment for premium subscription",
      currency: "USD",
      userId: user?.id as string,
      callsType: "PLAN",
      callsId: 3,
      callsAmount: 100,
    },
  };

  const { mutate } = useApiMutation({
    mutationKey: ["upgrade-Plane"],
    mutationFn: upgradePlane,
  });
  if (!open) return null;
  const handleChoosePlane = (values: SENDPLANE) => {
    mutate({
      callsAmount: values.callsAmount,
      callsId: values.callsId,
      callsType: values.callsType,
      currency: values.currency,
      description: values.description,
      userId: values.userId,
    },
  {
    onSuccess:(data:SENDPLANEResponse)=>{
      window.location.href = data.data.paymentUrl 
    },
    onError:()=>{
      toast.error("Some thing went Wrong")
    }
  });
  };

  return (
    <Fade
      direction="up"
      className="flex flex-col absolute top-0 left-0 right-0 bg-black min-h-full gap-y-[24px] pb-[40px]"
    >
      <div className="flex flex-col bg-[#0f0f0f] p-[32px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[24px] ">Plans</h2>

          <Button
            variant="outline"
            className="w-[52px] h-[52px] !p-0"
            onClick={() => onOpenChange(false)}
          >
            <img src={x} alt="Close Icon" />
          </Button>
        </div>

        <div className="mt-[32px] flex flex-col gap-y-[36px]">
          <div className="flex items-center justify-end gap-x-[12px] w-full flex-wrap gap-y-[12px]">
            <div className="flex flex-col border w-[233.5px] max-w-full max-sm:w-full">
              <div className="flex flex-col p-[16px] ">
                <span className="text-white/30 text-[14px]">Free</span>
                <h2 className="mt-[4px] text-[32px]">
                  $0<small className="text-[18px]">/mo</small>
                </h2>
                <span className="mt-[15px] text-[10px] text-white/50">
                  Great to test the product.
                </span>
              </div>

              <Button className="bg-[#333] h-[47px] w-full pointer-events-none">
                Current Plan
              </Button>
            </div>

            <div className="flex flex-col border w-[233.5px] max-w-full max-sm:w-full">
              <div className="flex flex-col p-[16px]">
                <span className="text-white/30 text-[14px]">Starter</span>
                <h2 className="mt-[4px] text-[32px]">
                  $99<small className="text-[18px]">/mo</small>
                </h2>
                <span className="mt-[15px] text-[10px] text-white/50">
                  Ideal for x.
                </span>
              </div>

              <Button
                className="h-[47px] w-full border-b-0 border-l-0 border-r-0"
                variant="outline"
                onClick={() => {
                  handleChoosePlane(PLANS.plan1);
                }}
              >
                Upgrade Plan
              </Button>
            </div>

            <div className="flex flex-col border w-[233.5px] max-w-full max-sm:w-full">
              <div className="flex flex-col p-[16px]">
                <span className="text-white/30 text-[14px]">Starter</span>
                <h2 className="mt-[4px] text-[32px]">
                  $499<small className="text-[18px]">/mo</small>
                </h2>
                <span className="mt-[15px] text-[10px] text-white/50">
                  Ideal for x.
                </span>
              </div>

              <Button
                className="h-[47px] w-full border-b-0 border-l-0 border-r-0"
                variant="outline"
                onClick={() => {
                  handleChoosePlane(PLANS.plan2);
                }}
              >
                Upgrade Plan
              </Button>
            </div>

            <div className="flex flex-col border w-[233.5px] max-w-full max-sm:w-full">
              <div className="flex flex-col p-[16px]">
                <span className="text-white/30 text-[14px]">Starter</span>
                <h2 className="mt-[4px] text-[32px]">
                  $999<small className="text-[18px]">/mo</small>
                </h2>
                <span className="mt-[15px] text-[10px] text-white/50">
                  Ideal for x.
                </span>
              </div>

              <Button
                className="h-[47px] w-full border-b-0 border-l-0 border-r-0"
                variant="outline"
                onClick={() => {
                  handleChoosePlane(PLANS.plan3);
                }}
              >
                Upgrade Plan
              </Button>
            </div>
          </div>

          <Fade direction="down" className="mt-[36px] w-full">
            <div className="w-full py-[24px] text-[14px] border-t-[#212121] border-t-[1px] flex items-center justify-between flex-wrap">
              <div className="w-[calc(100%/5)] max-sm:w-full text-white/60">
                API Calls /mo
              </div>
              <div className="w-[calc(100%/5)] max-sm:w-full">25</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">250</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">1000</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">2500</div>
            </div>

            <div className="w-full py-[24px] text-[14px] border-t-[#212121] border-t-[1px] flex items-center justify-between flex-wrap">
              <div className="w-[calc(100%/5)] max-sm:w-full text-white/60">
                API Call Limits /day
              </div>
              <div className="w-[calc(100%/5)] max-sm:w-full">5</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">50</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">250</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">500</div>
            </div>

            <div className="w-full py-[24px] text-[14px] border-t-[#212121] border-t-[1px] flex items-center justify-between flex-wrap">
              <div className="w-[calc(100%/5)] max-sm:w-full text-white/60">
                Allowed Exchanges
              </div>
              <div className="w-[calc(100%/5)] max-sm:w-full">1</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">3</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">10</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">25</div>
            </div>

            <div className="w-full py-[24px] text-[14px] border-t-[#212121] border-t-[1px] flex items-center justify-between flex-wrap">
              <div className="w-[calc(100%/5)] max-sm:w-full text-white/60">
                Product Type
              </div>
              <div className="w-[calc(100%/5)] max-sm:w-full">All</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">All</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">All</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">All</div>
            </div>

            <div className="w-full py-[24px] text-[14px] border-t-[#212121] border-t-[1px] flex items-center justify-between flex-wrap">
              <div className="w-[calc(100%/5)] max-sm:w-full text-white/60">
                History
              </div>
              <div className="w-[calc(100%/5)] max-sm:w-full">12 Month</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">12 Month</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">5 Yeaars</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">10 Years</div>
            </div>

            <div className="w-full py-[24px] text-[14px] border-t-[#212121] border-t-[1px] flex items-center justify-between flex-wrap">
              <div className="w-[calc(100%/5)] max-sm:w-full text-white/60">
                Request Rate /second
              </div>
              <div className="w-[calc(100%/5)] max-sm:w-full">1 Call</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">1 Call</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">1 Call</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">1 Call</div>
            </div>

            <div className="w-full py-[24px] text-[14px] border-t-[#212121] border-t-[1px] flex items-center justify-between flex-wrap">
              <div className="w-[calc(100%/5)] max-sm:w-full text-white/60">
                Fields
              </div>
              <div className="w-[calc(100%/5)] max-sm:w-full">All</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">All</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">All</div>
              <div className="w-[calc(100%/5)] max-sm:w-full">2,All</div>
            </div>
          </Fade>
        </div>

        <PayAsYouGo />
      </div>
      <Enterprise />
    </Fade>
  );
};

export default Plans;
