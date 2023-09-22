// import { Link } from "react-router-dom"
//remove comment when fix
const SignInLayout = () => {
    return (
      <div>
        <div className="h-[55px] w-[1280px]  mt-[80px] mr-[80px] ml-[80px]  flex items-center justify-between ">
          <div className="w-[235px] h-[55px] text-[32px] font-extrabold capitalize not-italic leading-normal text-right linear-gradient-heading ">
            کوئرا تسک منیجر
          </div>
          <div className="flex justify-center items-center">
            <div className=" text-[16px] not-italic text-right font-medium capitalize ml-[7px]">
              قبلا ثبت‌نام کرده‌ای؟
              {/* <Link to="#">
                          قبلا ثبت‌نام کرده‌ای؟
                          </Link> */}
            </div>
            <button className="w-[75px] h-[40px] p-[10px] border-solid border-10 rounded-md bg-brand-primary text-sm text-white font-extrabold capitalize not-italic leading-normal">
              ورود
            </button>
          </div>
        </div>
        <div className=" w-[100vw] h-[60vh] linear-gradient mt-[315px]  skew-y-[-5deg] "></div>
      </div>
    );
  };
  export default SignInLayout;
  