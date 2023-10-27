import React, {JSX, useEffect, useState} from "react";
import Icons from "../../../icons/Icons.tsx";
import axios from "axios";
import {baseUrl} from "../../../constants/api.ts";
import {useFormik} from "formik";
import Message from "./Message";
//import * as yup from "yup";


type iconsColorsType = {
    emoji: string;
    documnt: string;
    link: string;
    atsign: string;
}

type messageType = {
    message: string;
}

interface IChat {
    workspace_id: string,
    project_id: string,
    board_id: string,
    task_id: string,
}

const Chat: React.FC<IChat> = ({board_id, project_id, task_id, workspace_id}): JSX.Element => {
    const [expandChat, setExpandChat] = useState<boolean>(false)
    const [messages, setMessages] = useState<string[]>([]);
    const [iconColor, setIconColor] = useState<iconsColorsType>({
        atsign: "#C9CBDA",
        emoji: "#C9CBDA",
        documnt: "#C9CBDA",
        link: "#C9CBDA",
    })

    const handleOnMouseOver = (type: string) => {
        switch (type) {
            case "emoji":
                setIconColor({...iconColor, emoji: "#208D8E"})
                break;
            case "document":
                setIconColor({...iconColor, documnt: "#208D8E"})
                break;
            case "link":
                setIconColor({...iconColor, link: "#208D8E"})
                break;
            case "atSign":
                setIconColor({...iconColor, atsign: "#208D8E"})
                break;
        }
    }
    const handleOnMouseOut = (type: string) => {
        switch (type) {
            case "emoji":
                setIconColor({...iconColor, emoji: "#C9CBDA"})
                break;
            case "document":
                setIconColor({...iconColor, documnt: "#C9CBDA"})
                break;
            case "link":
                setIconColor({...iconColor, link: "#C9CBDA"})
                break;
            case "atSign":
                setIconColor({...iconColor, atsign: "#C9CBDA"})
                break;
        }
    }

    const formik = useFormik<messageType>({
        initialValues: {
            message: "",
        },
        onSubmit: async (values) => {
            formik.resetForm();
            const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MzYwMDIwLCJpYXQiOjE2OTgzMzg0MjAsImp0aSI6ImJlYjM3YTU1NzIzYzQ1ZGE5YTc2YzBlMWU2MDU3NDA4IiwidXNlcl9pZCI6MjA2fQ.nuWjEnaTQ00XQ8OaX9_tqZmxUamMevCO8ugEME22xTM"
            if (!!values.message) {
                setExpandChat(false)
                await axios.post(baseUrl + `workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/`, {
                    headers: {'Authorization': `Bearer ${accessToken}`},
                    data: [
                        {
                            "id": 0,
                            "author": 0,
                            "attachment": "string",
                            "text": "string"
                        }
                    ]
                })
                setMessages([...messages, values.message]);
            } else {
                alert("متن داخل کامنت نباید خالی باشد")
            }
        },
    });

    const getMessages = async () => {
    
        const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MzYwMDIwLCJpYXQiOjE2OTgzMzg0MjAsImp0aSI6ImJlYjM3YTU1NzIzYzQ1ZGE5YTc2YzBlMWU2MDU3NDA4IiwidXNlcl9pZCI6MjA2fQ.nuWjEnaTQ00XQ8OaX9_tqZmxUamMevCO8ugEME22xTM"
        axios({
            method: "GET",
            url: `${baseUrl}workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/`,
            headers: { 'Authorization': `Bearer ${accessToken}` },
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        // await axios.get(`${baseUrl}workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/`, {
        //     headers: {'Authorization': `Bearer ${accessToken}`},
        //     data: [
        //         {
        //             "id": 0,
        //             "author": 0,
        //             "attachment": "string",
        //             "text": "string"
        //         }
        //     ]
        // })
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }


    useEffect(() => {
        getMessages()
    }, [])


    return (
        <div
            className={`flex flex-col items-stretch justify-start h-[100%] gap-[25px] border-solid border-[#F4F4F4] border-r-[1px]`}>
            <header className={`border-solid border-[#F4F4F4] border-b-[1px] pb-[40px]`}>
                <div className={`flex flex-row justify-start items-stretch gap-[48px]`}>
                    <div className={`flex flex-col justify-start gap-[8px]`}>
                        <div className={`text-[12px] text-[#BBBBBB]`}>ساخته شده در</div>
                        <div className={`text-[16px] font-[500] text-[#1E1E1E]`}>1 اردیبهشت 1402</div>
                    </div>
                    <div className={`flex flex-col justify-start gap-[8px]`}>
                        <div className={`text-[12px] text-[#BBBBBB]`}>ددلاین</div>
                        <div className={`text-[16px] font-[500] text-[#1E1E1E]`}>پس‌فردا</div>
                    </div>
                </div>
            </header>
            <section>
                <ul>
                    {
                        messages.map((message: string) => {
                            return (
                                <Message date={message} text={message} userName={message} key={message}  />
                            )
                        })
                    }
                </ul>
            </section>
            <section
                className={`absolute bottom-0 left-0 right-[50%] w-[50%] h-auto`}>
                {
                    expandChat ? (
                        <div onClick={() => setExpandChat(true)}
                             className={`animate__animated animate__fadeInUp flex flex-col justify-between mt-[13px] mr-[16px] mb-[30px] ml-[36px] px-[15px]`}>
                            <div
                                className={`w-[100%] h-[149px] rounded-t-[12px] shadow-[0px_-7px_18px_-10px_rgba(0,0,0,0.25)] p-[10px]`}>
                                <div
                                    className={`absolute top-[23px] right-[32px] text-[16px] text-[#AEAEAE]`}>
                                    کامنت
                                </div>
                                <div className={`absolute top-[23px] left-[64px]`}>
                                    {
                                        Icons.comment()
                                    }
                                </div>
                                <form action={"POST"} onSubmit={formik.handleSubmit}>
                                    <textarea
                                        placeholder={". . ."}
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        className={`h-[85px] w-[100%] mt-[40px] mx-[8px] resize-none outline-none text-[16px]`}></textarea>
                                    <button type="submit"
                                            className={`absolute bottom-[25px] left-[60px] text-[12px] text-[#FFF] font-[800] bg-[#208D8E] rounded-[6px] px-[12px] py-[6px]`}>
                                        ثبت کامنت
                                    </button>
                                </form>
                            </div>
                            <div className={`flex flex-row justify-between w-[100%] px-[20px]`}>
                                <div className={`flex flex-row justify-start gap-[20px]`}>
                                    <i onMouseOut={() => handleOnMouseOut("emoji")}
                                       onMouseOver={() => handleOnMouseOver("emoji")} className={`cursor-pointer`}>
                                        {
                                            Icons.emoji(iconColor.emoji)
                                        }
                                    </i>
                                    <i onMouseOut={() => handleOnMouseOut("document")}
                                       onMouseOver={() => handleOnMouseOver("document")} className={`cursor-pointer`}>
                                        {
                                            Icons.document(iconColor.documnt)
                                        }
                                    </i>
                                    <i onMouseOut={() => handleOnMouseOut("link")}
                                       onMouseOver={() => handleOnMouseOver("link")} className={`cursor-pointer`}>
                                        {
                                            Icons.link(iconColor.link)
                                        }
                                    </i>
                                    <i onMouseOut={() => handleOnMouseOut("atSign")}
                                       onMouseOver={() => handleOnMouseOver("atSign")} className={`cursor-pointer`}>
                                        {
                                            Icons.atSign(iconColor.atsign)
                                        }
                                    </i>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div onClick={() => setExpandChat(true)}
                             className={`animate__animated animate__fadeInDown flex flex-row justify-between mt-[13px] mr-[16px] mb-[30px] ml-[36px] cursor-pointer`}>
                            <div className={`text-[#AEAEAE]`}>کامنت شما</div>
                            <div>
                                <i>
                                    {
                                        Icons.comment("#AEAEAE")
                                    }
                                </i>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    );
}

export default Chat;