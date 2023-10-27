import { Link } from "react-router-dom";
import Icons from "../../icons/Icons";
import { SideBarItem } from "./SideBarItem";
import { useEffect, useState } from "react";
import ShareProject from "../../components/ShareProject";
import CreateNewWorkSpace from "../../components/CreateNewWorkSpace";

interface IMainLayout {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout: React.FC<IMainLayout> = ({
  children,
}): JSX.Element => {
  const [openWorkspaceMaker, setOpenWorkspaceMaker] = useState<boolean>(false);
  const [openShareProject, setOpenShareProject] = useState<boolean>(false);
  const [showListActive, setShowListActive] = useState<string>("");
  const [showColActive, setShowColActive] = useState<string>("");
  const [showCalendarActive, setShowCalendarActive] = useState<string>("");

  useEffect(() => {
    const location = window.location.href.split("/")[3];
    if (location === "showlist") {
      setShowListActive("text-brand-primary font-black");
    } else if (location === "showcol") {
      setShowColActive("text-brand-primary font-black");
    } else if (location === "calendar") {
      setShowCalendarActive("text-brand-primary font-black");
    }
  }, []);

  const handleClick = () => {
    setOpenShareProject(true);
  };
  const handleCreateWorkspace = () => {
    setOpenWorkspaceMaker(true);
  };
  return (
    <>
      <div className="flex">
        <div
          id="sidebar"
          className="w-[25%] h-screen border-l-[1px] border-solid flex flex-col justify-between pb-7"
        >
          <div className="flex flex-col items-center pt-7">
            <p className=" linear-gradient-heading text-2xl font-extrabold">
              کوئرا تسک منیجر
            </p>
            <div className="w-[274px] mt-[27px] ">
              <div className="w-[100%] h-[28px] bg-white flex justify-between ">
                <p className=" font-extrabold text-[16px] ">ورک‌اسپیس‌ها</p>
                <div className="flex cursor-pointer">{Icons.chevronDown()}</div>
              </div>
              <div className="bg-gray-100 w-[100%] h-[40px] mt-[16px] ml-[16px] rounded py-[8px] pr-[15px] flex items-center justify-start">
                <div>{Icons.search()}</div>
                <input
                  placeholder="جستجو کنید"
                  className="bg-gray-100 w-full outline-none text-[12px] font-normal text-gray-200"
                />
              </div>
              <div
                onClick={handleCreateWorkspace}
                className="cursor-pointer bg-gray-200 w-[100%] h-[32px] mt-[16px] ml-[16px] p-[10px] text-[12px] font-normal rounded flex justify-center items-center "
              >
                ساختن اسپیس جدید
              </div>
              <SideBarItem />
            </div>
          </div>
          <div className=" px-[32px]">
            <Link to={"/personalinfo"} className="flex gap-2 h-[28px] ">
              <p className="flex p-2 text-sm bg-blue-200 text-blue-400 rounded-full w-[37px] h-[37px] justify-center items-center">
                NM
              </p>
              <p className="flex justify-center items-center h-[37px]">
                نیلوفر موجودی
              </p>
            </Link>
            <div className="flex justify-between items-center mt-5">
              <Link to={"/"} className="flex h-[28px] ">
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
        <div id="main" className="w-full h-screen">
          <nav className="flex items-center py-4 mt-4 mx-5 border-b">
            <ul className="flex">
              <li className="flex gap-3 border-l px-4 font-extrabold text-xl">
                پروژه اول{" "}
              </li>
              <Link
                to={"/showlist"}
                className={`flex gap-3 border-l px-4 text-base focus:font-bold focus:text-brand-primary ${showListActive}`}
              >
                {Icons.listView()} نمایش لیستی{" "}
              </Link>
              <Link
                to={"/showcol"}
                className={`flex gap-3 border-l px-4 text-base focus:font-bold focus:text-brand-primary ${showColActive}`}
              >
                {Icons.boardView()} نمایش ستونی{" "}
              </Link>
              <Link
                to={"/calendar"}
                className={`flex gap-3 border-l px-4 text-base focus:font-bold focus:text-brand-primary ${showCalendarActive}`}
              >
                {Icons.calendarView()}تقویم{" "}
              </Link>
            </ul>
            <ul className="mr-auto">
              <div
                onClick={() => handleClick()}
                className="flex cursor-pointer"
              >
                {Icons.share()}
                اشتراک گذاری
              </div>
            </ul>
          </nav>
          <div>{children}</div>
        </div>
      </div>
      {openShareProject && (
        <div className="bg-black-primary/40 backdrop-blur-sm flex flex-row items-center justify-center fixed top-0 left-0 h-screen w-screen overflow-hidden z-50">
          <ShareProject
            setShareProject={setOpenShareProject}
            showShareProject={openShareProject}
          />
        </div>
      )}
      {openWorkspaceMaker && (
        <div className="bg-black-primary/40 backdrop-blur-sm flex flex-row items-center justify-center fixed top-0 left-0 h-screen w-screen overflow-hidden z-50">
          <CreateNewWorkSpace setCreateNewWorkSpace={setOpenWorkspaceMaker} />
        </div>
      )}
    </>
  );
};
