import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthenticateLayout from "../../Layout/AuthenticateLayout";
import AccountCard from "../../components/FormContainer/AccountCard";
import Input from "../../components/FormContainer/Input";

type Values = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: Values) => {
    const db = localStorage;
    if (db.getItem("email") && db.getItem("password")) {
      console.log("You have an account here.");
      alert("You have an account here.");
    } else {
      db.setItem("email", values.email);
      db.setItem("password", values.password);
      console.log("Your information has been saved!");
      alert("Your information has been saved!");
    }
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
    <AuthenticateLayout showSignup={false}>
      {/* ------------------------------Formik------------------------------ */}
      <AccountCard title="ثبت‌نام در کوئرا تسک منیجر">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          <Form action="post" className="flex justify-between flex-col gap-2">
            <Input label="نام کامل" type="fullName" autoCompleteField="name" />

            <Input label="ایمیل" type="email" autoCompleteField="email" />

            <Input
              label="رمز عبور"
              type="password"
              autoCompleteField="current-password"
            />

            <div className="mb-5 flex items-center gap-1">
              <input type="checkbox" id="checkBox" />
              <label htmlFor="checkBox">با قوانین و مقررات موافقم.</label>
            </div>

            <button
              className="w-full flex justify-center items-center rounded-md h-10 bg-brand-primary text-white font-extrabold"
              type="submit"
            >
              ثبت‌نام
            </button>
          </Form>
        </Formik>
      </AccountCard>
      {/* ------------------------------Formik------------------------------ */}
    </AuthenticateLayout>
  );
};

export default SignUp;
