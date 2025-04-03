import { Card, CardContent, CardTitle } from "../ui/card"
import arrowUp from "@/assets/arrow-up.svg"
import arrowUpNegative from "@/assets/arrow-up-negative.svg"
import { formatNumbers } from "@/lib/format"

const TotalRequests: React.FC<TotalRequestsProps> = ({ grow, negative, requests, extraTitle = "Today", period }) => {
    return (
        <Card className="xl:w-[390px] flex-grow">
            <CardTitle>
                Total Requests {extraTitle}
            </CardTitle>
            <CardContent className="mt-[53px] flex items-center justify-between">
                <h2 className="text-[48px] text-accent font-light">
                    {formatNumbers(requests)}
                </h2>

                <div className={`flex flex-col gap-y-[6px] items-end ${negative ? 'text-destructive' : 'text-success'}`}>
                    <span className="flex items-center justify-center gap-x-[2px] text-[16px]">
                        <img src={negative ? arrowUpNegative : arrowUp} />
                        {grow}%
                    </span>

                    <span className="uppercase text-[10px] text-[#959595] font-azeret">{period}</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default TotalRequests