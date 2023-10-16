import { useState } from "react";

export const SpaceList = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item  mt-[16px]  ">
      <div
        className=" accordion-title flex justify-between w-[100%] px-[16px] "
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex">
                <div 
                          className="flex  w-[20px] h-[20px] bg-green-200 rounded "
                ></div>
                <div className="flex ">{title}</div>
        </div>
        <div className="flex">...</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};
