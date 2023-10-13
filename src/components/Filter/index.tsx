import {JSX, useState} from "react";
import close__icone from "./../../assets/Icons/close_icon.svg"
import {Filters} from "./Scripts"

interface IFiltering {
    where: string;
    tag: string;
    ion: string;
}
const f: IFiltering = {
    where: "",
    tag: "",
    ion: "",
}

const Filter:React.FC = (): JSX.Element => {
    // Filters settings
    const [showFilters, setShowFilters] = useState(true);

    // Filter Setting
    const [showFilter, setShowFilter] = useState(true);

    // Filtering
    const [filtering, setFiltering] = useState<IFiltering>(f);
    const setTag = (value: string) => {
        f.tag = value;
        setFiltering(f);
        console.log(filtering)
    }

    return showFilter ? (
        <div className={`animate__animated animate__fadeInDownBig  flex flex-col items-stretch justify-start gap-[19px] box-border w-[717.7px] h-[206px] pt-[15px] pr-[20.7px] pb-auto pl-[24px] bg-[#FFF] rounded-[8px] shadow-[0px_8px_12px_0px_rgba(0,0,0,0.20)]`}>
            <div className={`flex flex-row items-center justify-between`}>
                <div className={`text-[24px] font-extrabold`}>
                    فیلترها
                </div>
                <div onClick={() => setShowFilter(false)} className={`cursor-pointer select-none`}>
                    <img src={close__icone} alt=""/>
                </div>
            </div>
            <div className={`flex flex-col items-stretch justify-start gap-[24px]`}>
                {
                    showFilters ? <Filters setTagMethod={setTag} showMethodFilters={setShowFilters} /> : null
                }
                <div onClick={() => setShowFilters(true)} className={`text-[12px] font-extrabold text-[#208D8E] cursor-pointer select-none`}>افزودن فیلتر جدید</div>
            </div>
        </div>
    ) : <></>
}

export default Filter;