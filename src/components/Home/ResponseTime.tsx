import { Card, CardContent, CardTitle } from "../ui/card"
import arrowUp from "@/assets/arrow-up.svg";

const ResponseTime = () => {
    return (
        <Card className="xl:w-[390px] w-full flex-grow">
            <CardTitle>
                Avg. Response Time
            </CardTitle>
            <CardContent className="mt-[53px] flex items-center justify-between">
                <h2 className="text-[48px] text-accent font-light">
                    320ms
                </h2>
                
                <div className="flex flex-col gap-y-[6px] items-end text-success">
                    <span className="flex items-center justify-center gap-x-[2px] text-[16px]">
                        <img src={arrowUp} />
                        15%
                    </span>

                    <span className="uppercase text-[10px] text-[#959595] font-azeret">Yesterday</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default ResponseTime