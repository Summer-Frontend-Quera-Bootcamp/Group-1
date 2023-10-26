import { Link } from "react-router-dom";
import Icons from "../../icons/Icons";
import { SideBarItem } from "./SideBarItem";
import { SideBarList } from "./SideBarList";
import { BgEvent } from "@fullcalendar/core/internal.js";

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
                <p className=" font-extrabold text-[16px] ">ورک‌اسپیس‌ها</p>
                <div className="flex ">{Icons.chevronDown()}</div>
              </div>
              <div className="bg-gray-100 w-[100%] h-[40px] mt-[16px] ml-[16px] rounded py-[8px] pr-[15px] text-[12px] font-normal flex items-center justify-start text-gray-200 ">
                {Icons.search()}جستجو کنید
              </div>
              <Link to={""} className="bg-gray-200 w-[100%] h-[32px] mt-[16px] ml-[16px] p-[10px] text-[12px] font-normal rounded flex justify-center items-center ">
                ساختن اسپیس جدید
              </Link>
              <SideBarItem />
            </div>
          </div>
          <div className="w-[276px] h-[89px] mx-[32px]  ">
            <div className="flex gap-2 h-[28px] ">
              <p className="flex p-[8px] bg-blue-200 text-blue-400 rounded-full w-[36px] h-[37px] justify-center items-center ">
                NM
              </p>
              <p className="flex justify-center items-center h-[37px] ">
                نیلوفر موجودی
              </p>
            </div>
            <div className="flex justify-between items-center w-[100%] h-[36px] mt-[16px] ">
              <Link to={""} className="flex h-[28px] ">
                <div className="h-[28px]">{Icons.exit()}</div>
                <div>خروج</div>
              </Link>
              <div className="overflow-hidden flex items-center ">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" value="" type="checkbox" />
                  <div className="w-14 h-7 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-5 before:w-5 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-5 after:h-5 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id="main" className=" w-[100%] h-[100vh]  ">
          <nav className="flex items-center justify-between  w-[1034px] h-[64px] py-[16px]  mt-[41px] ml-[50px] mr-[16px] border-b   ">
            <ul className="flex w-[510px]  ">
              <li className="flex border-l px-4 font-extrabold text-xl">پروژه اول </li>
              <Link to={""} className="flex border-l px-4 text-base focus:font-bold focus:text-brand-primary  ">
                {Icons.listView()} نمایش لیستی{" "}
              </Link>
              <Link to={""} className="flex border-l px-4 text-base focus:font-bold focus:text-brand-primary">
                {Icons.boardView()} نمایش ستونی{" "}
              </Link>
              <Link to={""} className="flex border-l px-4 text-base focus:font-bold focus:text-brand-primary">
                {Icons.calendarView()}تقویم{" "}
              </Link>
            </ul>
            <ul className="flex  w-[118px] h-[28px]  ">
              <Link to={""} className="flex">
              {Icons.share()}اشتراک گذاری{" "}
              </Link>
            </ul>
          </nav>
          <div></div>
        </div>
      </div>
    </>
  );
};
