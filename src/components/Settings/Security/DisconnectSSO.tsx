import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { toast } from "sonner";

const DisconnectSSO: React.FC<DialogProps & { sso: string }> = ({
  open,
  onOpenChange,
  sso,
}) => {
  const handleSubmit = () => {
    onOpenChange(false);
    toast.success("Account Disconnected Successfully")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[520px] max-w-full">
        <DialogHeader>
          <DialogTitle>Disconnect [{sso}]</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-[12px] max-md:text-center">
          Are you sure you want to disconnect your [{sso}] account?
        </DialogDescription>
        <DialogFooter className="mt-[48px] gap-x-[24px] gap-y-[12px] flex items-center justify-between w-full">
          <Button
            variant="outline"
            className="h-[54px] flex-grow text-[16px] max-sm:w-full"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant="outline-destructive"
            className="h-[54px] flex-grow text-[16px] max-sm:w-full"
            onClick={handleSubmit}
          >
            Disconnect
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisconnectSSO;
