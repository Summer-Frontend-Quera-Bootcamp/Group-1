import { Formik, Form } from "formik";
import * as Yup from "yup";
import AccountCard from "../../components/FormContainer/AccountCard";
import Input from "../../components/FormContainer/Input";
import { Link } from "react-router-dom";

type Values = {
  email: string;
  password: string;
};

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: Values) => {
    const db = localStorage;
    if (!db.getItem("email")) {
      console.log("OOPS, You don't have any account here!");
      alert("OOPS, You don't have any account here!");
    } else if (
      db.getItem("email") !== values.email ||
      db.getItem("password") !== values.password
    ) {
      console.log("Email or Password is incorrect!");
      alert("Email or Password is incorrect!");
    } else {
      alert("Hooray, Access granted!");
    }
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
      <AccountCard title="به کوئرا تسک منیجر خوش برگشتی :)">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          <Form
            action="post"
            className="flex justify-between flex-col gap-2 mb-6"
          >
            <Input label="ایمیل" type="email" autoCompleteField="email" />

            <Input
              label="رمز عبور"
              type="password"
              autoCompleteField="current-password"
            />

            <Link
              className="text-sm text-brand-primary mt-[-20px] mb-5"
              to={"/forgot"}
            >
              رمز عبور را فراموش کرده‌ای؟
            </Link>

            <button
              className="w-full flex justify-center items-center rounded-md h-10 bg-brand-primary text-white font-extrabold"
              type="submit"
            >
              ورود
            </button>
          </Form>
        </Formik>

        <div className="flex justify-center items-center gap-2">
          <p>ثبت‌نام نکرده‌ای؟</p>
          <Link className="text-brand-primary" to={"/register"}>
            ثبت‌نام
          </Link>
        </div>
      </AccountCard>
      {/* ------------------------------Formik------------------------------ */}
    </div>
  );
};

export default SignIn;
