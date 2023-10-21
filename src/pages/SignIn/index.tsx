import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import SignInLayout from "../../Layout/AuthenticateLayout";
import AccountCard from "../../components/FormContainer/components/AccountCard";
import Input from "../../components/FormContainer/components/Input";
import axios from "axios";
import { baseUrl } from "../../constants/api";
import { useState } from "react";

type Values = {
  username: string;
  password: string;
};

const SignIn = () => {
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values: Values) => {
    setLoading(true);
    const apiResponse = await axios({
      method: "post",
      url: `${baseUrl}accounts/login/`,
      data: values,
    }).catch((error) => {
      if (error.response) {
        setLoading(false);
        setApiError(error.response.data.detail);
      }
    });
    const { user_id, access, refresh } = await apiResponse.data;

    localStorage.setItem("user_id", user_id);
    localStorage.setItem("Access Token", access);
    localStorage.setItem("Refresh Token", refresh);

    // Replace with correct route
    navigate("/test");
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("ایمیل خود را وارد نکرده اید!"),
    password: Yup.string()
      .min(6, "رمز عبور باید حداقل 6 کاراکتر داشته باشد!")
      .required("رمز عبور خود را وارد نکرده اید!"),
  });

  return (
    <SignInLayout showSignup={true}>
      {/* ------------------------------Formik------------------------------ */}
      <AccountCard title="به کوئرا تسک منیجر خوش برگشتی :)">
        {/* Authentication Error Handling */}
        {apiError ? (
          <div className="text-center bg-red-700 text-white px-5 mb-5 rounded-md">
            {apiError}
          </div>
        ) : (
          <></>
        )}
        {/* Authentication Error Handling */}

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
            <Input label="ایمیل" type="username" autoCompleteField="email" />

            <Input
              label="رمز عبور"
              type="password"
              autoCompleteField="current-password"
            />

            <Link
              className="text-sm w-fit text-brand-primary mt-[-20px] mb-5"
              to={"/forgot"}
            >
              رمز عبور را فراموش کرده‌ای؟
            </Link>

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
                ورود
              </button>
            )}
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
    </SignInLayout>
  );
};

export default SignIn;
