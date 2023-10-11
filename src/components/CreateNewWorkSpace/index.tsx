import { useState } from "react";
import closeTag from "../../assets/Icons/close_icon.svg"
import leftArrow from "../../assets/Icons/arrow_back.svg";
import SelectWorkspaceColor from "./SelectWorkspaceColor";

interface ICreateNewWorkSpace {
  onColorReceived: (data: string) => void;
}

const CreateNewWorkSpace: React.FC<ICreateNewWorkSpace> = (onColorReceived): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("bg-gray-400");
  const [result, setResult] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [counter, setCounter] = useState(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    inputValue !== ""
      ? setCounter(counter + 1)
      : setPlaceHolder("This Field Is Required!!!");
    const tmp = inputValue.split(" ");
    if (tmp[1]) {
      setResult(tmp[0][0] + " " + tmp[1][0]);
    } else {
      setResult(tmp[0][0]);
    }
    console.log(result);
  };

  const handleArrowClick = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const handleColorReceived = (data: string) => {
    setColor(data)
  }


  return (
      <div className="bg-white shadow-md rounded-[8px] px-8 pt-6 pb-8 mb-4 w-[500px] flex flex-col gap-[40px]">
        {/* ---------------------------------- Title ---------------------------------- */}
        <div className="flex items-center mb-7">
          <img src={closeTag} className="cursor-pointer" />

          {counter === 1 ? (
            <h1 className="text-2xl text-center font-bold mx-auto">
              ساختن ورک‌ اسپیس جدید‌
            </h1>
          ) : counter === 2 ? (
            <h1 className="text-2xl text-center font-bold mx-auto">
              انتخاب رنگ ورک‌اسپیس
            </h1>
          ) : (
            <h1 className="text-2xl text-center font-bold mx-auto">
              مرور اطلاعات
            </h1>
          )}
          {counter > 1 && (
            <img
              className="cursor-pointer"
              src={leftArrow}
              alt="arrow"
              onClick={handleArrowClick}
            />
          )}
        </div>
        {/* ---------------------------------- Title ---------------------------------- */}

        {/* Content Wrapper */}
        <div className="mb-4">
          {/* Input, Color Picker, Information */}
          {counter === 1 ? (
            <>
              <form>
                <label className="block text-gray-700 text-sm mb-2 fw-400">
                  نام ورک اسپیس جدید
                </label>
                <input
                  className="h-[40px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-red-danger"
                  type="text"
                  required
                  // value={inputValue}
                  placeholder={placeHolder}
                  onChange={handleInputChange}
                />
              </form>
            </>
          ) : counter === 2 ? (
            <div>
              <div
                // className={`w-[75px] h-[65px] text-center rounded-[4px] text-xl pt-4 text-white font-bold ${paragraphBackground}`}
                className={`w-[75px] text-center rounded-[4px] text-xl text-white font-bold`}
              >
                ت ط
              </div>

              <SelectWorkspaceColor teamTitle={result} onColorReceived={handleColorReceived}>
                <label className="flex flex-col text-gray-700 text-sm font-bold">
                  رنگ ورک اسپیس
                </label>
              </SelectWorkspaceColor>
            </div>
          ) : (
            <>
              <div className="border-[1px] rounded-[8px] border-[#aaa] px-[12px] py-[16px]">
                <div className="flex justify-between py-[16px]">
                  <p>نام ورک اسپیس</p>
                  <p>{inputValue}</p>
                </div>
                <div className="flex justify-between py-[16px]">
                  <p>رنگ ورک اسپیس</p>
                  <div className={`${color} w-[20px] h-[20px] rounded-full`}></div>
                </div>
                <div className="flex justify-between py-[16px]">
                  <p>اعضا</p>
                  <div className="bg-lime-300 w-[20px] h-[20px] rounded-full"></div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* Content Wrapper */}
        {counter < 3 ? (
          <button
            className="w-full h-[40px] bg-brand-primary hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleButtonClick}
          >
            ادامه
          </button>
        ) : (
          <button
            className="w-full h-[40px] bg-brand-primary hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleButtonClick}
          >
            ساختن ورک‌ اسپیس
          </button>
        )}
      </div>
  );
};

export default CreateNewWorkSpace;
