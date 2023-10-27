import {JSX} from "react";

interface IMessage {
    date: string,
    userName: string,
    text: string
}
const Message:React.FC<IMessage> = ({date, userName, text}):JSX.Element => {
    return (
        <div className={`flex flex-row items-stretch justify-start px-[16px] gap-[8px]`}>
            <div>
                <img src="" alt="" width={`36`} height={`36`} className={`rounded-[50%]`}/>
            </div>
            <div className={`flex flex-col items-stretch justify-start gap-[8px] p-[16px] border-solid border-[1px] border-[#F4F4F4] rounded-[12px]`}>
                <div className={`flex flex-row items-stretch justify-between w-[497px]`}>
                    <span className={`flex flex-row items-center justify-start gap-[4px]`}>
                        <span className={`text-[16px] text-[#208D8E] font-[800] `}>
                            {
                                userName
                            }
                        </span>
                        <span className={`text-[12px] text-[#AAA]`}>
                            کامنت گذاشتید
                        </span>
                    </span>
                    <span className={`text-[12px] text-[#AAA]`}>
                        {date}
                    </span>
                </div>
                <div className={`text-[12px]`}>
                    {
                        text
                    }
                </div>
            </div>
        </div>
    );
}

export default Message;