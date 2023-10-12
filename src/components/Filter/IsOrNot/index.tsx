import {JSX} from "react";

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
const IsOrNot:React.FC = (): JSX.Element => {
    return (
        <div className={`flex flex-col items-stretch justify-start gap-[16px] absolute top-[30px] left-0 box-border p-[8px] min-w-[107px] cursor-pointer select-none text-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[8px]`}>
            {
                items.map((item: IItems) => {
                    return (
                        <div key={item.id}>
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