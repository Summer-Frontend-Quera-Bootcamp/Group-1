import { JSX, useState } from "react";
import Icons from "./../../icons/Icons.tsx";
import Filters from "./Filters/index.tsx";

interface IFilter {
  showFilter: boolean;
  setFilter: (value: boolean) => void;
}
interface IFiltering {
  where: string;
  tag: string;
  ion: string;
}
const f: IFiltering = {
  where: "",
  tag: "",
  ion: "",
};

const Filter: React.FC<IFilter> = ({ setFilter, showFilter }): JSX.Element => {
  // Filters settings
  const [animation, setAnimation] = useState<string>(
    "animate__animated animate__fadeInDownBig"
  );
  const [showFilters, setShowFilters] = useState(true);

  // Filtering
  //     ion
  const [filtering, setFiltering] = useState<IFiltering>(f);
  const setIon = (value: string) => {
    f.ion = value;
    setFiltering(f);
  };
  //     tag
  const setTag = (value: string) => {
    f.tag = value;
    setFiltering(f);
  };
  //     where
  const setWhere = (value: string) => {
    f.where = value;
    setFiltering(f);
  };

  const handleClose = async () => {
    setAnimation("animate__animated animate__fadeOutUpBig");
    await setTimeout(() => {
      setFilter(false);
    }, 200);
  };

  return showFilter ? (
    <div
      className={`z-[999] ${animation} flex flex-col items-stretch justify-start gap-[19px] box-border w-[717.7px] h-[206px] pt-[15px] pr-[20.7px] pb-auto pl-[24px] bg-[#FFF] rounded-[8px] shadow-[0px_8px_12px_0px_rgba(0,0,0,0.20)]`}
    >
      <div className={`flex flex-row items-center justify-between`}>
        <div className={`text-[24px] font-extrabold`}>فیلترها</div>
        <div
          onClick={() => handleClose()}
          className={`cursor-pointer select-none`}
        >
          {Icons.close()}
        </div>
      </div>
      <div className={`flex flex-col items-stretch justify-start gap-[24px]`}>
        {showFilters ? (
          <Filters
            setWhereMethod={setWhere}
            setTagMethod={setTag}
            setIonMethod={setIon}
            showMethodFilters={setShowFilters}
          />
        ) : null}
        <div
          onClick={() => setShowFilters(true)}
          className={`text-[12px] font-extrabold text-[#208D8E] cursor-pointer select-none`}
        >
          افزودن فیلتر جدید
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Filter;
