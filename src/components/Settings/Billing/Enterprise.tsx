import { Button } from "@/components/ui/button";

const Enterprise = () => {
  return (
    <div className="flex flex-grow w-full items-center justify-between flex-wrap bg-[#0f0f0f] p-[32px] max-sm:p-[16px] gap-y-[16px]">
      <div className="flex flex-col">
        <h3 className="text-[24px] font-light">Enterprise</h3>
        <p className="mt-[12px] text-white/50 leading-[26px]">
          Get a custom plan tailored to your business needs with premium support
          and advanced features.
        </p>
      </div>

      <Button
        variant="outline"
        className="px-[24px] h-[47px] max-sm:w-full text-[14px] font-light"
      >
        Book a meeting
      </Button>
    </div>
  );
};

export default Enterprise;
