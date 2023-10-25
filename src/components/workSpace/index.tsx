import { Link } from "react-router-dom";
import Icons from "../../assets/Icons/Icons";

interface Message {
  message: string;
  color: string;
}

const WorkSpace = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-8 my-9 text-xl mx-3">
        <h1 className="font-extrabold">درس مدیریت پروژه</h1>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <Card color="#51db6a" message="اول" />
        <Card color="#51db6a" message="دوم" />
        <Card color="#51db6a" message="سوم" />
        <Card color="#51db6a" message="چهارم" />
        <Card color="#51db6a" message="پنجم" />
        <AddCard />
      </div>

      <hr />
      <div className="flex flex-col items-start gap-8 my-9 text-xl mx-3">
        <h1 className="font-extrabold">کارهای شخصی</h1>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <Card
          color="linear-gradient(250deg, #FAB005 0%, rgba(250, 176, 5, 0.50) 100%)"
          message="اول"
        />
        <Card
          color="linear-gradient(250deg, #FAB005 0%, rgba(250, 176, 5, 0.50) 100%)"
          message="دوم"
        />
        <Card
          color="linear-gradient(250deg, #FAB005 0%, rgba(250, 176, 5, 0.50) 100%)"
          message="سوم"
        />
        <Card
          color="linear-gradient(250deg, #FAB005 0%, rgba(250, 176, 5, 0.50) 100%)"
          message="چهارم"
        />
        <Card
          color="linear-gradient(250deg, #FAB005 0%, rgba(250, 176, 5, 0.50) 100%)"
          message="پنجم"
        />
        <AddCard />
      </div>
      <hr />
      <div className="flex flex-col items-start gap-8 my-9 text-xl mx-3">
        <h1 className="font-extrabold">درس کامپایلر</h1>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <AddCard />
      </div>

      
      <hr />
      <div className=" flex flex-col items-start gap-8 my-9 text-xl mx-3">
        <h1 className="font-extrabold">درس طراحی الگوریتم</h1>
      </div>

      <div className="flex items-start gap-8 mb-8">
        <Card
          color="linear-gradient(250deg, #228BE6 0%, rgba(34, 139, 230, 0.50) 100%)"
          message="اول"
        />
        <Card
          color="linear-gradient(250deg, #228BE6 0%, rgba(34, 139, 230, 0.50) 100%)"
          message="دوم"
        />
        <Card
          color="linear-gradient(250deg, #228BE6 0%, rgba(34, 139, 230, 0.50) 100%)"
          message="سوم"
        />
        <Card
          color="linear-gradient(250deg, #228BE6 0%, rgba(34, 139, 230, 0.50) 100%)"
          message="چهارم"
        />
        <AddCard />
      </div>
    </div>
  );
};

function Card(props: Message) {
  return (
    <Link
      to={"/test"}
      // change this to
      className={
        "flex w-48 h-20 items-center justify-center font-extrabold rounded-3xl"
      }
      style={{ background: props.color, color: "#fff" }}
    >
      پروژه {props.message}
    </Link>
  );
}

function AddCard() {
  return (
    <button
      className="flex justify-center text-red-600 border-4 border-red-600 items-center gap-2 py-7 px-2.5 rounded-3xl text-center text-base w-52"
    >
      <span className="flex justify-center items-center w-4 h-4">
        {Icons.addBox("#FA5252")}
      </span>{" "}
      ساختن پروژه جدید
    </button>
  );
}
export default WorkSpace;
