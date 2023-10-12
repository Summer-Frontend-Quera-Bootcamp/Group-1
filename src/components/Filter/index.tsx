import {JSX, useState} from "react";
import close__icone from "./../../assets/Icons/close_icon.svg"
import {Filters} from "./Scripts"

const Filter:React.FC = (): JSX.Element => {
    // Filter settings
    const [showFilters, setShowFilters] = useState(true);

    return (
        <div className={`flex flex-col items-stretch justify-start gap-[19px] box-border w-[717.7px] h-[206px] pt-[15px] pr-[20.7px] pb-auto pl-[24px] bg-[#FFF] rounded-[8px] shadow-[0px_8px_12px_0px_rgba(0,0,0,0.20)]`}>
            <div className={`flex flex-row items-center justify-between`}>
                <div className={`text-[24px] font-extrabold`}>
                    فیلترها
                </div>
                <div className={`cursor-pointer select-none`}>
                    <img src={close__icone} alt=""/>
                </div>
            </div>
            <div className={`flex flex-col items-stretch justify-start gap-[24px]`}>
                {
                    showFilters ? <Filters showMethodFilters={setShowFilters} /> : null
                }
                <div onClick={() => setShowFilters(true)} className={`text-[12px] font-extrabold text-[#208D8E] cursor-pointer select-none`}>افزودن فیلتر جدید</div>
            </div>
        </div>
    );
}

export default Filter;