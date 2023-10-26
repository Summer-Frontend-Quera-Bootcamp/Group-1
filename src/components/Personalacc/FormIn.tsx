
import Input from '../FormContainer/Input'
import { Formik, Form, ErrorMessage, Field, useFormik } from "formik";
import * as Yup from "yup"
import Profile from '../setting';
const FormIn = () => {
const initialValues = {email: "",username: "", password:"",password1:"", password2:""}

const validationSchema = Yup.object({
  email:Yup.string().required("ایمیل خود را وارد نکردید"),
  username: Yup.string().required("نام کاربری خود را وارد نکردید"),
  password:Yup.string().required("رمز عبور خود را وارد نکردید"),
  password1: Yup.string().required("رمز عبور خود را تکرار نکرده اید")
      .oneOf(
        [Yup.ref("password")],
        "رمز وارد شده با رمز انتخابی جدید یکسان نیست"
      ),
      password2:Yup.string().required("رمز عبور خود را تکرار نکرده اید")
      .oneOf(
        [Yup.ref("password1")],
        "رمز وارد شده با رمز انتخابی جدید یکسان نیست"
      )
})

  return (
    <div>
      <Profile/>
      
    <Formik initialValues={initialValues} onSubmit={()=>{}} validationSchema={validationSchema} validateOnMount ><Form action="patch" className='flex flex-col items-center mb-2.5'>
      
          <h1 className='text-right mb-2'>اطلاعات حساب</h1>
          
      <div className='flex flex-col mb-2.5'><Input type='email' label='ایمیل' autoCompleteField='email' /></div>
      <div className='flex flex-col mb-2.5'><Input type='text' label='نام کاربری' autoCompleteField='text' /></div>
      <div className='flex flex-col mb-2.5'><Input type='password' label='رمز عبور فعلی' autoCompleteField='password' /></div>
      <div className='flex flex-col mb-2.5'><Input type='password1' label='رمز عبور جدید' autoCompleteField='password' /></div>
      <div className='flex flex-col mb-2.5'><Input type='password2' label='تکرار رمز عبور جدید' autoCompleteField='password' /></div>
      <Button/>
    </Form>
    </Formik>
    </div>
  )
}

function Button (){
    return <button type='submit' className='flex  text-center items-center justify-start  rounded-md bg-teal-600 text-white w-64 px-12 py-2 font-extrabold'>ثبت تغییرات</button>
}

export default FormIn


