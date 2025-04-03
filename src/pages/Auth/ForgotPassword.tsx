import { useState } from "react";
import ConfirmEmail from "../../components/Auth/ConfirmEmail";
import ResetPassword from "../../components/Auth/ResetPassword";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  const handleStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="max-w-full">
      {step == 1 && (
            <ConfirmEmail onNext={handleStep} />
      )}
      {step == 2 && (
            <ResetPassword onNext={handleStep} />
      )}
    </div>
  );
};

export default ForgotPassword;
