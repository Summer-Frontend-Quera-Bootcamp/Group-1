import "animate.css";

interface IMessage {
  type: string;
  message: string;
}

const Message: React.FC<IMessage> = ({ type, message }): JSX.Element => {
  return (
    <>
      {type === "error" ? (
        <div className="text-center bg-red-700 text-white px-5 mb-5 rounded-md animate__animated animate__fadeIn">
          {message}
        </div>
      ) : (
        <div className="text-center bg-green-300 text-white px-5 mb-5 rounded-md animate__animated animate__fadeIn">
          {message}
        </div>
      )}
    </>
  );
};

export default Message;
