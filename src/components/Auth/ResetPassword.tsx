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
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.svg";
import { BlurIn } from "../Effects/Blur";
import Fade from "../Effects/Fade";

interface ResetPasswordProps {
  onNext: (e: z.infer<typeof formSchema>) => void;
}

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirm_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const ResetPassword: React.FC<ResetPasswordProps> = ({ onNext }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onNext(values);
  }

  return (
    <BlurIn className="w-[520px] max-w-full flex flex-col">
      <Fade direction="down" className="max-w-full">
        <img src={logo} width={256} />

        <h1 className="md:text-[48px] text-[36px] font-light mt-[60px]">
          Reset Password
        </h1>
        <p className="text-muted-foreground mt-[8px]">
          We’ll mail you a verification link to update your password.
        </p>

        <div className="w-full mt-[32px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          label="New Password"
                          type="password"
                          withEye
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full mt-[40px]">
                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          label="Confirm Password"
                          type="password"
                          withEye
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-[60px]"
                variant={"outline"}
              >
                Send Email
              </Button>
            </form>
          </Form>
        </div>
      </Fade>
    </BlurIn>
  );
};

export default ResetPassword;
