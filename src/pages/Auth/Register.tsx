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
import Fade from "@/components/Effects/Fade";
import { BlurIn } from "@/components/Effects/Blur";
import { useApiMutation } from "@/hooks/useAPIMutation";
import { register, RegisterResponse } from "@/services/auth/register";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const formSchema = z.object({
  full_name: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  company: z.string().min(1, { message: "Company is required" }),
  phone_number: z.string().min(1, { message: "Phone Number is required" }),
  terms: z.boolean().refine((value) => value === true, {
    message: "Please accept the terms and conditions",
  }),
});

const Register = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      company: "",
      phone_number: "",
      terms: false,
    },
  });

  const { mutate, isPending } = useApiMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(
      {
        email: values.email,
        password: values.password,
        company: values.company,
        full_name: values.full_name,
        phone_number: values.phone_number,
      },
      {
        onSuccess: (data: RegisterResponse) => {
          if (data.status === "SUCCESS") {
            toast.success("user registered successfully");
            navigate("/login", { replace: true });
          }
          if (data.status === "USER_ALREADY_EXISTS") {
            toast.error(
              "Email address is already exists , enter another email."
            );
          } else {
            toast.error("Some thing went Wrong , please try again later.");
          }
        },
      }
    );
  }

  return (
    <BlurIn className="w-[520px] max-w-full flex flex-col">
      <Fade direction="down" className="max-w-full">
        <img src={logo} width={256} />

        <h1 className="md:text-[48px] text-[36px] font-light mt-[60px]">
          Create Your Account
        </h1>
        <p className="text-muted-foreground mt-[8px]">
          Join Quantillium and start exploring.
        </p>

        <div className="w-full mt-[32px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input label="Full Name*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full mt-[40px]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input label="Email address*" {...field} />
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
                        <Input label="Password*" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full mt-[40px] flex items-center justify-center gap-x-[24px]">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input label="Company*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input label="Phone Number*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full mt-[32px]">
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center space-x-[12px]">
                          <Checkbox
                            id="terms"
                            label="I agree to the Terms and Conditions"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </div>
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
                loading={isPending}
              >
                Sign Up
              </Button>
            </form>
          </Form>
        </div>
      </Fade>
    </BlurIn>
  );
};

export default Register;
