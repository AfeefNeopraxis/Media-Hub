import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "../../helpers/context/appContext";
import CommingSoon from "../../pages/CommingSoonPage";
import EditPage from "../../pages/EditPage";
import UploadsPage from "../../pages/UploadsPage/UploadsPage";
import Center from "../Common/Center";
import TabBar from "../Common/TabBar";
import EmptyBox from "../EmptyBox/EmptyBox";
import HeadSection from "../HeadSection";
import Navigation from "../Navigation";
import s from "./Body.module.css";

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
  const { currentPage } = useContext(AppContext);

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
      {
        <div className={s.rootContainer}>
          {currentPage &&
            <>
              <HeadSection><TabBar tabs={tabAndBody} /></HeadSection>
              <hr></hr>
            </>
          }
          {
            currentPage ?
              <Routes>
                {tabAndBody.map((tb) => (
                  <Route key={tb.link} path={tb.link} element={tb.body} />
                ))}
                <Route path="*" element={<Navigate to={tabAndBody.at(0)?.link!} />} />
              </Routes>
              :
              <Center >
                <div className="w-1/5">
                  <img
                    src={`./images/${["wait_in_line", "blank_canvas", "empty_street", "experience_design"][Math.floor(Math.random() * 4)]}.svg`}
                    alt={"hai"} />
                </div>
              </Center>
          }
        </div>
      }
    </>
  );
};

export default Body;
