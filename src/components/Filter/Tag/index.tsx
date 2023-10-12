import React, {JSX, useState, ChangeEvent} from "react";
import close_icon from "./../../../assets/Icons/close_icon.svg"

interface IData {
    txt: string;
    id: string;
    value: string;
    color: string;
    bgColor: string;
}

const mainData: IData[] = [
    {
        txt: "درس",
        id: "lesson",
        value: "lesson",
        color: "#228BE6",
        bgColor: "#D0EBFF",
    },
    {
        txt: "کار",
        id: "work",
        value: "work",
        color: "#7950F2",
        bgColor: "#E5DBFF",
    },
    {
        txt: "پروژه",
        id: "project",
        value: "project",
        color: "#15AABF",
        bgColor: "#C5F6FA",
    }
]

const Tag: React.FC = (): JSX.Element => {
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

    return (
        <div
            className={`flex flex-col items-stretch justify-start gap-[16px] box-border text-[12px] w-[146px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#FFF] absolute top-[30px] left-0 rounded-[8px]`}>
            <div
                className={`flex flex-row items-center justify-center gap-[8px] px-[8px] py-[4px] border-b-[.5px] border-solid border-[#E8EAED] `}>
                <img src={close_icon} alt="" width={20.83} className={`select-none`}/>
                <input type="text" placeholder={`جستجو`} onChange={handleChange}
                       className={`w-full outline-none text-[12px]`}/>
            </div>

            <div className={`flex flex-col items-stretch justify-start gap-[16px] px-[8px] pb-[8px]`}>

                {
                    data.map((d: IData) => {
                        return (
                            <div key={d.id} className={`cursor-pointer select-none`}>
                                <div
                                    className={`inline-flex items-center justify-center rounded-[14px] px-[8px] h-[24px] bg-[${d.bgColor}] text-[${d.color}] `}>
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

export default Tag;
