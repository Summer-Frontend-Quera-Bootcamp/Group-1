import { useEffect, useState } from "react";
import { SideBarList } from "../SideBarList";
import axios from "axios";
import { baseUrl } from "../../../constants/api";

// const accordionData = [
//   {
//     tag_color: "bg-green-200",
//     title: "درس مدیریت پروژه",
//     contents: [],
//   },
//   {
//     tag_color: "bg-yellow-200",
//     title: "Section 2",
//     contents: ["project1", "project2"],
//   },
//   {
//     tag_color: "bg-red-600",
//     title: "Section 3",
//     contents: [],
//   },
//   {
//     tag_color: "bg-blue-500",
//     title: "درس طراحی الگوریتم",
//     contents: [],
//   },
// ];
export const SideBarItem = () => {
  const [arrayOfWorkspaces, setArrayOfWorkspaces] = useState([]);
  const [arrayOfContents, setArrayOfContents] = useState([])

  
  const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MzYwMDIwLCJpYXQiOjE2OTgzMzg0MjAsImp0aSI6ImJlYjM3YTU1NzIzYzQ1ZGE5YTc2YzBlMWU2MDU3NDA4IiwidXNlcl9pZCI6MjA2fQ.nuWjEnaTQ00XQ8OaX9_tqZmxUamMevCO8ugEME22xTM";
  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}workspaces/`,
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((res) => {
      // console.log(res);
      setArrayOfWorkspaces(res.data);
    });
  }, []);

  useEffect(() => {
    arrayOfWorkspaces.forEach((element) => {
      axios({
        method: "get",
        url: `${baseUrl}workspaces/${element.id}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((res) => setArrayOfContents(res.data))
    })
  },[])

  return (
    <>
      <button className="accordion w-[100%] ">
        {arrayOfWorkspaces.map(({ name, arrayOfContents, color }) => (
          <SideBarList
            name={name}
            contents={arrayOfContents}
            color={color}
          />
        ))}
      </button>
    </>
  );
};
