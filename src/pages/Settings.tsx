import { useState } from "react";
import { BlurIn } from "@/components/Effects/Blur";
import Fade from "@/components/Effects/Fade";
import Header from "@/components/Common/Header";
import SettingsSidebar from "@/components/Settings/SettingsSidebar";
import Profile from "@/components/Settings/Profile";
import Security from "@/components/Settings/Security";
import Billing from "@/components/Settings/Billing";
import Plans from "@/components/Settings/Billing/Plans";
import Notifications from "@/components/Settings/Notifications";
import NotificationsPopup from "@/components/Common/Notifications";
import { useLocation, useNavigate } from "react-router-dom";

const Settings = () => {
  const { hash, state } = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState(hash ? hash.replace("#", "") : "profile");
  const [isPlansOpen, setIsPlansOpen] = useState(
    (tab == "billing" && state?.upgrade) || false
  );

  return (
    <Fade direction="down" className="flex flex-col w-full mx-auto relative">
      <BlurIn className="relative">
        {/* Header */}
        <Header title="Settings">
            <NotificationsPopup />
        </Header>

        <div className="flex items-start justify-start max-md:flex-wrap gap-[24px] w-full mt-[32px]">
          <SettingsSidebar tab={tab} onTabChange={setTab} />

          {tab == "profile" && <Profile />}
          {tab == "security" && <Security />}
          {tab == "billing" && <Billing onPlansOpen={setIsPlansOpen} />}
          {tab == "notifications" && <Notifications />}

          <Plans
            open={isPlansOpen}
            onOpenChange={(v) => {
              setIsPlansOpen(v);
              navigate("/settings#billing", { state: {} });
            }}
          />
        </div>
      </BlurIn>
    </Fade>
  );
};

export default Settings;
