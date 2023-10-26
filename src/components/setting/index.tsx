import Icons from "../../icons/Icons";

const Profile = () => {
  return (
    <>
      <div className="fixed right-0 w-[340px] h-[100vh] border-l pl-6 bg-white flex flex-col ">
        <div className="absolute left-[1/2] -ml-0.5 border-solid h-screen bg-[#AAAAAA]"></div>
        <div className="box-content float-right text-right font-black text-3xl bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8] mr-[50px] mt-[40px]">
          کوئرا تسک منیجر
        </div>
        <button className="w-[113px]  rounded-lg gap-[8px] pt-2 pr-1 pb-2 pl-1 bg-[#208D8E] flex ml-[148px] mt-[80px] mr-[40px]">
          <div className="text-xl font-medium text-right text-white flex">
            <div className="flex ml-[10px] mt-[2px]">
              {Icons.arrowRight()}
            </div>
            بازگشت
          </div>
        </button>
        <div className="pr-10 gap-[32px] bg-white flex flex-col mt-[35px] ">
          <div className="rounded pt-1 pr-2 pl-1 pb-2  gap-[11px] bg-[#C2F7FA]">
            <div className=" text-xl font-medium flex gap-2  text-right">
              <div className="flex flex-col ml-[5px]">
                {Icons.personalInfo()}
              </div>
              <p>اطلاعات فردی</p>
            </div>
          </div>
          <div className="rounded pt-1 pr-2 pl-1 pb-2 gap-[11px] bg-white">
            <div className="text-xl font-medium leading-[34.55px] flex ml-[100px] text-right">
              <div className="flex ml-[10px]">
                {Icons.accountInfo()}
              </div>
              اطلاعات حساب
            </div>
          </div>
          <div className="rounded pt-1 pr-2 pl-1 pb-2 gap-[11px] bg-white">
            <div className="text-xl font-medium leading-[34.55px] flex ml-[140px] text-right">
              <div className="flex ml-[10px] mt-[5px]">
                {Icons.settings()}
              </div>
              تنظیمات
            </div>
          </div>
        </div>
      </div>
      </>
    
  );
};

export default Profile;
