import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const CancelSubscriptionDialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
}) => {
  const handleSubmit = () => {
    onOpenChange(false);
    toast.success("Subscription Canceled Successfully")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[520px] max-w-full">
        <DialogHeader>
          <DialogTitle>Cancel Subscription</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-[12px] max-md:text-center">
          Are you sure you want to cancel your subscription? You’ll lose access
          to premium features after{" "}
          <span className="text-white font-medium">12/10/2025</span>
        </DialogDescription>
        <DialogFooter className="mt-[48px] gap-x-[24px] gap-y-[12px] flex items-center justify-between w-full">
          <Button
            variant="outline"
            className="h-[54px] flex-grow text-[16px] max-sm:w-full"
            onClick={() => onOpenChange(false)}
          >
            Keep Subscription
          </Button>
          <Button
            variant="outline-destructive"
            className="h-[54px] flex-grow text-[16px] max-sm:w-full"
            onClick={handleSubmit}
          >
            Cancel Subscription
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelSubscriptionDialog;
