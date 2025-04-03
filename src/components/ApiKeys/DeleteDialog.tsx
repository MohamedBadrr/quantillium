import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useAPIMutation";
import { DeleteApiKey, DeleteApiKeyResponse } from "@/services/apiKeys/DeleteApiKey";
import { useQueryClient } from "@tanstack/react-query";
interface  DialogDeleteProps extends DialogProps{
  apiKey:string;
  userId : string ;
}
const DeleteDialog: React.FC<DialogDeleteProps> = ({ open, onOpenChange , apiKey , userId}) => {
  const queryClient = useQueryClient();
   const {mutate} = useApiMutation({
      mutationKey:["delete-api-key"],
      mutationFn: DeleteApiKey,
    })

  const handleSubmit = () => {
    mutate({
      user_id: userId,
      api_key : apiKey,
    },{
      onSuccess:(data:DeleteApiKeyResponse)=>{
        if(data.status === "USER_DOES_NOT_EXISTS"){
            toast.error("User Not Found");
        }
        else if (data.status === "SUCCESS") {
          queryClient.invalidateQueries({ queryKey: ["apiKeys", userId] })
          onOpenChange(false);
        }
        else if (data.status === "API_KEY_DOES_NOT_EXISTS") {
          toast.success("API Key doesn't exist");
        }
        else{
          toast.error("Some thing went wrong , please try again later");
        }
    },
    onError:(error)=>{
      toast.error(`Some thing went wrong , please try again later ${error}`);
    }
    });



    onOpenChange(false);
    toast.success("API Key Deleted Successfully")
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[520px] max-w-full">
        <DialogHeader>
          <DialogTitle>Delete API Key</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-[12px] max-md:text-center">
          Are you sure you want to delete this API key? This action cannot be
          undone.
        </DialogDescription>
        <DialogFooter className="mt-[48px] gap-x-[24px] gap-y-[12px] flex items-center justify-between w-full">
          <Button
            variant="outline"
            className="h-[54px] flex-grow text-[16px] max-sm:w-full"
            onClick={() => onOpenChange(false)}
          >
            Keep the API key
          </Button>
          <Button variant="outline-destructive" className="h-[54px] flex-grow text-[16px] max-sm:w-full" onClick={handleSubmit}>
            Confirm deletion
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
