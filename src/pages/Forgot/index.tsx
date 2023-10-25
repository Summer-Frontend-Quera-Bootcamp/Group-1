import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthenticateLayout from "../../Layout/AuthenticateLayout";
import AccountCard from "../../components/FormContainer/components/AccountCard";
import Input from "../../components/FormContainer/components/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/api";
import Message from "../../components/Message";

type Values = {
  email: string;
};

const Forgot = () => {
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const onSubmit = async (values: Values) => {
    setLoading(true);
    await axios({
      method: "post",
      url: `${baseUrl}accounts/reset-password/`,
      data: values,
    })
      .then(() => {
        setLoading(false);
        setApiError("");
        navigate("/sent-link");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.email) {
          setApiError("پست الکترونیکی صحبح وارد کنید.");
        } else if (error.response.data.detail) {
          setApiError("کاربری با این ایمیل وجود ندارد.");
        }
      });
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
        {/* Authentication Error Handling */}
        {apiError ? (
          <Message type="error" message={apiError} />
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
            <Input
              label="ایمیل خود را وارد کنید."
              type="email"
              autoCompleteField="email"
            />

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
                دریافت ایمیل بازیابی رمز عبور
              </button>
            )}
            <Link
              className="text-center font-extrabold text-brand-primary -mb-6"
              to={"/"}
            >
              بازگشت
            </Link>
          </Form>
        </Formik>
      </AccountCard>
      {/* ------------------------------Formik------------------------------ */}
    </AuthenticateLayout>
  );
};

export default Forgot;
