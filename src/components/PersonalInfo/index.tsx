import Input from "../FormContainer/components/Input.js";
import { Formik, Form } from "formik";
import Profile from "../Setting/index.js";

const initialValues = { firstName: "", lastname: "", phone: "" };

const PersonalInfo = () => {
  return (
    <>
      <Profile />

      <Formik initialValues={initialValues} onSubmit={() => {}} validateOnMount>
        <Form action="patch" className="flex flex-col items-center mb-2.5">
          <div className="title-info mb-4 mt-20">
            <ProfilePic />
            <div>
              <ButtonInfo />
              <div className="text-xs">این تصویر برای عموم قابل نمایش است.</div>
            </div>
          </div>

          <div className="flex flex-col mb-2.5">
            <Input type="text" label="نام" autoCompleteField="email" />
          </div>
          <div className="flex flex-col mb-2.5">
            <Input type="text" label="نام خانوادگی" autoCompleteField="text" />
          </div>
          <div className="flex flex-col mb-2.5">
            <Input
              type="password"
              label="رمز عبور فعلی"
              autoCompleteField="password"
            />
          </div>
          <Button />
        </Form>
      </Formik>
    </>
  );
};

function Button() {
  return (
    <button
      type="submit"
      className="flex items-center justify-start gap-2 rounded-md bg-brand-primary text-white px-12 py-2 font-extrabold"
    >
      ثبت تغییرات
    </button>
  );
}
function ButtonInfo() {
  return (
    <button className="flex p-3 items-start gap-3 border rounded-lg border-cyan-300 text-cyan-300">
      ویرایش تصویر پروفایل
    </button>
  );
}
function ProfilePic() {
  return <div className="personal-info roun">MN</div>;
}

export default PersonalInfo;
