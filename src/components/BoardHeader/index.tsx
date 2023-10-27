import Icons from "../../icons/Icons"
import {useState} from "react";
import Filter from "../Filter";

export const BoardHeader = () => {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const handleClick = () => {
        setShowFilter(true);
    }
    return (
        <div className="flex items-center justify-between font-medium py-4 gap-4 border-b mx-[20px]">
            <div className="flex items-center gap-4">
                <span className="border-l-2 border-l-999999 pl-4">
                  <div className="flex items-center gap-2 ">
                    {Icons.search()}
                      <input
                          type="text"
                          name="header"
                          placeholder="جستجو بین تسک ها"
                          className="p-2 w-full h-full text-xs bg-gray-50 outline-none rounded-md"
                      />
                  </div>
                </span>
                <div onClick={handleClick} className="flex items-center gap-4 text-xs p-2">
                    <button className="flex flex-row items-center gap-2">
                        {
                            Icons.filters()
                        }
                        <span>فیلترها</span>
                    </button>
                    <span>دسته بندی شده با: وضعیت</span>
                </div>
            </div>
            {
                showFilter && (
                    <div
                        className="bg-black-primary/40 backdrop-blur-sm flex flex-row items-center justify-center fixed top-0 left-0 h-screen w-screen overflow-hidden">
                        <Filter showFilter={showFilter} setFilter={setShowFilter}/>
                    </div>
                )
            }
        </div>
    )
}
