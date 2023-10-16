import { SpaceList } from "../SpaceList";

const accordionData = [
  {
    tag_color: "bg-green-200",
    title: "درس مدیریت پروژه",
    content: "",
  },
  {
    tag_color: "#FAB005",
    title: "Section 2",
    content: "چروژه ۱ ",
  },
  {
    tag_color: "#FA5252",
    title: "Section 3",
    content: "",
  },
  {
    tag_color: "#228BE6",
    title: "درس طراحی الگوریتم",
    content: "",
  },
];
export const SpaceItem = () => {
  return (
    <>
      <button className="accordion w-[100%] ">
        {accordionData.map(({ title, content, tag_color }) => (
          <SpaceList title={title} content={content} tag-color={tag_color} />
        ))}
      </button>
    </>
  );
};
