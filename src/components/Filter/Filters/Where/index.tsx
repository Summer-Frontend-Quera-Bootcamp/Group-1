import React, {ChangeEvent, JSX, useState} from "react";
import Icons from "../../../../icons/Icons.tsx";

interface IWhere {
    showMethod: (newValue: boolean) => void;
    setText: (newValue: string) => void;
    setAnswer: (newValue: string) => void;
    showValue: boolean;
}

interface IData {
    txt: string;
    id: string;
    value: string;
}

const mainData: IData[] = [
    {
        txt: "تاریخ",
        id: "1",
        value: "history",
    },
    {
        txt: "تگ",
        id: "2",
        value: "tag",
    },
    {
        txt: "اعضا",
        id: "3",
        value: "members",
    },
    {
        txt: "اولویت",
        id: "4",
        value: "priority",
    }
]

const Where: React.FC<IWhere> = ({showMethod, showValue, setAnswer, setText}): JSX.Element => {
    const [data, setData] = useState<IData[]>(mainData);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.trim();
        if (!searchTerm) {
            setData(mainData);
            return;
        }
        const filteredData = mainData.filter((d: IData) => d.txt.trim().includes(searchTerm));
        setData(filteredData);
    };

    const clickHandler = (whereValue: string, whereText: string) => {
        setAnswer(whereValue);
        setText(whereText);
        showMethod(!showValue);
    }
    return (
        <div
            className={`animate__animated animate__fadeInUp flex flex-col items-stretch justify-start gap-[11px] absolute right-[87px] box-border text-[12px] w-[182px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[8px] bg-[#FFF] top-[30px] left-0`}>
            <div
                className={`flex flex-row items-center justify-center gap-[8px] px-[8px] py-[6px] border-b-[.5px] border-solid border-[#E8EAED] `}>
                {
                    Icons.search("#208D8E")
                }
                <input type="text" placeholder={`جستجو بین فیلترها`} onChange={handleChange}
                       className={`w-full outline-none text-[12px]`}/>
            </div>
            <div className={`flex flex-col items-stretch justify-start gap-[16px] px-[8px] pb-[8px]`}>

                {
                    data.map((d: IData) => {
                        return (
                            <div onClick={() => clickHandler(d.value, d.txt)} key={d.id} className={`cursor-pointer select-none`}>
                                <div
                                    className={`inline-flex items-center justify-center rounded-[14px] px-[8px] h-[24px] bg-[#FFF] `}>
                                    {
                                        d.txt
                                    }
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}

export default Where;