import Icons from '../../icons/Icons';
import {JSX, useState} from "react";

interface INewTask {
    setNewTask: (value: boolean) => void,
}

const NewTask: React.FC<INewTask> = ({setNewTask}): JSX.Element => {
    const [animation, setAnimation] = useState<string>("animate__animated animate__fadeInDownBig")

    const handleClick = async () => {
        setAnimation("animate__animated animate__fadeOutUpBig")
        await setTimeout(() => {
            setNewTask(false);
        }, 200)

    }
    return (
        <div
            dir='ltr'
            className={`${animation} w-[1153px] p-8 bg-white rounded-[20px] shadow flex-col justify-start items-end gap-10 inline-flex`}
        >
            <div className='self-stretch justify-between items-center inline-flex'>
                <div onClick={() => handleClick()} className='w-8 h-8 justify-center items-center flex'>
                    <button className='w-8 h-8 relative'>{Icons.close()}</button>
                </div>
                <div className='justify-start items-center gap-[13px] flex'>
                    <div className="text-right text-stone-900 text-2xl font-medium font-['IranYekan Regular']">
                        عنوان تسک
                    </div>
                    <div className='w-4 h-4 bg-zinc-300 rounded-sm'/>
                </div>
            </div>
            <div className='self-stretch justify-end items-center gap-2 inline-flex'>
                <button
                    className='w-[34px] h-[34px] p-[4.25px] rounded-[106.25px] border border-stone-300 justify-center items-center gap-[10.62px] flex'>
                    <div className='w-5 h-5 justify-center items-center flex'>
                        <div className='w-5 h-5 relative'>{Icons.user()}</div>
                    </div>
                </button>
                <div className="text-right text-stone-900 text-base font-medium font-['IranYekan Regular']">
                    برای
                </div>
                <div
                    className='h-8 px-2 pt-[5px] pb-1 bg-white rounded-md border border-gray-200 justify-end items-center gap-2.5 flex'>
                    <div className="text-right text-stone-900 text-base font-medium font-['IranYekan Regular']">
                        پروژه اول
                    </div>
                </div>
                <div className="text-right text-stone-900 text-base font-medium font-['IranYekan Regular']">
                    در
                </div>
            </div>
            <textarea
                placeholder='توضیحاتی برای این تسک بنویسید'
                className='overflow-hidden text-right outline-none w-[1089px] h-[191px] pl-[826px] pr-8 pt-[19px] pb-[149px] rounded-xl border border-neutral-200'
            ></textarea>
            <div className='self-stretch justify-end items-center gap-4 inline-flex'>
                <button className='px-2 py-1 rounded border border-brand-primary justify-end items-center gap-1 flex'>
                    <div className="text-right text-stone-900 text-base font-medium font-['IranYekan Regular']">
                        آپلود فایل
                    </div>
                    <div className='w-6 h-6 justify-center items-center flex'>
                        <div className='w-6 h-6 relative'>{Icons.link()}</div>
                    </div>
                </button>
                <div className="text-right text-stone-900 text-base font-medium font-['IranYekan Regular']">
                    افزودن پیوست{' '}
                </div>
            </div>
            <div className='self-stretch justify-end items-center gap-4 inline-flex'>
                <button className='px-2 py-1 rounded border border-brand-primary justify-end items-center gap-1 flex'>
                    <div className="text-right text-stone-900 text-base font-medium font-['IranYekan Regular']">
                        آپلود فایل
                    </div>
                    <div className='w-6 h-6 justify-center items-center flex'>
                        <div className='w-6 h-6 relative'>{Icons.link()}</div>
                    </div>
                </button>
                <div className="text-right text-stone-900 text-base font-medium font-['IranYekan Regular']">
                    افزودن کاور
                </div>
            </div>
            <div className='self-stretch justify-between items-center inline-flex'>
                <button
                    className='w-[125px] h-8 px-[7px] py-1 bg-brand-primary rounded justify-center items-center gap-2.5 flex'>
                    <div className="text-right text-white text-xs font-normal font-['IranYekan Regular']">
                        ساختن تسک
                    </div>
                </button>
                <div className='justify-end items-center gap-6 flex'>
                    <button
                        className='w-[50px] h-[50px] p-[6.67px] rounded-[138.89px] border border-stone-300 justify-center items-center flex'>
                        <div className='w-[29.41px] h-[29.41px] justify-center items-center flex'>
                            <div className='w-[29.41px] h-[29.41px] relative'>
                                {Icons.bookmark()}
                            </div>
                        </div>
                    </button>
                    <button
                        className='w-[50px] h-[50px] p-[6.67px] rounded-[138.89px] border border-stone-300 justify-center items-center flex'>
                        <div className='w-[30px] h-[30px] justify-center items-center flex'>
                            <div className='w-[30px] h-[30px] relative'>
                                {Icons.calendarView('#C1C1C1')}
                            </div>
                        </div>
                    </button>
                    <button
                        className='w-[50px] h-[50px] p-[6.67px] rounded-[138.89px] border border-stone-300 justify-center items-center flex'>
                        <div className='w-[29.41px] h-[29.41px] justify-center items-center flex'>
                            <div className='w-[29.41px] h-[29.41px] relative'>
                                {Icons.flag()}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewTask;
