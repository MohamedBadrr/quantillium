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

interface ConfirmEmailProps {
  onNext: (e: z.infer<typeof formSchema>) => void;
}

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ onNext }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
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
          Confirm Email
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

export default ConfirmEmail;
