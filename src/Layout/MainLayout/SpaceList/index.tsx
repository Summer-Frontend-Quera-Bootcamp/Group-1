import { useState } from "react";

export const SpaceList = ({ title, contents, tag_color }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item  mt-[16px]  ">
      <div
        className=" accordion-title flex justify-between w-[100%] px-[16px] "
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex">
          <div className={`flex  w-[20px] h-[20px] ml-4 ${tag_color} rounded`}></div>
          <div className="flex ">{title}</div>
        </div>
        <div className="flex">...</div>
      </div>
      {isActive ? (
        <div className="accordion-content ">
          {contents.length ? (
            contents.map((content) => <p className="block my-4">{content}</p>)
          ) : (
            <button className="w-[266px] h-[28px]  my-4 border-2 border-solid border-brand-primary  rounded-lg text-brand-primary ">
              ساختن پروژه جدید
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};
