import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl } from "../ui/form";

const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  value,
  placeholder,
  label,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Popover onOpenChange={setIsOpened}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn(
              "relative w-full justify-start text-left border-t-0 border-l-0 border-r-0 border-b-[2px] px-0 hover:bg-transparent cursor-default focus-visible:bg-transparent focus:bg-transparent focus-within:bg-transparent font-light !text-[18px]",
              isOpened && "border-primary"
            )}
          >
            <span className="absolute top-0 text-[12px] text-white/40 font-light">{label || placeholder}*</span>
            {value ? (
              format(value, "PPP")
            ) : (
              <span>{placeholder || "Pick a date"}</span>
            )}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => onChange(date)}
          initialFocus
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
