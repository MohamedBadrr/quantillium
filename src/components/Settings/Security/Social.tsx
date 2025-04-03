import { Button } from "@/components/ui/button";
import google from "@/assets/google.svg";
import microsoft from "@/assets/microsoft.svg";
import DisconnectSSO from "./DisconnectSSO";
import { useState } from "react";
import Fade from "@/components/Effects/Fade";

const Social = () => {
  const [ssoOpen, setSSOOpen] = useState(false);
  const [sso, setSSO] = useState("Google");

  return (
    <>
      <Fade
        direction="up"
        className="flex flex-grow w-full flex-col bg-[#0f0f0f] p-[32px] max-sm:p-[16px] gap-y-[32px]"
      >
        <Fade direction="down" className="flex flex-col">
          <h3 className="text-[24px] font-light">Social Sign On</h3>
          <p className="mt-[12px] text-white/50 leading-[26px]">
            Connect your Quantillium account with social media for easy and
            secure sign-in.
            <br />
            It’s a fast way to access your account with added convenience.
          </p>
        </Fade>

        <Fade direction="down" className="mt-[32px] w-full p-[32px] max-sm:p-[16px] flex flex-col bg-white/2">
          <div className="w-full flex items-center flex-wrap gap-y-[16px]">
            <div className="w-[calc(100%/3)] max-sm:w-full text-[14px] text-white gap-x-[16px] flex items-center">
              <img src={google} alt="Google" width={24} height={24} />
              Google
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] flex flex-col gap-y-[7px]">
              <span className="text-white text-[14px]">
                Connected as Ayoub kada
              </span>
              <span className="text-success text-[10px]">FEB 12, 2024</span>
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full flex items-center justify-end">
              <Button
                variant="outline-destructive"
                className="px-[24px] h-[47px] max-sm:w-full text-[14px] font-light text-destructive"
                onClick={() => setSSOOpen(true)}
              >
                Disconnect
              </Button>
            </div>
          </div>

          <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

          <div className="w-full flex items-center flex-wrap gap-y-[16px]">
            <div className="w-[calc(100%/3)] max-sm:w-full text-[14px] text-white gap-x-[16px] flex items-center">
              <img src={microsoft} alt="Microsoft" width={24} height={24} />
              Microsoft
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
              <span className="text-[14px] text-white/50">Not Configured</span>
            </div>
            <div className="w-[calc(100%/3)] max-sm:w-full flex items-center justify-end">
              <Button
                variant="outline"
                className="px-[24px] h-[47px] max-sm:w-full text-[14px] font-light"
              >
                Connect
              </Button>
            </div>
          </div>
        </Fade>
      </Fade>
      <DisconnectSSO open={ssoOpen} onOpenChange={setSSOOpen} sso={sso} />
    </>
  );
};

export default Social;
