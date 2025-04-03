import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import lock from "@/assets/lock.svg"

const Unlock = () => {
    return (
        <Card className="lg:max-w-[390px] w-full h-full">
            <img src={lock} width={48} height={48} alt="Unlock" />
            <CardContent className="flex flex-col mt-[21.5px]">
                <h2 className="text-[32px] text-accent font-light">
                    Unlock Quantillium
                </h2>
                <span className="text-[14px] text-[#959595] mt-[12px]">Get unlimited API calls and premium features.</span>
                <Button variant="secondary" className="h-[50px] py-[16px] w-full text-black font-medium text-[16px] mt-[21.5px]">
                    Upgrade Now
                </Button>
            </CardContent>
        </Card>
    )
}

export default Unlock