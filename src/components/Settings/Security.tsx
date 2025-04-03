import { BlurIn } from "../Effects/Blur";
import Fade from "../Effects/Fade";
import Password from "./Security/Password";
import Sessions from "./Security/Sessions";
import Social from "./Security/Social";

const Security = () => {
  return (
    <BlurIn>
      <Fade
        direction="down"
        className="flex flex-grow w-full flex-col gap-y-[24px]"
      >
        {/* Password */}
        <Password />

        {/* SSO */}
        <Social />

        {/* Sessions */}
        <Sessions />
      </Fade>
    </BlurIn>
  );
};

export default Security;
