import React from "react";
import notifications from "@/assets/notificaitons-2.svg?raw";
import user from "@/assets/user.svg?raw";
import billing from "@/assets/billing.svg?raw";
import security from "@/assets/security.svg?raw";
import Fade from "../Effects/Fade";

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  onTabChange,
  tab,
}) => {
  return (
    <Fade direction="right" className="flex flex-col items-start justify-start gap-y-[40px] max-sm:gap-y-[20px] w-[304px] max-w-full">
      {tabs.map((tabItem, index) => (
        <a
          key={index}
          href={`#${tabItem.value}`}
          onClick={() => onTabChange(tabItem.value)}
          className={`${
            tabItem.value == tab ? "text-white" : "text-white/50"
          } transition-all duration-300 flex items-center justify-start gap-x-[12px] leading-[20px]`}
        >
          <div dangerouslySetInnerHTML={{ __html: tabItem.icon }} />
          {tabItem.title}
        </a>
      ))}
    </Fade>
  );
};

export default SettingsSidebar;

const tabs: { value: string; title: string; icon: string }[] = [
  {
    title: "Profile",
    value: "profile",
    icon: user,
  },
  {
    title: "Security",
    value: "security",
    icon: security,
  },
  {
    title: "Billing",
    value: "billing",
    icon: billing,
  },
  {
    title: "Notifications",
    value: "notifications",
    icon: notifications,
  },
];
