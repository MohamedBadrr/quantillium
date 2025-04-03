import { Button } from "@/components/ui/button";
import { useState } from "react";
import PasswordDialog from "./PasswordDialog";
import Fade from "@/components/Effects/Fade";

const Password = () => {
  const [passwordOpen, setPasswordOpen] = useState(false);

  return (
    <>
      <Fade
        direction="down"
        className="flex flex-grow w-full items-center justify-between flex-wrap bg-[#0f0f0f] p-[32px] max-sm:p-[16px] gap-y-[16px]"
        childClassName="max-md:w-full"
      >
        <Fade direction="down" className="flex flex-col">
          <h3 className="text-[24px] font-light">Password</h3>
          <p className="mt-[12px] text-white/50 leading-[26px]">
            We need to confirm your details to ensure a seamless and
            personalized experience.
          </p>
        </Fade>

        <Button
          variant="outline"
          className="md:w-[94px] max-md:w-full h-[47px] text-[14px] font-light p-0"
          onClick={() => setPasswordOpen(true)}
        >
          Update
        </Button>
      </Fade>
      <PasswordDialog open={passwordOpen} onOpenChange={setPasswordOpen} />
    </>
  );
};

export default Password;
