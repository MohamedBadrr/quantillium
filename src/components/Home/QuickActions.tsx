import { Link } from "react-router-dom";
import { Card, CardContent, CardTitle } from "../ui/card";
import arrowRight from "@/assets/arrow-right.svg";
import Fade from "../Effects/Fade";

interface QuickAction {
  title: string;
  path: string;
}

const quickActions: QuickAction[] = [
  {
    title: "View Billing",
    path: "/settings#billing",
  },
  {
    title: "Generate API Key",
    path: "/keys",
  },
  {
    title: "View Documentation",
    path: "/docs",
  },
];

const QuickActions = () => {
  return (
    <Card className="lg:max-w-[390px] w-full h-full">
      <CardTitle>Quick Actions</CardTitle>
      <CardContent>
        <Fade
          direction="down"
          staggerChildren={0.2}
          className="flex flex-col gap-y-[8px]"
        >
          {quickActions.map((action, index) => (
            <Link
              to={action.path}
              key={index}
              className="group flex items-center justify-between w-full py-[16.5px] px-[16px] hover:bg-primary duration-300 transition-all text-accent bg-white/4"
              title={action.title}
            >
              {action.title}

              <img
                src={arrowRight}
                alt="Arrow Right"
                width={16}
                height={16}
                className="transform transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110"
              />
            </Link>
          ))}
        </Fade>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
