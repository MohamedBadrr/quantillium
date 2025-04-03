import DatePeriod from "./DatePeriod";

const Header: React.FC<HeaderProps> = ({ period, title, subtitle, children, onSetPeriod }) => {
    return (
        <div className="w-full flex items-center justify-between flex-wrap max-md:gap-[26px] gap-[12px]">
            <div className="flex flex-col gap-[8px]">
                <h1 className="text-[24px]">{title}</h1>
                { subtitle && <h3 className="text-text font-azeret uppercase text-[12px]">{subtitle}</h3> }
            </div>

            { period && <DatePeriod onSelect={onSetPeriod} value={period} /> }

            { children }
        </div>
    );
}

export default Header;