import Fade from "@/components/Effects/Fade";
import { Button } from "../../ui/button";

const History = () => {
  return (
    <Fade direction="down" className="flex flex-col flex-grow bg-[#0f0f0f] p-[32px] max-sm:p-[16px]">
      <h3 className="text-[24px] font-light">Billing History</h3>
      <p className="mt-[12px] text-white/50 leading-[26px]">
        View and download your past invoices and billing history.
      </p>

      <Fade direction="down" className="mt-[32px] w-full p-[32px] max-sm:p-[16px] flex flex-col bg-white/2">
        <div className="w-full flex items-center flex-wrap gap-y-[16px]">
          <div className="flex items-center flex-grow">
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              10 Dec, 2025
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              Starter
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595] flex items-center justify-end">
              <span className="w-[100px]">$99</span>
            </div>
          </div>
          <div className="max-sm:w-full flex items-center justify-end">
            <Button
              variant="outline"
              className="px-[24px] h-[47px] max-sm:w-full text-[14px] font-light"
            >
              Download
            </Button>
          </div>
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center flex-wrap gap-y-[16px]">
          <div className="flex items-center flex-grow">
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              10 Dec, 2025
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              Starter
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595] flex items-center justify-end">
              <span className="w-[100px]">$99</span>
            </div>
          </div>
          <div className="max-sm:w-full flex items-center justify-end">
            <Button
              variant="outline"
              className="px-[24px] h-[47px] max-sm:w-full text-[14px] font-light"
            >
              Download
            </Button>
          </div>
        </div>
      </Fade>
    </Fade>
  );
};

export default History;
