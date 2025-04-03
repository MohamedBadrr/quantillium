import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import logo from "@/assets/logo.svg";
import notFound from "@/assets/404.svg";
import Fade from "@/components/Effects/Fade";
import { Button } from "@/components/ui/button";

const Error = () => {
  const error = useRouteError() as Error | { message: string; status?: number };
  const navigate = useNavigate();

  const getError = () => {
    if (isRouteErrorResponse(error)) {
      return (
        <div className="flex flex-col items-center justify-center">
          <p className="text-[32px] mt-12">Oops, looks like you’re lost!</p>
          <p className="text-[14px] text-[#959595] mt-5 text-center max-w-full w-[300px]">
            This page doesn’t exist, but don’t worry—you can always find your
            way back.
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center">
          <p className="text-[32px] mt-12">Oops, looks like you’re lost!</p>
          <p className="text-[14px] text-[#959595] mt-5 text-center max-w-full w-[300px]">
            {error.message}
          </p>
        </div>
      );
    }
  };

  return (
    <Fade
      direction="down"
      className="min-h-screen w-screen flex items-center flex-col justify-center"
    >
      <img
        src={logo}
        className="md:w-[256px] md:h-[40px] w-[100px] h-[100px]"
      />

      <img
        src={notFound}
        className="md:w-[355px] max-w-full md:h-[156px] w-[100px] h-[100px] mt-20"
      />

      <div className="flex flex-col items-center justify-center">{getError()}</div>

      <Button variant={"secondary"}
        className="mt-[24px] px-[32px] py-[16px] text-[16px] text-black bg-white rounded-none font-md"
        onClick={() => navigate('/')}
      >
        Go Home
      </Button>
    </Fade>
  );
};

export default Error;
