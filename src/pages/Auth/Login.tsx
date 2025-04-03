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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.svg";
import google from "@/assets/google.svg";
import microsoft from "@/assets/microsoft.svg";
import apple from "@/assets/apple.svg";
import { Link, useNavigate } from "react-router-dom";
import Fade from "@/components/Effects/Fade";
import { BlurIn } from "@/components/Effects/Blur";
import { useApiMutation } from "@/hooks/useAPIMutation";
import login from "@/services/auth/login";
import { toast } from "sonner";
import { useState } from "react";
import { LoginResponse } from "@/services/auth/LoginResponse";
import { useUser } from "@/context/UserContext";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
const Login = () => {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  const { initUser } = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useApiMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: (data: LoginResponse) => {
          if (data.status === "SUCCESS") {
            initUser(data.result, remember);
            navigate("/", { replace: true });
          } else if (data.status === "INCORRECT_PASSWORD") {
            toast.error("Incorrect Password");
            console.log("status", data.status);
          } else if (data.status === "USER_NOT_FOUND") {
            toast.error("User not found");
            console.log("status", data.status);
          }
        },
        onError: (error) => {
          console.log("login error", error);
          toast.error("Some thing went wrong");
        },
      }
    );
  }

  return (
    <BlurIn className="w-[520px] max-w-full flex flex-col">
      <Fade direction="down" className="max-w-full">
        <img src={logo} width={256} />

        <h1 className="md:text-[48px] text-[36px] font-light mt-[60px]">
          Welcome Back
        </h1>
        <p className="text-muted-foreground mt-[8px]">
          Login with your SSO Account.
        </p>

        {/* SSO */}
        <div className="flex items-center mt-[32px] gap-x-[16px]">
          <Button className="flex-grow" variant={"outline"}>
            <img src={google} alt="Google" />
          </Button>
          <Button className="flex-grow" variant={"outline"}>
            <img src={microsoft} alt="Microsoft" />
          </Button>
          <Button className="flex-grow" variant={"outline"}>
            <img src={apple} alt="Apple" />
          </Button>
        </div>
        {/* SSO */}

        <p className="text-muted-foreground mt-[32px]">
          Or log in with your Quantillium Account.
        </p>

        <div className="w-full mt-[32px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input label="Email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full mt-[40px]">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input label="Password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full flex items-center justify-between mt-[32px]">
                <div className="flex items-center space-x-[12px]">
                  <Checkbox
                    id="remember"
                    label="Remember me"
                    checked={remember}
                    onClick={() => {
                      setRemember(!remember);
                    }}
                  />
                </div>

                <Link to="/forgot-password" className="text-accent">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full mt-[60px]"
                variant={"outline"}
                loading={isPending}
              >
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </Fade>
    </BlurIn>
  );
};

export default Login;
