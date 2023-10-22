import "animate.css";
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);
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
      .then((response) => {
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          setApiError(error.response.data.email);
        }
      });
  };

  const validationSchema = Yup.object({
    username: Yup.string().required(
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
        {/* Authentication Error Handling */}
        {apiError ? (
          <div className="text-center bg-red-700 text-white px-5 mb-5 rounded-md animate__animated animate__fadeIn">
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
          <Form action="post" className="flex justify-between flex-col gap-2">
            <Input label="نام کامل" type="username" autoCompleteField="name" />

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
              <label htmlFor="checkBox">با قوانین و مقررات موافقم.</label>
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
