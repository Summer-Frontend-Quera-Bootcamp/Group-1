import { useState } from "react";
import Icons from "../../../icons/Icons";
import moment from "jalali-moment";
import { shamsiMonths } from "../../../constants/months";
import "animate.css";

interface NewTaskProps {
  open: boolean;
  onCloseHandler: (wantToClose: boolean) => void;
  onTaskHandler: (task: object) => void;
}

const NewTask: React.FC<NewTaskProps> = ({
  open,
  onCloseHandler,
  onTaskHandler,
}) => {
  const [wantToClose, setWantToClose] = useState(false);
  const [taskObj, setTaskObj] = useState({
    title: "",
    date: 0,
  });

  const closeHandler = () => {
    setWantToClose(true);
    onCloseHandler(wantToClose);
    taskObj.title !== "" ? onTaskHandler(taskObj) : null;
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj({
      title: e.target.value,
      date: new Date().getDate(),
    });
  };

  const modalMonth =
    shamsiMonths[
      Number(moment(new Date(), "YYYY/MM/DD").locale("fa").format("MM")) - 1
    ];

  return (
    <>
      {open ? (
        <div className="w-screen h-screen flex justify-center items-center z-20 bg-black-primary/40 backdrop-blur-sm absolute top-2/4 left-2/4 absolute-center animate__animated animate__fadeIn">
          <div className="w-[463px] bg-white p-5 flex flex-col gap-8 border border-brand-primary rounded-lg new-task-box-shadow ">
            <div className="task-name flex gap-2 items-center">
              <button onClick={closeHandler}>{Icons.close("#c8c8c8")}</button>
              <input
                onChange={inputChangeHandler}
                className="w-full placeholder:text-[#c8c8c8] text-xl font-medium focus:outline-0 text-black-secondary"
                type="text"
                placeholder="نام تسک را وارد کنید"
              />
            </div>
            <div className="create-task flex items-center justify-between">
              <div className="flex gap-3 items-center">
                {Icons.flag()}
                <p className="text-xl font-medium text-brand-primary">
                  {moment(new Date(), "YYYY/MM/DD").locale("fa").format("DD")}{" "}
                  {modalMonth}
                </p>
              </div>
              <button
                onClick={closeHandler}
                className="px-8 py-2 rounded text-white bg-brand-primary"
              >
                ساختن تسک
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewTask;
