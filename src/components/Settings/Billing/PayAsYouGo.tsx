import { Slider } from "@/components/ui/slider";
import editIcon from "@/assets/edit_2.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {  SENDPLANE } from "@/types/Plane";
import { useUser } from "@/context/UserContext";
import { useApiMutation } from "@/hooks/useAPIMutation";
import { SENDPLANEResponse, upgradePlane } from "@/services/planes/upgradePlane";
import { toast } from "sonner";

const PayAsYouGo = () => {
  const {user} = useUser();

  const [value, setValue] = useState(342);
  const [edit, setEdit] = useState(false);
    const { mutate } = useApiMutation({
      mutationKey: ["upgrade-Plane"],
      mutationFn: upgradePlane,
    });

  

  const handleChoosePlane = (values:SENDPLANE) =>{
    mutate({
      callsAmount: values.callsAmount,
      callsId: values.callsId,
      callsType: values.callsType,
      currency: values.currency,
      description: values.description,
      userId: values.userId,
      amount:values.amount
    },
  {
    onSuccess:(data : SENDPLANEResponse)=>{
      window.location.href = data.data.paymentUrl;
    },
    onError:()=>{
      toast.error("Some thing went Wrong")
    }
  });
    console.log(values);
  }
  return (
    <div className="flex flex-grow w-full flex-col bg-white/6 p-[32px] max-sm:p-[16px] mt-[32px]">
      <div className="flex flex-col">
        <h3 className="text-[24px] font-light">Pay-As-You-Go Pricing</h3>
        <p className="mt-[12px] text-white/50 leading-[26px]">
          Get flexible access to our API without a subscription. Perfect for
          users with irregular or project-based data needs.
        </p>
      </div>

      <div className="mt-[24px] w-full p-[44px] max-sm:p-[16px] flex items-center justify-between flex-wrap gap-[16px] bg-white/6">
        <div className="xl:w-[400px] w-full max-w-full flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-white/50">Api Calls</span>
            <span className="flex items-center gap-x-[8px] text-[16px]">
              {!edit && value}
              {edit && <Input className="no-spinner h-[20px] text-[16px] w-fit mb-1 pt-0 !pb-0" min={1} max={420} type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} /> }
              <Button variant="ghost" className="w-fit h-fit px-1 py-1 hover:bg-white/3" onClick={() => setEdit(!edit)}>
                <img src={editIcon} alt="Edit" />
              </Button>
            </span>
          </div>
          <Slider defaultValue={[value]} onValueChange={(v) => setValue(v?.[0])} max={420} step={1} />
        </div>

        <div className="flex items-center gap-x-[32px] gap-y-[16px] flex-wrap xl:w-auto w-full">
          <h3 className="text-[40px] xl:mx-0 mx-auto">${value}</h3>

          <Button
            variant="outline"
            className="px-[24px] text-[14px] xl:w-auto w-full h-[47px]"
            onClick={()=>{handleChoosePlane({
              amount: value ,
              description: "Payment for premium subscription",
             currency: "USD",
              userId: user?.id as string,
             callsType:  "DEMAND-ON" ,
             callsId: 4,
             callsAmount: 100
            })
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PayAsYouGo;
