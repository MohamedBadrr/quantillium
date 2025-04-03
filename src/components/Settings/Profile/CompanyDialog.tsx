import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
// import { useUser } from "@/context/UserContext";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CompanyDialog: React.FC<DialogProps> = ({ open, onOpenChange }) => {
  // const {user} = useUser();
  const { updateUserField, userData, isPending } = useUpdateUser();
  const formSchema = z.object({
    company: z.string().nonempty({
      message: "Company is required",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      company: userData?.user_id.company,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateUserField(
      "company",
      values.company,
      "Company Updated Successfully",
      () => onOpenChange(false)
    );
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        form.reset();
      }}
    >
      <DialogContent className="w-[520px] max-w-full">
        <DialogHeader>
          <DialogTitle>Update Company</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="w-full mt-[48px]">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          label="Company name"
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
                type="submit"
                className="h-[54px] w-[208px] text-[16px] max-sm:w-full"
                disabled={!form.formState.isValid}
                loading={isPending}
              >
                Update
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyDialog;
