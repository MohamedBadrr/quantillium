import { useUser } from "@/context/UserContext";
import { BlurIn } from "../Effects/Blur";
import AccountNotifications from "./Notifications/Account";
import BillingNotifications from "./Notifications/Billing";
import MarketingNotifications from "./Notifications/Marketing";
import { NotificationsTypes } from "@/types/Notifications";
import { useUpdateUser } from "@/hooks/useUpdateUser";

const Notifications = () => {
  const { user, updateUserField: updateExistingField, fetchUserData } = useUser();
  const { updateUserField } = useUpdateUser();

  const handleUpdateNotifications = async (
    type: NotificationsTypes,
    value: string | boolean
  ) => {
    updateExistingField(type, value);
    updateUserField(type, value, "Notifications Updated Successfully", () => fetchUserData);
  };

  return (
    <BlurIn className="flex flex-grow w-full flex-col gap-y-[24px]">
      {/* Account Notifications */}
      <AccountNotifications user={user!} onUpdate={handleUpdateNotifications} />

      {/* Marketing Notifications */}
      <MarketingNotifications
        user={user!}
        onUpdate={handleUpdateNotifications}
      />

      {/* Billing Notifications */}
      <BillingNotifications user={user!} onUpdate={handleUpdateNotifications} />
    </BlurIn>
  );
};

export default Notifications;
