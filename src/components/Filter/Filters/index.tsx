import close__icone from "../../../assets/Icons/close_icon.svg";
import {IsOrNot, Tag, Where} from "../Scripts";
import {JSX, useState} from "react";

interface IFilters {
    showMethodFilters: (newValue: boolean) => void;
    setIonMethod: (newValue: string) => void;
    setTagMethod: (newValue: string) => void;
    setWhereMethod: (newValue: string) => void;
}
const Filters: React.FC<IFilters> = ({showMethodFilters, setIonMethod, setTagMethod, setWhereMethod}):JSX.Element => {
    // IsOrNot settings
    const [showION, setShowION] = useState(false);
    const [ionSelect, setIonSelect] = useState<string>("is");
    const [ionText, setIonText] = useState<string>("است")
    setIonMethod(ionSelect)
    // Tag settings
    const [showTag, setShowTag] = useState(false)
    const [tagSelect, setTagSelect] = useState<string>("");
    const [tagText, setTagText] = useState<string>("انتخاب کنید");
    setTagMethod(tagSelect);
    // Where settings
    const [showWhere, setShowWhere] = useState(false)
    const [whereSelect, setWhereSelect] = useState<string>("");
    const [whereText, setWhereText] = useState<string>("انتخاب کنید");
    setWhereMethod(whereSelect);

    return (
        <div className={`flex flex-row items-center justify-between animate__animated animate__fadeIn`}>
            <div className={`relative flex flex-row items-center justify-start gap-[8px] text-[14px]`}>
                <div>تسک‌هایی که</div>
                <div onClick={() => setShowWhere(!showWhere)} className={`flex flex-row items-center justify-between relative w-[182px] border border-solid border-[#E9EBF0] rounded-[6px] text-[12px] text-[#959595] box-border px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                    <div>{whereText}</div>
                    <div><img src={close__icone} alt="" width={`18`}/></div>
                </div>
                {
                    showWhere ? <Where setText={setWhereText} setAnswer={setWhereSelect} showValue={showWhere} showMethod={setShowWhere} /> : null
                }
                <div>آن‌ها</div>
                <div onClick={() => setShowTag(!showTag)} className={`flex flex-row items-center justify-between relative w-[146px] border border-solid border-[#E9EBF0] rounded-[6px] text-[12px] text-[#959595] box-border px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                    <div>{tagText}</div>
                    <div><img src={close__icone} alt="" width={`18`}/></div>
                </div>
                {
                    showTag ? <Tag setText={setTagText} setAnswer={setTagSelect} showValue={showTag} showMethod={setShowTag} /> : null
                }
                <div onClick={() => setShowION(!showION)} className={`flex flex-row items-center justify-between relative w-[107px] border border-solid border-[#E9EBF0] rounded-[6px] text-[12px] box-border px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                    <div>{ionText}</div>
                    <div><img src={close__icone} alt="" width={`18`}/></div>
                </div>
                {
                    showION ? <IsOrNot setText={setIonText} setAnswer={setIonSelect} showValue={showION} showMethod={setShowION} /> : null
                }
            </div>
            <div onClick={() => showMethodFilters(false)} className={`self-end cursor-pointer select-none`}>
                <img src={close__icone} alt=""/>
            </div>
        </div>
    );
}

export default Filters;