import { ErrorMessage, Field } from "formik";
import InputsError from "../InputsError";

type InputProps = {
  label: string;
  type: string;
  autoCompleteField: string;
};

const Inputs: React.FC<InputProps> = ({
  label,
  type,
  autoCompleteField,
  // handleChange,
  // handleBlur
}): JSX.Element => {
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <Field
        className={`border border-[#AAA] rounded-md w-auto h-10 text-sm outline-0 pl-2 ltr mb-5`}
        id={type}
        type={type}
        name={type}
        autoComplete={autoCompleteField}
      />
      <ErrorMessage name={type} component={InputsError} />
    </>
  );
};

export default Inputs;
