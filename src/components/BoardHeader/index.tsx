import Icons  from "../../icons/Icons"
export const BoardHeader = () => {
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
      <div className="flex gap-4 text-xs p-2">
        <button className="flex gap-2">
          {Icons.filters()}
          <span>فیلترها</span>
        </button>
        <span>دسته بندی شده با: وضعیت</span>
      </div>
    </div>
  </div>
  )
}
