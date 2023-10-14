import "animate.css";

interface AccountCardProps {
  title: string;
  children: JSX.Element | JSX.Element[] | string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <div className="p-6 bg-white rounded-[20px] w-[640px] form-box-shadow animate__animated animate__fadeInDown">
      <div className="w-full text-center">
        <h1 className="text-[32px] mr-auto font-black mb-7">{title}</h1>
      </div>

      {/* Children i.e Form or <p></p> */}
      {children}
    </div>
  );
};

export default AccountCard;
