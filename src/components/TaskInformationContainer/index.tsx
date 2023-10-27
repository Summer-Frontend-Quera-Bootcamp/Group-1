import React, {JSX, useState} from "react";
import {TaskInformation} from "../TaskInformation";
import Icons from "../../icons/Icons.tsx";
import Chat from "./Chat";

interface ITaskInformationContainer {
}

const TaskInformationContainer: React.FC<ITaskInformationContainer> = ({}): JSX.Element => {
    const [show, setShow] = useState<boolean>(true);

    const handleCloseClick = () => {
        setShow(false);
    }

    return show ? (
        <div className={`animate__animated animate__fadeInDown min-h-[596px] rounded-[20px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] overflow-hidden`}>
            <div className={`h-[90px]`}>
                <div onClick={handleCloseClick}
                     className={`absolute top-[36px] right-[36px] cursor-pointer`}>
                    <i>
                        {
                            Icons.close("#BDBDBD")
                        }
                    </i>
                </div>
            </div>
            <div className={`grid grid-cols-2`}>
                <TaskInformation />
                <Chat task_id={"0"} workspace_id={"0"} project_id={"0"} board_id={"0"} />
            </div>
        </div>

    ) : <></>
}

export default TaskInformationContainer;