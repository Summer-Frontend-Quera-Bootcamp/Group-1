import { SpaceItem } from "./SpaceItem";
import { SpaceList } from "./SpaceList";

export const MainLayout = () => {
  return (
    <>
      <div className="flex">
        <div
          id="sidebar"
          className="w-[340px] h-[100vh]  border-l-[1px] border-solid "
        >
        
          <div className="pr-[50px] pt-[40px]  ">
            <p className=" linear-gradient-heading text-3xl text-[32px] font-extrabold">
              کوئرا تسک منیجر
            </p>
            <div className="w-[274px] h-[496px]  mt-[27px] ">
              <div className="w-[100%] h-[28px] bg-white flex justify-between ">
                <p className="font-extrabold text-[16px] ">ورک‌اسپیس‌ها</p>
              </div>
              <div className="bg-gray-100 w-[100%] h-[40px] mt-[16px] ml-[16px] rounded py-[8px] pr-[15px] text-[12px] font-normal flex items-center justify-start text-gray-200 ">
                جستجو کنید
              </div>
              <button className="bg-gray-200 w-[100%] h-[32px] mt-[16px] ml-[16px] p-[10px] text-[12px] font-normal rounded flex justify-center items-center ">
                ساختن اسپیس جدید
              </button>
              <SpaceItem/>
            </div>
          </div>
          <div className="w-[276px] h-[89px] mx-[32px]  ">
                <div className="flex gap-2 h-[28px] ">
                  <p className="flex p-[8px] bg-blue-200 text-blue-400 rounded-full w-[36px] h-[37px] justify-center items-center ">NM</p>
                  <p className="flex justify-center items-center h-[37px] ">نیلوفر موجودی</p>
                </div>
                <div></div>
          </div>
        </div>
        <div id="main" className=" w-[100%] h-[100vh]  ">
          <div className="felx justify-between items-center w-[1034px] h-[64px] p-y-[16px] bg-red-400 mt-[41px] ml-[50px] mr-[16px] ">
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
