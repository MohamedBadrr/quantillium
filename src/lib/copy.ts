import { toast } from "sonner";

export const copyText = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to Clipboard successfully.")
        return true;
    } catch (err) {
        console.error(err)
        toast.error("Failed to Copy to Clipboard.")
        return false;
    }
};