import { useState } from "react";
import SelectWorkspaceColor from "./SelectWorkspaceColor";
import Icons from "../../icons/Icons";
import pic2 from "../../assets/img/Frame 78.svg";
import axios from "axios";
import { baseUrl } from "../../constants/api";
import Message from "../Message";
interface ICreateNewWorkSpace {
  onColorReceived: (data: string) => void;
}

const CreateNewWorkSpace: React.FC<ICreateNewWorkSpace> = (
  onColorReceived
): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("bg-gray-400");
  const [result, setResult] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [counter, setCounter] = useState(1);
  const [close, setClose] = useState(false);
  const [apiError,setApiError] = useState("");
  const [apiSuccess,setApiSuccess] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClose = () => {
    setClose(true);
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
  };

  const handleButtonCreate = () => {
    inputValue !== ""
      ? setCounter(counter + 1)
      : setPlaceHolder("This Field Is Required!!!");
    const tmp = inputValue.split(" ");
    if (tmp[1]) {
      setResult(tmp[0][0] + " " + tmp[1][0]);
    } else {
      setResult(tmp[0][0]);
    }
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MzYwMDIwLCJpYXQiOjE2OTgzMzg0MjAsImp0aSI6ImJlYjM3YTU1NzIzYzQ1ZGE5YTc2YzBlMWU2MDU3NDA4IiwidXNlcl9pZCI6MjA2fQ.nuWjEnaTQ00XQ8OaX9_tqZmxUamMevCO8ugEME22xTM";
    axios({
      method: "post",
      url: `${baseUrl}workspaces/`,
      headers: { 'Authorization': `Bearer ${accessToken}` },
      data : {
        name: inputValue,
        color : color
      }
    }).then((res) => {
      setApiSuccess("ورک اسپیس با موفقیت ایجاد شد")
      console.log(res)
      setTimeout(() => {
        setClose(true)
      }, 2000);
    }).catch((err)=> {
      setApiError("مشکلی به وجود آمده است")
      console.log(err);
      
    });
  };

  const handleArrowClick = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const handleColorReceived = (data: string) => {
    setColor(data);
  };

  return !close ? (
    <div className="bg-white shadow-md rounded-[8px] px-8 pt-6 pb-8 mb-4 w-[500px] flex flex-col gap-[40px]">
      <div className="flex items-center mb-7">
        <div className="cursor-pointer" onClick={handleButtonClose}>
          {Icons.close()}
        </div>

        {counter === 1 ? 
          <h1 className="text-2xl text-center font-bold mx-auto">
            ساختن ورک‌ اسپیس جدید‌
          </h1>
          
         : counter === 2 ? (
          <h1 className="text-2xl text-center font-bold mx-auto">
            انتخاب رنگ ورک‌اسپیس
          </h1>
        ) : (
          <h1 className="text-2xl text-center font-bold mx-auto">
            مرور اطلاعات
          </h1>
        )}
        {counter > 1 && (
          <div className="cursor-pointer" onClick={handleArrowClick}>
            {Icons.arrowLeft()}
          </div>
        )}
      </div>
      {
            apiSuccess ? 
            <Message type="success" message={apiSuccess}/> :
            <></>
          }
          {
            apiError ? 
            <Message type="error" message={apiError}/> :
            <></>
          }
      <div className="mb-4">
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
                placeholder={placeHolder}
                onChange={handleInputChange}
              />
            </form>
          </>
        ) : counter === 2 ? (
          <div>
            <div
              className={`w-[75px] text-center rounded-[4px] text-xl text-white font-bold`}
            ></div>

            <SelectWorkspaceColor
              teamTitle={result}
              onColorReceived={handleColorReceived}
            >
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
                <div
                  className={`${color} w-[20px] h-[20px] rounded-full`}
                ></div>
              </div>
              <div className="flex justify-between py-[16px]">
                <p>اعضا</p>
                <div className="w-9 h-9">
                  <img
                    src={pic2}
                    className="w-full h-full rounded-full flex items-center justify-center object-contain"
                  ></img>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
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
          onClick={handleButtonCreate}
        >
          ساختن ورک‌ اسپیس
        </button>
      )}
    </div>
  ) : (
    <></>
  );
};

export default CreateNewWorkSpace;
