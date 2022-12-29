import HeadSection from "../HeadSection";
import s from "./Body.module.css";
import EditPage from "../../pages/EditPage";
import TabBar from "../Common/TabBar";
import UploadsPage from "../../pages/UploadsPage/UploadsPage";
import CommingSoon from "../../pages/CommingSoonPage";
import EmptyBox from "../EmptyBox/EmptyBox";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";

type TabAndBody = {
  name: String;
  link: string;
  body: JSX.Element;
};

export type Tab = {
  name: String;
  link: string;
};

const Body = () => {
  const tabAndBody: TabAndBody[] = [
    { link: "/edit", body: <EditPage />, name: "Edit" },
    { link: "/uploads", body: <UploadsPage />, name: "Uploads" },
    { link: "/preview", body: <EmptyBox />, name: "Preview" },
    { link: "/comming-soon", body: <CommingSoon />, name: "Comming_soon" },
  ];

  return (
    <>
      {/* The CenterBar section */}
      <div className="w-96 bg-[#F2EBE1]">
        <Navigation />
      </div>
      {/* The Body section */}
      <div className={s.rootContainer}>
        <HeadSection>
          <TabBar tabs={tabAndBody} />
        </HeadSection>
        <hr></hr>
        <Routes>
          {tabAndBody.map((tb) => (
            <Route key={tb.link} path={tb.link} element={tb.body} />
          ))}
          <Route path="*" element={<div>nothing</div>} />
        </Routes>
      </div>
    </>
  );
};

export default Body;
