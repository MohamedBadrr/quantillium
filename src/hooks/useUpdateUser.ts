// hooks/useUpdateUser.ts
import { useUser } from "@/context/UserContext";
import { useApiMutation } from "@/hooks/useAPIMutation";
import { updateUser, updateUserResponse } from "@/services/user/updateUser";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useApiQuery } from "./useAPIQuery";
import { getUserData } from "@/services/user/getUserData";

export const useUpdateUser = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useApiMutation({
    mutationKey: ["update-user"],
    mutationFn: updateUser,
  });
  const { data } = useApiQuery(["userData", user?.id || ""], () =>
    getUserData({ user_id: user?.id || "" })
  );
  const userData = data?.result;
  const updateUserField = (
    fieldName: string,
    fieldValue: string | boolean,
    successMessage: string,
    onSuccessCallback?: () => void
  ) => {
    if (!user?.id) {
      toast.error("User not found");
      return;
    }
    mutate(
      {
        user_id: user.id,
        field_name: fieldName,
        field_value: fieldValue,
      },
      {
        onSuccess: (data: updateUserResponse) => {
          if (data.status === "SUCCESS") {
            queryClient.invalidateQueries({ queryKey: ["userData", user.id] });
            toast.success(successMessage);
            onSuccessCallback?.();
          } else if (data.status === "USER_DOES_NOT_EXISTS") {
            toast.error("User Not Found, please try again later");
          } else if (data.status === "INCORRECT_FIELD_VALUE_TYPE") {
            toast.error("Enter valid value, please try again later");
          } else {
            toast.error("Something went wrong, please try again later");
          }
        },
      }
    );
  };

  return { updateUserField, userData, isPending };
};
