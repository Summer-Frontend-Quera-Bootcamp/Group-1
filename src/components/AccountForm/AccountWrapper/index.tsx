import "animate.css"

type AccountProps = {
  title: string;
  children: JSX.Element | JSX.Element[] | string;
};

const AccountWrapper: React.FC<AccountProps> = ({title, children}): JSX.Element => {
  return (
    <div className="p-6 bg-white rounded-[20px] w-[640px] animate__animated animate__fadeInDown">
      {/* Card Title */}
      <div className="w-full text-center">
        <h1 className="text-[32px] mr-auto font-black mb-7">{title}</h1>
      </div>

      {/* Children i.e Form or <p></p> */}
      {children}
    </div>
  );
};

export default AccountWrapper;
