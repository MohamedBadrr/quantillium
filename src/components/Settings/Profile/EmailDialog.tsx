// import Fade from "@/components/Effects/Fade";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMemo, useState } from "react";
// import {  useMemo  } from "react";
// import { useUser } from "@/context/UserContext";
import { useUpdateUser } from "@/hooks/useUpdateUser";

const EmailDialog: React.FC<DialogProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = useState<"email" | "otp">("email");
  // const [timer, setTimer] = useState(60);
  // const [isResendDisabled, setIsResendDisabled] = useState(false);

  // const { user } = useUser();
  const { updateUserField , userData, isPending } = useUpdateUser();
  // Define schema dynamically based on step
  const formSchema = useMemo(() => {
    return step === "email"
      ? z.object({
          email: z.string().email({
            message: "Please enter a valid email address",
          }),
        })
      : z.object({
          email: z.string().email(),
          // otp: z.string().min(6, {
          //   message: "Your one-time password must be 6 characters.",
          // }),
        });
  }, [step]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: userData?.user_id.email,
      // otp: "",
    },
  });

  // useEffect(() => {
  //   if (timer > 0) {
  //     const interval = setInterval(() => {
  //       setTimer((prev) => prev - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   } else {
  //     setIsResendDisabled(false);
  //   }
  // }, [timer]);

  // const handleResend = () => {
  //   // setTimer(60);
  //   // setIsResendDisabled(true);
  // };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // if (step === "email") {
    //   setStep("otp");
    //   return;
    // }
    updateUserField("email", values.email, "Email Updated Successfully", () =>
      onOpenChange(false)
    );
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        setStep("email");
        form.reset();
      }}
    >
      <DialogContent className="w-[520px] max-w-full">
        <DialogHeader>
          <DialogTitle>
            {step == "email" ? "Update" : "Verify"} Email address
          </DialogTitle>
        </DialogHeader>

        {/* {step == "otp" && (
          <DialogDescription className="mt-[8px]">
            <Fade direction="up">
              We’ve sent a verification code to your email. Enter the code below
              to confirm.
            </Fade>
          </DialogDescription>
        )} */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {step === "email" && (
              <div className="w-full mt-[48px]">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            label="Email address"
                            {...field}
                            className="text-[18px] placeholder:text-[18px] pb-[25px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {/* {step === "otp" && (
              <Fade direction="up" className="w-full mt-[48px]">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup className="space-x-[32px] flex w-full">
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage className="w-full text-center mt-2" />
                      </FormItem>
                    )}
                  />
                </div>
              </Fade>
            )} */}

            <DialogFooter className="mt-[48px] gap-x-[24px] gap-y-[12px] flex items-center justify-between w-full">
              <Button
                variant="outline"
                className="h-[54px] flex-grow text-[16px] max-sm:w-full"
                onClick={() => onOpenChange(false)}
                type="button"
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                className="h-[54px] w-[208px] text-[16px] max-sm:w-full"
                disabled={!form.formState.isValid}
                type="submit"
                loading={isPending}
              >
                Update
                {/* {step === "email" ? "Send Confirmation" : "Verify OTP"} */}
              </Button>
            </DialogFooter>
          </form>
          {/* {step == "otp" && (
            <Fade
              direction="up"
              className="mt-[24px] w-full flex items-center justify-center gap-x-2 text-[18px] text-[#FFFFFF66]"
            >
              Didn’t receive the code?{" "}
              <button
                className={`text-white ${
                  isResendDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                onClick={handleResend}
                disabled={isResendDisabled}
              >
                Resend {isResendDisabled && `(${timer}s)`}
              </button>
            </Fade>
          )} */}
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;
