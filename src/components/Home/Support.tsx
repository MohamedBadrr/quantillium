import { Button } from "../ui/button"
import { Card, CardContent, CardTitle } from "../ui/card"
import slack from "@/assets/slack.svg";

const Support = () => {
    return (
        <Card className="lg:max-w-[390px] w-full">
            <CardTitle>
                Support
            </CardTitle>
            <CardContent>
                <h2 className="text-[24px] text-accent font-light">
                    Need help? <br />
                    Our team is here for you.
                </h2>

                <div className="flex items-center gap-[12px] mt-[26px] max-md:flex-wrap">
                    <Button variant="outline" className="text-[14px] font-medium h-[48px] px-[24px] flex-grow">
                        Submit a Ticket
                    </Button>
                    <Button variant="outline" className="text-[14px] font-medium h-[48px] px-[24px] flex items-center justify-center gap-x-[8px] flex-grow">
                        <img src={slack} alt="Slack" />
                        Slack Community
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Support