import {JSX} from "react";
import {useRef} from "react";
import close_icon from "./../../assets/Icons/close_icon.svg"

const ShareWorkspace: React.FC = (): JSX.Element => {
    const shareCard = useRef<HTMLDivElement | null>(null);
    const shareComponent = useRef<HTMLDivElement | null>(null);
    const removeClickHandler = () => {
        if (shareCard.current && shareComponent.current) {
            shareCard.current?.classList.toggle("animate__fadeInDown");
            shareCard.current?.classList.toggle("animate__fadeOutUp");
            setTimeout(() => {
                shareComponent.current?.classList.add("hidden");
            }, 500)
        }
    }
    return (
        <div ref={shareComponent} className={`flex flex-row items-center justify-center h-[100vh] w-[100vw] absolute top-[0px] left-[0px] transition ease-in-out duration-500`}>
            <div ref={shareCard} className={`animate__animated animate__fadeInDown flex flex-col items-stretch gap-[40px] box-border p-[20px] rounded-[12px] w-[547px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]`}>
                <div className={`flex flex-row items-center justify-between`}>
                    <div onClick={removeClickHandler} className={`select-none cursor-pointer`}>
                        <img src={close_icon} alt=""/>
                    </div>
                    <div className={`text-[20px]`}>اشتراک‌گذاری ورک‌اسپیس‌</div>
                    <div className={`select-none cursor-pointer`}>
                        <img src={close_icon} alt=""/>
                    </div>
                </div>
                <div className={`flex flex-col items-stretch justify-start gap-[24px]`}>
                    <div className={`flex flex-row items-center justify-center h-[40px]`}>
                        <input placeholder={`دعوت با ایمیل`} type="text"
                               className={`w-full h-[100%] outline-none rounded-r-[8px] bg-[#F0F1F3] text-[14px] pr-[11px] pt-[10px] pb-[6px]`}/>
                        <button
                            className={`pt-[10px] pr-[29px] pb-[6px] pl-[30px] text-[#FFFFFF] bg-[#208D8E] rounded-l-[8px]`}>ارسال
                        </button>
                    </div>
                    <div className={`flex flex-row items-center justify-between`}>
                        <div className={`flex flex-row items-center justify-start gap-[8px] text-[14px]`}>
                            <div>
                                <img src={close_icon} alt=""/>
                            </div>
                            <div>لینک خصوصی</div>
                        </div>
                        <div
                            className={`text-[12px] px-[12px] pt-[3px] pb-[2px] border border-solid border-[#E9EBF0] rounded-[6px] cursor-pointer select-none `}>کپی
                            لینک
                        </div>
                    </div>
                    <div className={`flex flex-col items-stretch justify-start gap-[16px]`}>
                        <div className={`text-[14px] text-[#7D828C]`}>
                            اشتراک گذاشته شده با
                        </div>
                        <div className={`flex flex-col items-stretch justify-between gap-[8px]`}>
                            <div className={`flex flex-row items-center justify-between`}>
                                <div className={`flex flex-row items-center justify-start gap-[8px]`}>
                                    <div className={`flex flex-row items-center justify-start gap-[7px]`}>
                                        <div
                                            className={`flex flex-row items-center justify-center w-[34px] h-[37px] bg-green-300 rounded-[50%]`}>AR
                                        </div>
                                        <div>من</div>
                                    </div>
                                    <div
                                        className={`px-[8px] py-[4px] bg-[#D0EBFF] text-[12px] text-[#228BE6] rounded-[6px]`}>workspace
                                        owner
                                    </div>
                                </div>
                                <div
                                    className={`px-[8px] pt-[5px] pb-[4px] border border-solid border-[#A6A7A7] rounded-[6px] text-[#A6A7A7] text-[12px] cursor-pointer select-none`}>
                                    دسترسی کامل
                                </div>
                            </div>
                            <div className={`flex flex-row items-center justify-between`}>
                                <div className={`flex flex-row items-center justify-start gap-[8px]`}>
                                    <div
                                        className={`flex flex-row items-center justify-center w-[34px] h-[37px] bg-red-500 rounded-[50%]`}>SR
                                    </div>
                                    <div className={`text-[14px]`}>
                                        Sararahimi@gmail.com
                                    </div>
                                </div>
                                <div className={`flex flex-row items-center justify-start gap-[4px]`}>
                                    <div
                                        className={`flex flex-row items-center justify-center gap-[10px] border border-solid border-[#E9EBF0] rounded-[6px] px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                                        <div className={`text-[12px]`}>دسترسی کامل</div>
                                        <div>
                                            <img src={close_icon} alt="" width={`14`}/>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex flex-row items-center justify-center gap-[10px] border border-solid border-[#E9EBF0] rounded-[6px] px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                                        <div className={`text-[12px]`}>همه پروژه‌ها</div>
                                        <div>
                                            <img src={close_icon} alt="" width={`14`}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex flex-row items-center justify-between`}>
                                <div className={`flex flex-row items-center justify-start gap-[8px]`}>
                                    <div
                                        className={`flex flex-row items-center justify-center w-[34px] h-[37px] bg-red-500 rounded-[50%]`}>SR
                                    </div>
                                    <div className={`text-[14px]`}>
                                        Sararahimi@gmail.com
                                    </div>
                                </div>
                                <div className={`flex flex-row items-center justify-start gap-[4px]`}>
                                    <div
                                        className={`flex flex-row items-center justify-center gap-[10px] border border-solid border-[#E9EBF0] rounded-[6px] px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                                        <div className={`text-[12px]`}>دسترسی ادیت</div>
                                        <div>
                                            <img src={close_icon} alt="" width={`14`}/>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex flex-row items-center justify-center gap-[10px] border border-solid border-[#E9EBF0] rounded-[6px] px-[8px] pt-[5px] pb-[4px] cursor-pointer select-none`}>
                                        <div className={`text-[12px]`}>پروژه اول</div>
                                        <div>
                                            <img src={close_icon} alt="" width={`14`}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareWorkspace;