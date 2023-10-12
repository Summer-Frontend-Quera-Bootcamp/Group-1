import {JSX} from "react";

const IsOrNot:React.FC = (): JSX.Element => {
    return (
        <div className={`flex flex-col items-stretch justify-start gap-[16px] absolute top-[30px] left-0 box-border p-[8px] min-w-[107px] cursor-pointer select-none text-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[8px]`}>
            <div>است</div>
            <div>نیست</div>
        </div>
    );
}

export default IsOrNot