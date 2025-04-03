import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import logo from "@/assets/logo.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { BlurIn } from "@/components/Effects/Blur";
import Fade from "@/components/Effects/Fade";

const formSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const VerifyEmail = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      otp: "",
    },
  });

  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(60);
    setIsResendDisabled(true);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <BlurIn className="w-[520px] max-w-full flex flex-col">
      <Fade direction="down" className="max-w-full">
        <img src={logo} width={256} />

        <h1 className="md:text-[48px] text-[36px] font-light mt-[60px]">
          Verify Your Email
        </h1>
        <p className="text-muted-foreground mt-[8px]">
          We’ve sent a verification code to your email. Enter the code below to
          continue.
        </p>

        <div className="w-full mt-[32px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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

              <Button
                type="submit"
                className="w-full mt-[60px]"
                variant={"outline"}
              >
                Verify
              </Button>

              <div className="mt-[24px] w-full flex items-center justify-center gap-x-2 text-[18px] text-[#FFFFFF66]">
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
              </div>
            </form>
          </Form>
        </div>
      </Fade>
    </BlurIn>
  );
};

export default VerifyEmail;
