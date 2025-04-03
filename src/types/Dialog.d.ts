interface DialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;

}

interface AddEditDialogProps extends DialogProps {
  item?: ApiKey;
  withEdit?: boolean;
}

interface PlansDialog {
  open: boolean;
  onOpenChange: (e: boolean) => void;
}
