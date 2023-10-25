import "animate.css";
import { useState } from "react";
import Icons from "../../icons/Icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthenticateLayout from "../../Layout/AuthenticateLayout";
import AccountCard from "../../components/FormContainer/components/AccountCard";
import Input from "../../components/FormContainer/components/Input";
import { baseUrl } from "../../constants/api";

type Values = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values: Values) => {
    setLoading(true);
    await axios({
      method: "post",
      url: `${baseUrl}accounts/`,
      data: values,
    })
      .then(() => {
        setApiSuccess("ثبت نام با موفقیت انجام شد");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.data.email) {
          setLoading(false);
          setApiError(error.response.data.email);
        }
        if (error.response.data.username) {
          setLoading(false);
          setApiError(error.response.data.username);
        }
      });
  };

  const handleOpenRulesModal = () => {
    setShowRules(true);
  };

  const handleCloseRulesModal = () => {
    setShowRules(false);
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("نام کاربری خود را وارد نکرده اید."),
    email: Yup.string()
      .email("لطفا ایمیل خود را به درستی وارد کنید!")
      .required("ایمیل خود را وارد نکرده اید!"),
    password: Yup.string()
      .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد!")
      .required("رمز عبور خود را وارد نکرده اید!"),
  });

  return (
    <AuthenticateLayout showSignup={false}>
      {showRules ? (
        <div className="w-screen h-screen z-20 bg-black-primary/40 backdrop-blur-sm absolute top-0 right-0 -translate-y-1/2 flex justify-center items-center animate__animated animate__fadeIn">
          <div className="w-[752px] bg-white rounded-2xl p-6 flex flex-col gap-8">
            <div className="text-center">
              <div
                className="cursor-pointer mr-auto w-fit"
                onClick={handleCloseRulesModal}
              >
                {Icons.close()}
              </div>
              <p className="text-3xl font-extrabold">قوانین و مقررات</p>
            </div>
            <div>
              <div className="text-xs leading-6">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </p>
                <ul className="flex flex-col gap-5 list-disc px-3">
                  <li>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است،
                  </li>
                  <li>
                    و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                    هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                    سه درصد گذشته حال و آینده،
                  </li>
                  <li>
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                    شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                    خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                  </li>
                  <li>
                    در این صورت می توان امید داشت که تمام و دشواری موجود در
                    ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                    نیاز شامل حروفچینی دستاوردهای اصلی، و
                  </li>
                  <li>
                    جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                    استفاده قرار گیرد.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* ------------------------------Formik------------------------------ */}
      <AccountCard title="ثبت‌نام در کوئرا تسک منیجر">
        {/* Authentication Error Handling */}
        {apiError ? (
          <div className="text-center bg-red-700 text-white px-5 mb-5 rounded-md animate__animated animate__fadeIn">
            {apiError}
          </div>
        ) : (
          <></>
        )}
        {/* Authentication Error Handling */}

        {/* Authentication Success */}
        {apiSuccess ? (
          <div className="text-center bg-green-300 text-white px-5 mb-5 rounded-md animate__animated animate__fadeIn">
            {apiSuccess}
          </div>
        ) : (
          <></>
        )}
        {/* ----------------------------- */}

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          <Form action="post" className="flex justify-between flex-col gap-2">
            <Input
              label="نام کاربری"
              type="username"
              autoCompleteField="name"
            />

            <Input label="ایمیل" type="email" autoCompleteField="email" />

            <Input
              label="رمز عبور"
              type="password"
              autoCompleteField="current-password"
            />

            <div className="mb-5 flex items-center gap-1">
              <input
                required
                type="checkbox"
                id="checkBox"
                className="w-4 h-4"
              />
              <label htmlFor="checkBox" className="flex gap-1">
                با{" "}
                <p
                  className="underline underline-offset-8 cursor-pointer"
                  onClick={handleOpenRulesModal}
                >
                  قوانین و مقررات
                </p>{" "}
                موافقم.
              </label>
            </div>

            {loading ? (
              <div className="bg-brand-primary flex flex-row gap-2 justify-center items-center rounded-md h-10">
                <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
              </div>
            ) : (
              <button
                className="w-full flex justify-center items-center rounded-md h-10 bg-brand-primary text-white font-extrabold"
                type="submit"
              >
                ثبت‌نام
              </button>
            )}
          </Form>
        </Formik>
      </AccountCard>
      {/* ------------------------------Formik------------------------------ */}
    </AuthenticateLayout>
  );
};

export default SignUp;
