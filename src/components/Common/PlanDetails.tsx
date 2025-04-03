import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatNumbers } from "@/lib/format";

const PlanDetails: React.FC<PlanDetailsProps> = ({
  plan,
  value,
  limit,
  mini,
  large
}) => {
  return (
    <Card className={`flex-grow ${ mini && 'p-0 bg-transparent'}`}>
      {!mini && <CardTitle>Plan Details</CardTitle>}
      <CardContent className={`${ mini ? 'mt-0' : large ? 'mt-[69px]' : 'mt-[52px]' } flex flex-col`}>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[24px] text-accent font-light">{plan}</h2>

          <div className="flex items-end justify-center flex-col gap-y-[6px]">
            <span className="text-[#959595] text-[10px] uppercase">
              Renewal Date:
            </span>
            <span className="text-[14px] font-light text-accent">
              March 15, 2025
            </span>
          </div>
        </div>

        {/* Progress Meter */}
        <div className={`${ mini ? 'mt-[32px]' : large ? 'mt-[69px]' : 'mt-[52px]' } w-full flex items-center justify-between gap-[28px]`}>
          <Progress
            value={Number(((value / limit) * 100).toFixed())}
            className="flex-grow"
            color="white"
          />
          <span className="text-accent text-[16px] font-medium whitespace-nowrap">
            {formatNumbers(value)} / {formatNumbers(limit)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanDetails;
