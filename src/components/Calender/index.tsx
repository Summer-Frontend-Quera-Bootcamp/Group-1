import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import fa from "@fullcalendar/core/locales/fa";
import "./index.scss";
import NewTask from "./components/NewTask";
import Icons from "../../icons/Icons";

const Calendar = () => {
  const events = [
    {
      title: "تست",
      start: "2023-10-11",
      end: "2023-10-11",
    },
  ];

  const [closeModal, setCloseModal] = useState(false);
  // const [addTask, setAddTask] = useState({});

  const onCloseHandler = () => {
    setCloseModal(false);
  };

  const onTaskHandler = (task: object) => {
    console.log(task);
    // setAddTask(task);
  };

  const openHandler = () => {
    setCloseModal(true);
  };

  return (
    <div className="px-5">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={fa}
        headerToolbar={{
          start: "prev, title,next",
          center: "",
          end: "",
        }}
        buttonIcons={{
          prev: "arrow-left-sqaure-fill",
          next: "chevrons-right",
        }}
        eventBackgroundColor="#208D8E"
        eventBorderColor="transparent"
        height={"80vh"}
      />
      <button
        onClick={openHandler}
        className="z-10 mr-auto ml-4 -translate-y-4 flex items-center gap-1 text-white bg-brand-primary px-3 py-2 rounded-md"
      >
        {Icons.addBox("#fff")}
        تسک جدید
      </button>
      <NewTask
        open={closeModal}
        onCloseHandler={onCloseHandler}
        onTaskHandler={onTaskHandler}
      />
    </div>
  );
};

export default Calendar;
