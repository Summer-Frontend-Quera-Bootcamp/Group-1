import "animate.css";

interface InputsErrorProps {
  children?: JSX.Element | JSX.Element[];
}

const InputsError: React.FC<InputsErrorProps> = ({ children }): JSX.Element => {
  return (
    <>
      <div className="text-xs text-red-danger mt-[-20px] mb-5 animate__animated animate__shakeX">
        {children}
      </div>
    </>
  );
};

export default InputsError;
