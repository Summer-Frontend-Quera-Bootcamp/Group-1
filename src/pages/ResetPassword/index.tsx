import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthenticateLayout from "../../Layout/AuthenticateLayout";
import AccountCard from "../../components/FormContainer/components/AccountCard";
import Input from "../../components/FormContainer/components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/api";

type Values = {
  password: string;
  password1: string;
};

const ResetPassword = () => {
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    password: "",
    password1: "",
  };

  const onSubmit = async (values: Values) => {
    // # Getting Token from url coming from user's Email
    const accessToken = window.location.href.split("=")[1];

    // # Create new object of Values
    const updatedValues = { ...values, token: accessToken };

    setLoading(true);
    await axios({
      method: "patch",
      url: `${baseUrl}accounts/reset-password/set-password/`,
      data: updatedValues,
    })
      .then(() => {
        setLoading(false);
        setApiSuccess("رمز عبور با موفقیت تغییر یافت");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        setApiError(error.response.data.detail);
      });
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد!")
      .required("رمز عبور جدید خود را وارد نکرده اید!"),
    password1: Yup.string()
      .required("رمز عبور خود را تکرار نکرده اید")
      .oneOf(
        [Yup.ref("password")],
        "رمز وارد شده با رمز انتخابی جدید یکسان نیست"
      ),
  });
  return (
    <AuthenticateLayout showSignup={false}>
      {/* ------------------------------Formik------------------------------ */}
      <AccountCard title="تغییر رمز عبور">
        {/* Authentication Error Handling */}
        {apiError ? (
          <div className="text-center bg-red-700 text-white px-5 mb-5 rounded-md animate__animated animate__fadeIn">
            {apiError}
          </div>
        ) : (
          <></>
        )}
        {/* ----------------------------- */}

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
          <Form
            action="patch"
            className="flex justify-between flex-col gap-2 mb-6"
          >
            <Input
              label="رمز عبور جدید را وارد کنید"
              type="password"
              autoCompleteField="password"
            />

            <Input
              label="تکرار رمز عبور"
              type="password1"
              autoCompleteField="none"
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
                اعمال تغییرات
              </button>
            )}
          </Form>
        </Formik>
      </AccountCard>
      {/* ------------------------------Formik------------------------------ */}
    </AuthenticateLayout>
  );
};

export default ResetPassword;
