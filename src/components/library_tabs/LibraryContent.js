import React from "react";
import Styles from "../library_header/librarytabs.module.scss";
import DiyCourses from "./diy_courses/DiyCourses";
import Journals from "./journals/Journals";
import RecomReadings from "./recommended_readings/RecomReadings";

function LibraryContent() {
  const [active, isActive] = React.useState("tab1");

  const handleClick1 = () => {
    isActive("tab1");
  };
  const handleClick2 = () => {
    isActive("tab2");
  };
  const handleClick3 = () => {
    isActive("tab3");
  };
  const handleClick4 = () => {
    isActive("tab4");
  };
  return (
    <div>
      <div className={active === "tab1" ? Styles.show : Styles.hide}>
        <RecomReadings />
      </div>
      <div className={active === "tab2" ? Styles.show : Styles.hide}>
        <DiyCourses />
      </div>
      <div className={active === "tab3" ? Styles.show : Styles.hide}>
        <Journals />
      </div>
      <div className={active === "tab4" ? Styles.show : Styles.hide}>
        <RecomReadings />
      </div>
    </div>
  );
}

export default LibraryContent;
