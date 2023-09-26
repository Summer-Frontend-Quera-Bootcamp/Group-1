import { Link } from "react-router-dom";

type AuthenticateLayoutProps = {
  showSignup: boolean;
  children?: JSX.Element | JSX.Element[];
};

const AuthenticateLayout: React.FC<AuthenticateLayoutProps> = ({
  showSignup,
  children,
}): JSX.Element => {
  return (
    <div >
      {/* Place for more Components as Children */}
      <div className=" flex justify-center items-center fixed w-full right-0 top-1/2 bottom-1/2">
        {children}
      </div >
      <div className="flex justify-between mt-[80px] ml-[80px] mr-[80px]">
        <h1 className="text-[32px] linear-gradient-heading font-extrabold items-baseline">
          کوئرا تسک منیجر
        </h1>
        <div className="flex items-baseline gap-2">
          {showSignup ? (
            <>
              <p className="text-base font-medium">ثبت‌نام نکرده‌ای؟</p>
              <Link
                to={"/register"}
                className="flex font-extrabold text-sm w-[75px] h-[40px] p-[10px] rounded-md text-white bg-brand-primary justify-center items-center ]"
              >
                ثبت‌نام
              </Link>
            </>
          ) : (
            <>
              <p className="text-base font-medium">قبلا ثبت‌نام کرده‌ای؟</p>
              <Link
                to={"/"}
                className="flex font-extrabold text-sm w-[75px] h-[40px] p-[10px] rounded-md text-white bg-brand-primary justify-center items-center ]"
              >
                ورود
              </Link>
            </>
          )}
        </div>
      </div>

      <div className=" w-[100%] h-[557px] linear-gradient mt-[430px] skew-y-[-7deg] fixed top-0 right-0  z-[-100]"></div>
    </div>
  );
};
export default AuthenticateLayout;
