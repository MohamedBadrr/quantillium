interface HeaderProps {
    title: string;
    subtitle?: string;
    period?: string;
    children?: ReactNode;
    onSetPeriod?: (value: string) => void;
}