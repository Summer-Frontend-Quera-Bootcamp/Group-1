import {JSX} from "react";
import close__icone from "./../../assets/Icons/close_icon.svg"
import {Where, Tag, IsOrNot} from "./Scripts"

const Filter:React.FC = (): JSX.Element => {

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
                <div className={`flex flex-row items-center justify-between animate__animated animate__fadeIn`}>
                    <div className={`flex flex-row items-center justify-start gap-[8px] text-[14px]`}>
                        <div>تسک‌هایی که</div>
                        <div className={`flex flex-row items-center justify-between relative w-[182px] border border-solid border-[#E9EBF0] rounded-[6px] text-[12px] text-[#959595] box-border px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                            <div>انتخاب کنید</div>
                            <div><img src={close__icone} alt="" width={`18`}/></div>
                            <Where />
                        </div>
                        <div>آن‌ها</div>
                        <div className={`flex flex-row items-center justify-between relative w-[146px] border border-solid border-[#E9EBF0] rounded-[6px] text-[12px] text-[#959595] box-border px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                            <div>انتخاب کنید</div>
                            <div><img src={close__icone} alt="" width={`18`}/></div>
                            <Tag />
                        </div>
                        <div className={`flex flex-row items-center justify-between relative w-[107px] border border-solid border-[#E9EBF0] rounded-[6px] text-[12px] box-border px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                            <div>است</div>
                            <div><img src={close__icone} alt="" width={`18`}/></div>
                            <IsOrNot />
                        </div>
                    </div>
                    <div className={`self-end cursor-pointer select-none`}>
                        <img src={close__icone} alt=""/>
                    </div>
                </div>
                <div className={`text-[12px] font-extrabold text-[#208D8E] cursor-pointer select-none`}>افزودن فیلتر جدید</div>
            </div>
        </div>
    );
}

export default Filter;