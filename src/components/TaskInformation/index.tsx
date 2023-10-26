import Icons from "../../icons/Icons";
import pic1 from "../../assets/img/Frame 32.svg";
export const TaskInformation = () => {
  return (
    <div className="w-[750px] h-[596px] rounded-[20px]">
      
      <div className="flex items-center justify-between px-9 mt-20">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <button className="bg-[#F84747] text-white w-[111px] pr-[8px] pl-[4px]">
              Open
            </button>
            <button className="bg-[#F84747] w-[24px]  mr-[2px]">
              {Icons.chevronLeft("#fff")}
            </button>
          </div>
          //*
          <div className="">{Icons.checkRectangle()}</div>
          <div dir="ltr" className="flex justify-end -space-x-3">
            <div className="w-9 h-9">
              <div className="w-full h-full rounded-full border border-dashed flex items-center justify-center object-contain cursor-pointer">
                {Icons.user()}
              </div>
            </div>
            <div className="w-9 h-9">
              <img
                src={pic1}
                className=" rounded-full flex items-center justify-center object-contain"
              ></img>
            </div>
          </div>

          <div className="border border-dashed rounded-full border-red-700 p-1 cursor-pointer">
            {Icons.flag("#FB0606")}
          </div>
        </div>

        <div className="flex items-center gap-[20px]">
          <div className="flex items-center cursor-pointer">
            {Icons.share("#BDBDBD")}
            <p className="text-base">اشتراک گذاری</p>
          </div>
          <div className="cursor-pointer">{Icons.settings("#BDBDBD")}</div>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] items-start justify-center mt-16 mx-[40px]">
        <div className="p-1 border border-dashed rounded-full mx-[15px] cursor-pointer">
          {Icons.bookmark()}
        </div>
        <div className="flex flex-col gap-[12px] ">
          <h1 className="text-2xl">عنوان تسک</h1>
          <p className="p-[12px] text-   font-normal border rounded-[12px] text-start">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </p>
        </div>
        <div className="flex gap-[4px] items-center text-brand-primary cursor-pointer">
          {Icons.addBox("#208D8E")}
          <p className="text-xs">اضافه کردن چک لیست</p>
        </div>
        <div className="flex gap-[4px] items-center text-brand-primary cursor-pointer">
          {Icons.addBox("#208D8E")}
          <p className="text-xs">اضافه کردن چک لیست</p>
        </div>
      </div>
    </div>
  );
};
