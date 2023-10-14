export const SpaceItem = (): JSX.Element => {
  const fakeData = [
    {
      title: "Fake List Item 1",
      color: "#eee",
    },
  ];

  return (
    <div className="text-lg bg-brand-primary">
      <ul>
        {fakeData.map(item => {
            return <li><h2>{item.title}</h2> <div>{item.color}</div></li>
        })}
      </ul>
    </div>
  );
};