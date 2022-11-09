import HeadSection from "../HeadSection";
import s from "./Body.module.css";
import Pages from "../Pages/Createpage";
import { useState } from "react";
import TabBar from "../Common/TabBar";
import Uploads from "../../pages/Uploads";
import CommingSoon from "../../pages/commingsoon";

type TabAndBody = {
  tabName: String;
  body: JSX.Element;
};

const Body = ({ children }: any) => {
  const tabAndBody: TabAndBody[] = [
    { tabName: "Edit", body: <Pages /> },
    { tabName: "Uploads", body: <Uploads /> },
    { tabName: "View", body: <CommingSoon /> },
    { tabName: "Comming_soon", body: <CommingSoon /> },
  ];

  const tabs = tabAndBody.map((t) => t.tabName);
  const bodies = tabAndBody.map((t) => t.body);

  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className={s.rootContainer}>
      <HeadSection>
        <TabBar tabs={tabs} onSelectTab={(i) => setSelectedTab(i)} />
      </HeadSection>
      <hr></hr>
      {bodies.at(selectedTab)}
    </div>
  );
};

export default Body;
