import Fade from "@/components/Effects/Fade";
import { Switch } from "@/components/ui/switch";
import { NotificationProps } from "@/types/Notifications";

const BillingNotifications: React.FC<NotificationProps> = ({ user, onUpdate }) => {
  return (
    <Fade
      direction="down"
      className="flex flex-col flex-grow bg-[#0f0f0f] p-[32px] max-sm:p-[16px]"
    >
      <h3 className="text-[24px] font-light">Billing Notifications</h3>
      <p className="mt-[12px] text-white/50 leading-[26px]">
        Stay updated on important billing events, like payment failures or
        upcoming renewals.
      </p>

      <Fade
        direction="down"
        className="mt-[32px] w-full p-[32px] max-sm:p-[16px] flex flex-col bg-white/2"
      >
        <div className="w-full flex items-center justify-between flex-wrap gap-y-[16px]">
          <div className="text-[14px] text-[#959595]">
            Email me about upcoming payments
          </div>
          <Switch
            className="data-[state=checked]:bg-[#67CE67] h-[31px] w-[51px] [&_[data-state='checked']]:translate-x-[calc(100%-6px)] [&_[data-state='unchecked']]:translate-x-[2px] [&_[data-slot='switch-thumb']]:w-[27px] [&_[data-slot='switch-thumb']]:h-[27px] ms-auto"
            checked={user.NOTIFICATIONS_BILLING_UPCOMING_PAYMENTS}
            onCheckedChange={(v) => onUpdate("NOTIFICATIONS_BILLING_UPCOMING_PAYMENTS", v)}
          />
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center justify-between flex-wrap gap-y-[16px]">
          <div className="text-[14px] text-[#959595]">
            Email me on payment failures
          </div>
          <Switch
            className="data-[state=checked]:bg-[#67CE67] h-[31px] w-[51px] [&_[data-state='checked']]:translate-x-[calc(100%-6px)] [&_[data-state='unchecked']]:translate-x-[2px] [&_[data-slot='switch-thumb']]:w-[27px] [&_[data-slot='switch-thumb']]:h-[27px] ms-auto"
            checked={user.NOTIFICATIONS_BILLING_PAYMENT_FAILURES}
            onCheckedChange={(v) => onUpdate("NOTIFICATIONS_BILLING_PAYMENT_FAILURES", v)}
          />
        </div>

        <hr className="w-full border-none h-[1px] rounded-[2px] bg-[#212121] my-[32px] max-sm:my-[16px]" />

        <div className="w-full flex items-center justify-between flex-wrap gap-y-[16px]">
          <div className="text-[14px] text-[#959595]">
            Email me on successful payment confirmations
          </div>
          <Switch
            className="data-[state=checked]:bg-[#67CE67] h-[31px] w-[51px] [&_[data-state='checked']]:translate-x-[calc(100%-6px)] [&_[data-state='unchecked']]:translate-x-[2px] [&_[data-slot='switch-thumb']]:w-[27px] [&_[data-slot='switch-thumb']]:h-[27px] ms-auto"
            checked={user.NOTIFICATIONS_BILLING_PAYMENT_CONFIRMATIONS}
            onCheckedChange={(v) => onUpdate("NOTIFICATIONS_BILLING_PAYMENT_CONFIRMATIONS", v)}
          />
        </div>
      </Fade>
    </Fade>
  );
};

export default BillingNotifications;
