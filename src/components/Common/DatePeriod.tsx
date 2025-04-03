import calendar from "@/assets/calendar.svg";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const DatePeriod: React.FC<DatePeriodProps> = ({ onSelect, value }) => {

    const handleSelect = (value: string) => {
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <Select onValueChange={handleSelect} value={value}>
            <SelectTrigger className="min-w-[196px] max-sm:w-full">
                <div className="flex items-center gap-[12px] justify-start">
                    <img src={calendar} height={24} width={24} />
                    <SelectValue placeholder="Date Period" />
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="last_week">Last Week</SelectItem>
                <SelectItem value="last_30_day">Last 30 Days</SelectItem>
                <SelectItem value="last_60_day">Last 60 Days</SelectItem>
                <SelectItem value="last_90_day">Last 90 Days</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default DatePeriod;
