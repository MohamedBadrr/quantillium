import notification from "@/assets/notification.svg";
import x from "@/assets/close.svg";
import Fade from "@/components/Effects/Fade";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NotificationsPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="!min-w-[52px] !w-[52px] h-[52px] max-md:w-full p-0"
        onClick={() => setOpen(!open)}
      >
        <img src={notification} alt="Notifications" width={24} height={24} />
      </Button>

      {open && (
        <Fade
          direction="up"
          className="w-full min-h-full fixed left-0 right-0 top-0 bg-[#0f0f0f] z-[999999] p-[32px] max-sm:p-[16px]"
        >
          <div className="w-full flex items-center justify-between">
            <h2 className="text-[24px] ">Notifications</h2>

            <Button
              variant="outline"
              className="w-[52px] h-[52px] !p-0"
              onClick={() => setOpen(!open)}
            >
              <img src={x} alt="Close Icon" />
            </Button>
          </div>

          <Fade direction="down" className="flex flex-col mt-[32px] rounded-[8px] bg-white/2 p-[32px] max-sm:p-[16px]">
            {notifications.map((notification, index) => (
              <>
                {index !== 0 && (
                  <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />
                )}
                <div
                  key={index}
                  className="flex items-center justify-between flex-wrap gap-y-[12px] w-full"
                >
                  <div className="flex items-center justify-start flex-wrap gap-y-[12px] text-[14px]">
                    <span className="text-white">{notification.title} -</span>
                    <span className="text-[#959595]">{notification.desc}</span>
                  </div>

                  <span className="text-[12px] text-[#959595] ms-auto">
                    {notification.date.day} - {notification.date.time}
                  </span>
                </div>
              </>
            ))}
          </Fade>
        </Fade>
      )}
    </div>
  );
};

export default NotificationsPopup;

const notifications: {
  title: string;
  desc: string;
  date: { day: string; time: string };
}[] = [
  {
    title: "Payment Successful",
    desc: "Your payment of $XX.XX was processed successfully.",
    date: {
      day: "Today",
      time: "10:34pm",
    },
  },
  {
    title: "Payment Failed",
    desc: "We couldn’t process your payment. Update your billing details to avoid service.",
    date: {
      day: "Today",
      time: "10:34pm",
    },
  },
  {
    title: "Password Changed",
    desc: "Your password was changed. If this wasn’t you, reset it immediately.",
    date: {
      day: "Today",
      time: "10:34pm",
    },
  },
  {
    title: "API Limit Reached",
    desc: "You’ve used 100% of your API calls for this month. Upgrade to continue usage.",
    date: {
      day: "Today",
      time: "10:34pm",
    },
  },
  {
    title: "New Feature Released",
    desc: "Try out our latest feature: [feature name]!",
    date: {
      day: "Today",
      time: "10:34pm",
    },
  },
];
