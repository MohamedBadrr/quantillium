import lock from "@/assets/unlock.svg"
import { Button } from "../ui/button";

const UnlockAnalytics = () => {
    return (
        <div className="flex items-center justify-center p-[16px] z-[999] fixed lg:w-[calc(100vw-130px)] right-0 w-[calc(100vw-53px)] h-screen bg-black/50 backdrop-blur-[25px]">
            <div className="w-[600px] max-w-full h-[414px] max-h-full flex items-start justify-start flex-col md:p-[40px] p-[20px] bg-[#0f0f0f]">
                <img src={lock} width={90} height={90} alt="Lock" />

                <h2 className="mt-[48px] font-light text-[48px]">Unlock Usage Analytics</h2>
                <span className="text-white/60 mt-[8px]">Upgrade to access real-time analytics and advanced insights.</span>
            
                <Button variant="secondary" className="h-[50px] leading-[115%] text-[16px] font-medium mt-[48px] w-[127px]">
                    Upgrade
                </Button>
            </div>
        </div>
    )
}

export default UnlockAnalytics;