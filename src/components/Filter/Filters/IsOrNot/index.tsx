import {JSX} from "react";

interface IIsOrNot {
    setAnswer: (newValue: string) => void;
    setText: (newValue: string) => void;
    showMethod: (newValue: boolean) => void;
    showValue: boolean;
}
interface IItems {
    text: string;
    id: string;
    value: string;
}

const items: Array<IItems> = [
    {
        id: "1",
        text: "است",
        value: "is"
    },
    {
        id: "2",
        text: "نیست",
        value: "not"
    }
]
const IsOrNot:React.FC<IIsOrNot> = ({setAnswer, showValue, showMethod, setText}): JSX.Element => {
    const handleClick = (itemValue: string, itemText: string) => {
        setAnswer(itemValue);
        setText(itemText);
        showMethod(!showValue);
    }
    return (
        <div className={`animate__animated animate__fadeInUp flex flex-col items-stretch justify-start gap-[16px] absolute top-[30px] left-0 box-border p-[8px] min-w-[107px] cursor-pointer select-none text-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[8px] `}>
            {
                items.map((item: IItems) => {
                    return (
                        <div onClick={() => handleClick(item.value, item.text)} key={item.id}>
                            {
                                item.text
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default IsOrNot