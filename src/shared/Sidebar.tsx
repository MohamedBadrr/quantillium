import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo_no_text.svg";
import icon1 from "@/assets/sidebar-1.svg?raw";
import icon2 from "@/assets/sidebar-2.svg?raw";
import icon3 from "@/assets/sidebar-3.svg?raw";
import icon4 from "@/assets/sidebar-4.svg?raw";
import icon5 from "@/assets/sidebar-5.svg?raw";
import icon6 from "@/assets/sidebar-6.svg?raw";
import icon7 from "@/assets/sidebar-7.svg?raw";
import Fade from "@/components/Effects/Fade";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const navLinks = [
  {
    title: "Dashbord",
    path: "/",
    icon: icon1,
  },
  {
    title: "Api Keys",
    path: "/keys",
    icon: icon2,
  },
  {
    title: "Analyitcs",
    path: "/analytics",
    icon: icon3,
  },
  {
    title: "Docs",
    path: "/docs",
    icon: icon4,
  },
  {
    title: "Help",
    path: "/life",
    icon: icon5,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border-r-[1px] border-white/15">
      <button
        className="max-md:hidden flex items-center justify-center absolute top-[100px] -right-2.5 z-[9999999] bg-white text-black w-[23px] h-[23px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen && <ChevronRight width={16} height={16} />}
        {isOpen && <ChevronLeft width={16} height={16} />}
      </button>

      <Fade
        direction="right"
        staggerChildren={0.2}
        className={cn(
          "relative h-screen lg:p-[32px] py-[32px] flex flex-col justify-between max-h-screen overflow-y-auto gap-y-[12px] duration-300 transition-all",
          isOpen ? "w-[278px]" : "lg:w-[130px] w-[60px]"
        )}
      >
        <Fade
          direction="right"
          className="flex flex-col gap-y-[12px] items-center justify-start w-full"
          childClassName="w-full"
        >
          <div className="w-[66px] max-w-full h-[68px] flex items-center justify-center">
            <Link to="/">
              <img src={logo} alt="Team Logo" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-y-[12px] mt-[32px] w-full">
            {navLinks.map((link, index) => (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <NavLink
                      key={index}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center w-full h-[66px] transition-all duration-300 justify-start overflow-x-hidden
                    ${
                      isActive
                        ? "bg-primary [&>div]:text-white"
                        : "[&>div]:text-white/50 hover:bg-white/10"
                    }
                    ${isOpen ? "px-[16px]" : "px-[21px]"}
                    `
                      }
                    >
                      <div dangerouslySetInnerHTML={{ __html: link.icon }} />
                      <span
                        className={cn(
                          "whitespace-nowrap duration-300 transition-all",
                          isOpen ? "ms-[16px]" : "hidden"
                        )}
                      >
                        {link.title}
                      </span>
                    </NavLink>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className={cn(
                      "uppercase flex items-center justify-center",
                      isOpen && "hidden"
                    )}
                  >
                    {link.title || "title"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </Fade>

        {/* Bottom Navigation */}
        <div className="mt-auto flex flex-col gap-y-[12px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={"/settings"}
                  className={({ isActive }) =>
                    `flex items-center w-full h-[66px] transition-all duration-300 justify-start overflow-x-hidden
                ${
                  isActive
                    ? "bg-primary [&>div]:text-white"
                    : "[&>div]:text-white/50 hover:bg-white/10"
                }
                    ${isOpen ? "px-[16px]" : "px-[21px]"}
                `
                  }
                >
                  <div dangerouslySetInnerHTML={{ __html: icon6 }} />
                  <span
                    className={cn(
                      "whitespace-nowrap duration-300 transition-all",
                      isOpen ? "ms-[16px]" : "hidden"
                    )}
                  >
                    Settings
                  </span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className={cn(
                  "uppercase flex items-center justify-center",
                  isOpen && "hidden"
                )}
              >
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button
                  className={cn(
                    "flex items-center w-full h-[66px] transition-all duration-300 justify-start overflow-x-hidden hover:bg-destructive/10 cursor-pointer",
                    isOpen ? "px-[16px]" : "px-[21px]"
                  )}
                >
                  <div dangerouslySetInnerHTML={{ __html: icon7 }} />
                  <span
                    className={cn(
                      "whitespace-nowrap duration-300 transition-all",
                      isOpen ? "ms-[16px]" : "hidden"
                    )}
                  >
                    Logout
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className={cn(
                  "uppercase flex items-center justify-center",
                  isOpen && "hidden"
                )}
              >
                Logout
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Fade>
    </div>
  );
};

export default Sidebar;
