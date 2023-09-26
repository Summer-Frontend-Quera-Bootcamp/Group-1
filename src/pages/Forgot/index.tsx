import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthenticateLayout from "../../Layout/AuthenticateLayout";
import AccountCard from "../../components/FormContainer/AccountCard";
import Input from "../../components/FormContainer/Input";
import { Link } from "react-router-dom";

type Values = {
  email: string;
};

const Forgot = () => {
  const initialValues = {
    email: "",
  };

  const onSubmit = (values: Values) => {
    const db = localStorage;
    if (db.getItem("email") !== values.email) {
      console.log("OOPS, You don't have any account here!");
      alert("OOPS, You don't have any account here!");
    } else {
      console.log("Reset password link has been sent.");
      alert("Reset password link has been sent.");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("لطفا ایمیل خود را به درستی وارد کنید!")
      .required("ایمیل خود را وارد نکرده اید!"),
  });

  return (
    <AuthenticateLayout showSignup={false}>
      {/* ------------------------------Formik------------------------------ */}
      <AccountCard title="فراموشی رمز عبور">
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

            <button
              className="w-full flex justify-center items-center rounded-md h-10 bg-brand-primary text-white font-extrabold"
              type="submit"
            >
              <Link to={"/sent-link"}>دریافت ایمیل بازیابی رمز عبور</Link>
              {/* دریافت ایمیل بازیابی رمز عبور */}
            </button>
          </Form>
        </Formik>
      </AccountCard>
      {/* ------------------------------Formik------------------------------ */}
      </AuthenticateLayout>
  );
};

export default Forgot;
