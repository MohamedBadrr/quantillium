import { Button } from "@/components/ui/button";
import EndSession from "./EndSession";
import { useState } from "react";
import Fade from "@/components/Effects/Fade";

const Sessions = () => {
  const [endOpen, setEndOpen] = useState(false);

  return (
    <>
      <Fade
        direction="up"
        className="flex flex-grow w-full flex-col bg-[#0f0f0f] p-[32px] max-sm:p-[16px] gap-y-[32px]"
      >
        <Fade direction="down" className="flex flex-col">
          <h3 className="text-[24px] font-light">Active Sessions</h3>
          <p className="mt-[12px] text-white/50 leading-[26px]">
            Here are the devices and browsers currently signed in to your
            Quantillium account. If you notice anything suspicious, click "End
            session" and update your password for better security.
          </p>
        </Fade>

        <Fade direction="down" className="mt-[32px] w-full p-[32px] max-sm:p-[16px] flex flex-col bg-white/2">
          <div className="w-full flex items-center flex-wrap gap-y-[16px]">
            <div className="w-[calc(100%/4)] max-lg:w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              Chrome, Mac OS 23.24
            </div>
            <div className="w-[calc(100%/4)] max-lg:w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              Mar 5, 2025
            </div>
            <div className="w-[calc(100%/4)] max-lg:w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              Casablanca, Morocco
            </div>
            <div className="w-[calc(100%/4)] max-lg:w-full flex items-center justify-end">
              <Button
                variant="outline"
                className="px-[24px] border-none h-[47px] max-lg:w-full text-[14px] font-light bg-white/6 pointer-events-none"
              >
                Current Session
              </Button>
            </div>
          </div>

          <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

          <div className="w-full flex items-center flex-wrap gap-y-[16px]">
            <div className="w-[calc(100%/4)] max-lg:w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              Ayoub’s iPhone
            </div>
            <div className="w-[calc(100%/4)] max-lg:w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              Mar 5, 2025
            </div>
            <div className="w-[calc(100%/4)] max-lg:w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              London, United Kingdom
            </div>
            <div className="w-[calc(100%/4)] max-lg:w-full flex items-center justify-end">
              <Button
                variant="outline-destructive"
                className="px-[24px] h-[47px] max-lg:w-full text-[14px] font-light text-destructive"
                onClick={() => setEndOpen(true)}
              >
                End Session
              </Button>
            </div>
          </div>
        </Fade>
      </Fade>
      <EndSession open={endOpen} onOpenChange={setEndOpen} />
    </>
  );
};

export default Sessions;
