import { Formik, Form } from "formik";
import * as Yup from "yup";
import AccountWrapper from "../../components/AccountForm/AccountWrapper";
import Inputs from "../../components/AccountForm/Inputs";
import { Link } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required(
      "نام و نام خانوادگی خود را وارد نکرده اید."
    ),
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
      <AccountWrapper title="ثبت‌نام در کوئرا تسک منیجر">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          <Form action="post" className="flex justify-between flex-col gap-2">
            <Inputs label="نام کامل" type="fullName" autoCompleteField="name" />

            <Inputs label="ایمیل" type="email" autoCompleteField="email" />

            <Inputs
              label="رمز عبور"
              type="password"
              autoCompleteField="current-password"
            />

            {/* <div className="mb-5 flex items-center gap-1">
              <input type="checkbox" id="checkBox" />
              <label htmlFor="checkBox">با قوانین و مقررات موافقم.</label>
            </div> */}

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

export default SignUp;
