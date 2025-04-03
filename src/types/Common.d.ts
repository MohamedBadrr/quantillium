interface TotalRequestsProps {
  extraTitle?: string;
  requests: number;
  grow: number;
  negative?: boolean;
  period: string;
}

interface ErrorsProps {
  extraTitle?: string;
  rate: number | string;
  grow: number;
  negative?: boolean;
  period?: string;
}

interface SettingsSidebarProps {
  onTabChange: (e: string) => void;
  tab: string;
}

interface DatePickerProps {
  value: Matcher | Matcher[];
  placeholder?: string;
  label?: string;
  onChange: (value: Matcher | Matcher[]) => void;
}
