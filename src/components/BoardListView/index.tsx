import { useState } from "react";
import pic1 from "../../assets/img/Frame 32.svg";
import pic2 from "../../assets/img/Frame 78.svg";
import { BoardHeader } from "../../components/BoardHeader";
import Icons from "../../icons/Icons";
const BoardListView = () => {
  const [lists, setListsOpen] = useState({
    parent: false,
    pending: false,
    progress: false,
    done: false,
  });

  const handleParentOpen = () => {
    setListsOpen({
      ...lists,
      parent: !lists.parent,
    });
  };

  const handlePendingOpen = () => {
    setListsOpen({
      ...lists,
      pending: !lists.pending,
    });
  };

  const handleProgressOpen = () => {
    setListsOpen({
      ...lists,
      progress: !lists.progress,
    });
  };

  const handleDoneOpen = () => {
    setListsOpen({
      ...lists,
      done: !lists.done,
    });
  };

  return (
    <div>
      <BoardHeader />
      <div className="my-[20px] mx-[20px] h-[86vh] overflow-y-scroll">
        <div className="flex items-center gap-2 text-black-secondary mb-[30px]">
          <div
            onClick={handleParentOpen}
            className={`cursor-pointer transform ${
              lists.parent ? "rotate-90" : "rotate-0"
            } transition-transform duration-300`}
          >
            {Icons.expand()}
          </div>
          <h1 className="text-xl">پروژه اول</h1>
        </div>
        <div className="overflow-hidden">
          <div
            className={`${
              lists.parent ? "-translate-y-[600px]" : "h-auto"
            } transition-all duration-600 ease-in`}
          >
            <table className="w-full text-right ">
              <thead>
                <tr className="text-base font-medium">
                  <th className="flex items-center">
                    <div className="flex items-center gap-[5px] w-2/3 mr-10 pt-6">
                      <div
                        className={`cursor-pointer transform ${
                          lists.pending ? "rotate-90" : "rotate-0"
                        } transition-transform duration-300`}
                        onClick={handlePendingOpen}
                      >
                        {Icons.expand()}
                      </div>
                      <p className="bg-pink-300 px-[6px] py-[4px] rounded-[4px] text-white text-base">
                        Pending
                      </p>
                      <p className="text-black-secondary text-xs">۲ تسک</p>
                    </div>
                  </th>
                  <th>اعضا</th>
                  <th>ددلاین</th>
                  <th>اولویت</th>
                  <th>توضیحات</th>
                </tr>
              </thead>

              <tbody
                className={`${
                  lists.pending ? "opacity-0" : "opacity-100 mb-[40px]"
                } transition-all duration-600 ease-in`}
              >
                <tr className="text-xs">
                  <th className="flex items-center mr-16 py-6 w-72 text-ellipsis">
                    <span className="w-4 h-4 bg-pink-300 rounded-sm ml-2 "></span>
                    این یک تیتر برای این تسک است.
                  </th>
                  <th>
                    <div dir="ltr" className="flex justify-end -space-x-3 w-20">
                      <div className="w-9 h-9">
                        <img
                          src={pic2}
                          className="w-full h-full rounded-full flex items-center justify-center object-contain"
                        ></img>
                      </div>
                      <div className="w-9 h-9">
                        <img
                          src={pic1}
                          className="w-full h-full rounded-full flex items-center justify-center object-contain"
                        ></img>
                      </div>
                    </div>
                  </th>
                  <td>۶ آبان</td>
                  <td>
                    <span className="text-FB0606">{Icons.flag()}</span>
                  </td>
                  <td>
                    <div className="cursor-pointer">{Icons.description()}</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <th className="flex items-center mr-16 py-6 w-72 text-ellipsis overflow-hidden">
                    <span className="w-4 h-4 bg-pink-300 rounded-sm ml-2"></span>
                    این یک تیتر برای یک تسک است
                  </th>
                  <th>
                    <div className="w-9 h-9">
                      <img
                        src={pic2}
                        className="w-full h-full rounded-full flex items-center justify-center object-contain"
                      ></img>
                    </div>
                  </th>
                  <td>۶ آبان</td>
                  <td>
                    <span className="text-FB0606">{Icons.flag()}</span>
                  </td>
                  <td>
                    <div className="cursor-pointer">{Icons.description()}</div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex flex-col">
              <table className="w-full text-right ">
                <thead>
                  <tr className="text-base font-medium">
                    <th className={`flex items-center`}>
                      <div className="flex items-center gap-[5px] w-2/3 mr-10 pt-6">
                        <div
                          onClick={handleProgressOpen}
                          className={`cursor-pointer transform ${
                            lists.progress ? "rotate-90" : "rotate-0"
                          } transition-transform duration-300`}
                        >
                          {Icons.expand()}
                        </div>
                        <p className="bg-orange-600 px-[6px] py-[4px] rounded-[4px] text-white text-base">
                          InProgress
                        </p>
                        <p className="text-black-secondary text-xs">۲ تسک</p>
                      </div>
                    </th>
                    <th>اعضا</th>
                    <th>ددلاین</th>
                    <th>اولویت</th>
                    <th>توضیحات</th>
                  </tr>
                </thead>

                <tbody
                  className={`${
                    lists.progress ? "opacity-0" : "opacity-100 mb-[40px]"
                  } transition-all duration-600 ease-in`}
                >
                  <tr className="text-xs">
                    <th className="flex items-center mr-16 py-6 w-72 text-ellipsis">
                      <span className="w-4 h-4 bg-orange-600 rounded-sm ml-2 "></span>
                      این یک تیتر برای این تسک است.
                    </th>
                    <th>
                      <div
                        dir="ltr"
                        className="flex justify-end -space-x-3 w-20"
                      >
                        <div className="w-9 h-9">
                          <img
                            src={pic2}
                            className="w-full h-full rounded-full flex items-center justify-center object-contain"
                          ></img>
                        </div>
                        <div className="w-9 h-9">
                          <img
                            src={pic1}
                            className="w-full h-full rounded-full flex items-center justify-center object-contain"
                          ></img>
                        </div>
                      </div>
                    </th>
                    <td>۶ آبان</td>
                    <td>
                      <span className="text-FB0606">{Icons.flag()}</span>
                    </td>
                    <td>
                      <div className="cursor-pointer">
                        {Icons.description()}
                      </div>
                    </td>
                  </tr>
                  <tr className="text-xs">
                    <th className="flex items-center mr-16 py-6 w-72 text-ellipsis overflow-hidden">
                      <span className="w-4 h-4 bg-orange-600 rounded-sm ml-2"></span>
                      این یک تیتر برای یک تسک است
                    </th>
                    <th>
                      <div className="w-9 h-9">
                        <img
                          src={pic2}
                          className="w-full h-full rounded-full flex items-center justify-center object-contain"
                        ></img>
                      </div>
                    </th>
                    <td>۶ آبان</td>
                    <td>
                      <span className="text-FB0606">{Icons.flag()}</span>
                    </td>
                    <td>
                      <div className="cursor-pointer">
                        {Icons.description()}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col ">
              <table className="w-full text-right">
                <thead>
                  <tr className="text-base font-medium ">
                    <th className="flex items-center">
                      <div className="flex items-center gap-[5px] w-2/3 mr-10 py-6">
                        <div
                          onClick={handleDoneOpen}
                          className={`cursor-pointer transform ${
                            lists.done ? "rotate-90" : "rotate-0"
                          } transition-transform duration-300`}
                        >
                          {Icons.expand()}
                        </div>
                        <p className="bg-green-300 px-[6px] py-[4px] rounded-[4px] text-white text-base">
                          Done
                        </p>
                        <p className="text-black-secondary text-xs">۲ تسک</p>
                      </div>
                    </th>
                    <th>اعضا</th>
                    <th>ددلاین</th>
                    <th>اولویت</th>
                    <th>توضیحات</th>
                  </tr>
                </thead>
                <tbody
                  className={`${
                    lists.done ? "opacity-0" : "opacity-100 mb-[40px]"
                  } transition-all duration-600 ease-in`}
                >
                  <tr className="text-xs">
                    <th className="flex items-center mr-16 py-6 w-72 text-ellipsis">
                      <span className="w-4 h-4 bg-green-300 rounded-sm ml-2 "></span>
                      این یک تیتر برای این تسک است.
                    </th>
                    <th>
                      <div
                        dir="ltr"
                        className="flex justify-end -space-x-3 w-20"
                      >
                        <div className="w-9 h-9">
                          <img
                            src={pic2}
                            className="w-full h-full rounded-full flex items-center justify-center object-contain"
                          ></img>
                        </div>
                        <div className="w-9 h-9">
                          <img
                            src={pic1}
                            className="w-full h-full rounded-full flex items-center justify-center object-contain"
                          ></img>
                        </div>
                      </div>
                    </th>
                    <td>۶ آبان</td>
                    <td>
                      <span className="text-FB0606">
                        {Icons.flag("#FAB005")}
                      </span>
                    </td>
                    <td>
                      <div className="cursor-pointer">
                        {Icons.description()}
                      </div>
                    </td>
                  </tr>
                  <tr className="text-xs">
                    <th className="flex items-center mr-16 py-6 w-72 text-ellipsis overflow-hidden">
                      <span className="w-4 h-4 bg-green-300 rounded-sm ml-2"></span>
                      این یک تیتر برای یک تسک است
                    </th>
                    <th>
                      <div className="w-9 h-9">
                        <img
                          src={pic2}
                          className="w-full h-full rounded-full flex items-center justify-center object-contain"
                        ></img>
                      </div>
                    </th>
                    <td>۶ آبان</td>
                    <td>
                      <span className="text-FB0606">
                        {Icons.flag("#FC0733")}
                      </span>
                    </td>
                    <td>
                      <div className="cursor-pointer">
                        {Icons.description()}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button className="z-10 mr-auto ml-4 mt-24  flex items-center gap-1 text-white bg-brand-primary px-3 py-2 rounded-md">
          {Icons.addBox("#fff")}
          تسک جدید
        </button>
      </div>
    </div>
  );
};

export default BoardListView;
