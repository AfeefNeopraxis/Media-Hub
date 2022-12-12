import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab } from "../Body/Body";
import Center from "./Center";

const TabBar = ({ tabs }: { tabs: Tab[] }) => {
  const [selected, setSelected] = useState(tabs.at(0)?.name);

  return (
    <div className="flex absolute bottom-0">
      {tabs.map((tab, index) => (
        <Link key={"item-" + index} to={tab.link}>
          <TabItem
            selected={tab.name === selected}
            name={tab.name}
            onClickTab={setSelected}
          />
        </Link>
      ))}
    </div>
  );
};

type TabItemProps = {
  selected: boolean;
  name: String;
  onClickTab: (selectedTabName: String) => void;
};

const TabItem: React.FC<TabItemProps> = ({ selected, name, onClickTab }) => {
  return (
    <Center
      onClick={() => onClickTab(name)}
      className={`py-1 px-6 rounded-t-2xl text-center text-sm duration-200 ${
        selected ? "bg-amber-400 scale-105 font-bold" : "bg-[#F2EBE1]"
      }`}
    >
      {name}
    </Center>
  );
};

export default TabBar;
