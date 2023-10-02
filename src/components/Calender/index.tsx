import { weekDays, monthDate } from "../../constants/days";
import CalenderCell from "./CalenderCell";

const Calender = () => {
  return (
    // Temporary Wrapper
      <div className="grid grid-cols-7 grid-rows-5">
        {monthDate.map((day, index) => {
          if (index < 7) {
            return (
              <CalenderCell
                hasWeekDays={true}
                monthDay={day}
                key={index}
                weekDay={weekDays[index]}
              />
            );
          } else {
            return (
              <CalenderCell hasWeekDays={false} monthDay={day} key={index} />
            );
          }
        })}
      </div>
  );
};

export default Calender;
