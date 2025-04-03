import { useState } from "react";
import { Button } from "../ui/button";
import EmailDialog from "./Profile/EmailDialog";
import NameDialog from "./Profile/NameDialog";
import PhoneDialog from "./Profile/PhoneDialog";
import CompanyDialog from "./Profile/CompanyDialog";
import Fade from "../Effects/Fade";
import { useApiQuery } from "@/hooks/useAPIQuery";
import { getUserData } from "@/services/user/getUserData";
import { useUser } from "@/context/UserContext";

const Profile = () => {
  const [emailDialog, setEmailDialog] = useState(false);
  const [nameDialog, setNameDialog] = useState(false);
  const [companyDialog, setCompanyDialog] = useState(false);
  const [phoneDialog, setPhoneDialog] = useState(false);
  const { user} = useUser();
  const {data , isError , isLoading} = useApiQuery(
    ["userData" , user?.id||""],
    () => getUserData({ user_id : user?.id ||"" })
  )
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  const userData = data?.result.user_id;
  

  return (
    <Fade direction="down" className="flex flex-col flex-grow bg-[#0f0f0f] p-[32px] max-sm:p-[16px]">
      <h3 className="text-[24px] font-light">Account details</h3>
      <p className="mt-[12px] text-white/50 leading-[26px]">
        We need to confirm your details to ensure a seamless and personalized
        experience with Quantillium. Please verify or update your information as
        needed.
      </p>

      <Fade direction="down" className="mt-[32px] w-full p-[32px] max-sm:p-[16px] flex flex-col bg-white/2 rounded-[8px]">
        <div className="w-full flex items-center flex-wrap gap-y-[12px]">
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
            Email address
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
          {/*  */}
          {userData?.email}
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full flex items-center justify-end">
            <Button
              variant="outline"
              className="w-[94px] h-[47px] max-sm:w-full text-[14px] font-light"
              onClick={() => setEmailDialog(true)}
            >
              Update
            </Button>
          </div>
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center flex-wrap gap-y-[12px]">
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
            Full Name
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
            {userData?.full_name}
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full flex items-center justify-end">
            <Button
              variant="outline"
              className="w-[94px] h-[47px] max-sm:w-full text-[14px] font-light"
              onClick={() => setNameDialog(true)}
            >
              Update
            </Button>
          </div>
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center flex-wrap gap-y-[12px]">
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
            Company Name
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
          {userData?.company}
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full flex items-center justify-end">
            <Button
              variant="outline"
              className="w-[94px] h-[47px] max-sm:w-full text-[14px] font-light"
              onClick={() => setCompanyDialog(true)}
            >
              Update
            </Button>
          </div>
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center flex-wrap gap-y-[12px]">
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
            Phone Number
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full text-[12px] text-[#959595]">
          {userData?.phone_number}
          </div>
          <div className="w-[calc(100%/3)] max-sm:w-full flex items-center justify-end">
            <Button
              variant="outline"
              className="w-[94px] h-[47px] max-sm:w-full text-[14px] font-light"
              onClick={() => setPhoneDialog(true)}
            >
              Update
            </Button>
          </div>
        </div>
      </Fade>

      <EmailDialog open={emailDialog} onOpenChange={setEmailDialog}  />
      <NameDialog open={nameDialog} onOpenChange={setNameDialog} />
      <PhoneDialog open={phoneDialog} onOpenChange={setPhoneDialog} />
      <CompanyDialog open={companyDialog} onOpenChange={setCompanyDialog} />
    </Fade>
  );
};

export default Profile;
