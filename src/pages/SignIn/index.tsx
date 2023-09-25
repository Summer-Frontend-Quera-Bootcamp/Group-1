import { Formik, Form } from "formik";
import * as Yup from "yup";
import AccountWrapper from "../../components/AccountForm/AccountWrapper";
import Inputs from "../../components/AccountForm/Inputs";
// import { Link } from "react-router-dom";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("لطفا ایمیل خود را به درستی وارد کنید!")
      .required("ایمیل خود را وارد نکرده اید!"),
    password: Yup.string()
      .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد!")
      .required("رمز عبور خود را وارد نکرده اید!"),
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-brand-primary">
      {/* ------------------------------Formik------------------------------ */}
      <AccountWrapper title="به کوئرا تسک منیجر خوش برگشتی :)">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          <Form action="post" className="flex justify-between flex-col gap-2">
            <Inputs label="ایمیل" type="email" autoCompleteField="email" />

            <Inputs
              label="رمز عبور"
              type="password"
              autoCompleteField="current-password"
            />

            {/* <Link
              className="text-sm text-brand-primary mt-[-20px] mb-5"
              to={"/forgot"}
            >
              رمز عبور را فراموش کرده‌ای؟
            </Link> */}

            <button
              className="w-full flex justify-center items-center rounded-md h-10 bg-brand-primary text-white"
              type="submit"
            >
              ورود
            </button>
          </Form>
        </Formik>
      </AccountWrapper>
      {/* ------------------------------Formik------------------------------ */}
    </div>
  );
};

export default SignIn;
