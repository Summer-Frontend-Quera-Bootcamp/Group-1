import { useState } from "react";
import Icons from "../../../icons/Icons";
interface ISelectWorkspaceColor {
  teamTitle: string;
  children: JSX.Element;
  onColorReceived: (data: string) => void;
}

const SelectWorkspaceColor: React.FC<ISelectWorkspaceColor> = ({
  teamTitle,
  children,
  onColorReceived,
}): JSX.Element => {
  const [paragraphBackground, setParagraphBackground] = useState("bg-gray-400");

  const handleColorClick = (color: string) => {
    setParagraphBackground(color);
    onColorReceived(color);
  };
  const handleDisturbClick = () => {
    setParagraphBackground("bg-gray-400");
    onColorReceived(paragraphBackground);
  };

  return (
    <div className="flex">
      <div
        className={`w-[75px] h-[65px] text-center rounded-[4px] text-xl pt-4 text-white font-bold ${paragraphBackground}`}
      >
        {teamTitle}
      </div>
      <div className="mr-[16px]">
        {children}
        <div className="w-[293px] flex">
          <div className="flex gap-2 flex-wrap pt-[16px]">
            <div className="cursor-pointer" onClick={handleDisturbClick}>
              {Icons.nothing()}
            </div>
            <div
              className="bg-indigo-500 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-indigo-500")}
            ></div>
            <div
              className="bg-blue-500 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-blue-500")}
            ></div>
            <div
              className="bg-cyan-300 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-cyan-300")}
            ></div>
            <div
              className="bg-teal-600 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-teal-600")}
            ></div>
            <div
              className="bg-brand-primary w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-brand-primary")}
            ></div>
            <div
              className="bg-green-200 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-green-200")}
            ></div>
            <div
              className="bg-lime-300 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-lime-300")}
            ></div>
            <div
              className="bg-yellow-200 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-yellow-200")}
            ></div>
            <div
              className="bg-orange-700 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-orange-700")}
            ></div>
            <div
              className="bg-red-600 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-red-600")}
            ></div>
            <div
              className="bg-pink-200 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-pink-200")}
            ></div>
            <div
              className="bg-grape-400 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-grape-400")}
            ></div>
            <div
              className="bg-violet-400 w-[20px] h-[20px] rounded-full cursor-pointer"
              onClick={() => handleColorClick("bg-violet-400")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectWorkspaceColor;
