import { Card, CardContent, CardTitle } from "../ui/card"
import arrowUp from "@/assets/arrow-up-negative.svg";
import arrowUpNegative from "@/assets/arrow-up-negative.svg"

const Errors: React.FC<ErrorsProps> = ({ grow, negative, rate, extraTitle, period = "Today" }) => {
    return (
        <Card className="xl:w-[390px] w-full flex-grow">
            <CardTitle>
                Errors {extraTitle}
            </CardTitle>
            <CardContent className="mt-[53px] flex items-center justify-between">
                <h2 className="text-[48px] text-accent font-light">
                    {rate}%
                </h2>
                
                <div className="flex flex-col gap-y-[6px] items-end text-destructive">
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

export default Errors