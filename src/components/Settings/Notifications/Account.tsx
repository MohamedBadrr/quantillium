import Fade from "@/components/Effects/Fade";
import { Switch } from "@/components/ui/switch";
import { NotificationProps } from "@/types/Notifications";
import React from "react";

const AccountNotifications: React.FC<NotificationProps> = ({ user, onUpdate }) => {
  return (
    <Fade
      direction="down"
      className="flex flex-col flex-grow bg-[#0f0f0f] p-[32px] max-sm:p-[16px]"
    >
      <h3 className="text-[24px] font-light">Account Notifications</h3>
      <p className="mt-[12px] text-white/50 leading-[26px]">
        Get notified about important changes to your account.
      </p>

      <Fade
        direction="down"
        className="mt-[32px] w-full p-[32px] max-sm:p-[16px] flex flex-col bg-white/2"
      >
        <div className="w-full flex items-center justify-between flex-wrap gap-y-[16px]">
          <div className="text-[14px] text-[#959595]">
            Account Changes: Notify me about changes made to my account (email,
            password, etc.)
          </div>
          <Switch
            className="data-[state=checked]:bg-[#67CE67] h-[31px] w-[51px] [&_[data-state='checked']]:translate-x-[calc(100%-6px)] [&_[data-state='unchecked']]:translate-x-[2px] [&_[data-slot='switch-thumb']]:w-[27px] [&_[data-slot='switch-thumb']]:h-[27px] ms-auto"
            checked={user!.NOTIFICATIONS_ACCOUNT_ACCOUNT_CHANGES}
            onCheckedChange={(v) => onUpdate("NOTIFICATIONS_ACCOUNT_ACCOUNT_CHANGES", v)}
          />
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center justify-between flex-wrap gap-y-[16px]">
          <div className="text-[14px] text-[#959595]">
            Security Alerts: Notify me about suspicious login attempts or
            account access from new devices
          </div>
          <Switch
            className="data-[state=checked]:bg-[#67CE67] h-[31px] w-[51px] [&_[data-state='checked']]:translate-x-[calc(100%-6px)] [&_[data-state='unchecked']]:translate-x-[2px] [&_[data-slot='switch-thumb']]:w-[27px] [&_[data-slot='switch-thumb']]:h-[27px] ms-auto"
            checked={user!.NOTIFICATIONS_ACCOUNT_SECURITY_ALERTS}
            onCheckedChange={(v) => onUpdate("NOTIFICATIONS_ACCOUNT_SECURITY_ALERTS", v)}
          />
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center justify-between flex-wrap gap-y-[16px]">
          <div className="text-[14px] text-[#959595]">
            Subscription Changes: Notify me when my subscription is upgraded,
            downgraded, or canceled
          </div>
          <Switch
            className="data-[state=checked]:bg-[#67CE67] h-[31px] w-[51px] [&_[data-state='checked']]:translate-x-[calc(100%-6px)] [&_[data-state='unchecked']]:translate-x-[2px] [&_[data-slot='switch-thumb']]:w-[27px] [&_[data-slot='switch-thumb']]:h-[27px] ms-auto"
            checked={user!.NOTIFICATIONS_ACCOUNT_SUBSCRIPTION_CHANGES}
            onCheckedChange={(v) => onUpdate("NOTIFICATIONS_ACCOUNT_SUBSCRIPTION_CHANGES", v)}
          />
        </div>
      </Fade>
    </Fade>
  );
};

export default AccountNotifications;
