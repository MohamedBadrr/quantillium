// import { keyTypes } from "@/fakedata/api-keys";
import { Button } from "../ui/button";
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
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import CustomSelect from "../Common/CustomSelect";
// import DatePicker from "../Common/DatePicker";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useAPIMutation";
import {
  AddNewApikey,
  AddNewApikeyResponse,
} from "@/services/apiKeys/AddNewApikey";
import { useQueryClient } from "@tanstack/react-query";
import { useUser } from "@/context/UserContext";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  // type: z.string().nonempty("Type is required"),
  // start_date: z
  //   .date()
  //   .refine((date) => date !== null, "Starting date is required"),
  // end_date: z
  //   .date()
  //   .refine((date) => date !== null, "Expiration date is required"),
});

const AddEditDialog: React.FC<AddEditDialogProps> = ({
  open,
  onOpenChange,
  withEdit,
}) => {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      // type: keyTypes?.[0]?.value,
      // start_date: new Date(),
      // end_date: new Date(),
    },
  });

  const { mutate, isPending } = useApiMutation({
    mutationKey: ["add-new-apikey"],
    mutationFn: AddNewApikey,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(
      {
        user_id: user!.id,
        name: values.name,
      },
      {
        onSuccess: (data: AddNewApikeyResponse) => {
          if (data.status === "API_KEY_ALREADY_EXISTS") {
            toast.error("API Key already exists");
          } else if (data.status === "SUCCESS") {
            toast.success("API Key added successfully");
            queryClient.invalidateQueries({ queryKey: ["apiKeys", user!.id] });
            onOpenChange(false);
          } else {
            toast.error("Some thing went wrong , please try again later");
          }
        },
        onError: (error) => {
          toast.error(
            `Some thing went wrong , please try again later ${error}`
          );
        },
      }
    );

    // toast.success(`API Key ${withEdit ? "Updated": "Added"} Successfully`)
    // onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[520px] max-w-full">
        <DialogHeader>
          <DialogTitle>{withEdit ? "Edit" : "Generate"} API Key</DialogTitle>
        </DialogHeader>

        <div className="mt-[48px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full flex flex-col gap-y-[24px]">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="placeholder:text-[18px] text-[18px] pb-[16px] placehoder:leading-[26px] leading-[26px] h-[42px] pt-0"
                          label="Name API Key*"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <CustomSelect items={keyTypes} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                  control={form.control}
                  name="start_date"
                  render={({ field }) => (
                    <FormItem>
                      <DatePicker
                        {...field}
                        placeholder="Pick starting date"
                        label="Starting date"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                  control={form.control}
                  name="end_date"
                  render={({ field }) => (
                    <FormItem>
                      <DatePicker
                        {...field}
                        placeholder="Pick expiration date"
                        label="Expiration date"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>

              <DialogFooter className="mt-[48px] gap-[24px] w-full flex items-center justify-between">
                <Button
                  variant="outline"
                  className="h-[54px] flex-grow text-[16px] md:w-[208px] w-full"
                  disabled={isPending}
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  className="h-[54px] flex-grow text-[16px] md:w-[208px] w-full"
                  type="submit"
                  loading={isPending}
                >
                  {!withEdit ? "Generate" : "Update"} Key
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditDialog;
