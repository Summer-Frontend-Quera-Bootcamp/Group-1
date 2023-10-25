import { SpaceList } from "../SpaceList";

const accordionData = [
  {
    tag_color: "bg-green-200",
    title: "درس مدیریت پروژه",
    contents:[]
  },
  {
    tag_color: "bg-yellow-200",
    title: "Section 2",
    contents :[
      "project1",
      "project2"
    ]
  },
  {
    tag_color: "bg-red-600",
    title: "Section 3",
    contents: [],
  },
  {
    tag_color: "bg-blue-500",
    title: "درس طراحی الگوریتم",
    contents: [],
  },
];
export const SpaceItem = () => {
  return (
    <>
      <button className="accordion w-[100%] ">
        {accordionData.map(({ title, contents, tag_color }) => (
          <SpaceList title={title} contents={contents} tag_color={tag_color} />
        ))}
      </button>
    </>
  );
};
