interface CalenderCellProps {
  hasWeekDays: boolean;
  weekDay?: string;
  monthDay: string;
}

const CalenderCell: React.FC<CalenderCellProps> = ({
  hasWeekDays,
  monthDay,
  weekDay,
}): JSX.Element => {
  return (
    <div className="max-h-[130px] min-h-[120px] bg-white outline outline-1 outline-[#aaa] text-base text-black-secondary py-2.5 px-2 flex flex-col justify-between">
      {hasWeekDays ? <p>{weekDay}</p> : <p></p>}
      <p className="text-left">{monthDay}</p>
    </div>
  );
};

export default CalenderCell;
