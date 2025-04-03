import { FormControl } from "../ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface Item {
    value: string;
    title: string;
}

interface CustomSelectProps {
    items: Item[];
    value: string;
    onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ items, onChange, value, ...props }) => {
    return (
        <Select {...props} defaultValue={value} onValueChange={onChange}>
            <FormControl>
                <SelectTrigger className="relative w-full border-t-0 border-r-0 border-l-0 border-b-[2px] data-[state='open']:border-primary px-0 pt-[20px]">
                    <span className="absolute top-0 text-[12px] text-white/40 font-light">Access Level*</span>
                    <SelectValue className="!text-[18px]" placeholder="Select Access level" />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {items.map((item, index: number) => (
                    <SelectItem value={item?.value} key={index}>{item?.title}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default CustomSelect