import React from "react";
import DiyCourses from "../library_tabs/diy_courses/DiyCourses";
import Journals from "../library_tabs/journals/Journals";
import RecomReadings from "../library_tabs/recommended_readings/RecomReadings";
import Styles from "./librarytabs.module.scss";
function LibraryHeader() {
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
    <div style={{ position: "sticky", top: 0 }}>
      <ul className={Styles.tabs}>
        <li
          onClick={handleClick1}
          className={active === "tab1" ? Styles.active : ""}
        >
          <h5>DIY courses</h5>
        </li>
        <li
          onClick={handleClick2}
          className={active === "tab2" ? Styles.active : ""}
        >
          <h5>Journals</h5>
        </li>
        <li
          onClick={handleClick3}
          className={active === "tab3" ? Styles.active : ""}
        >
          <h5>Recommended readings</h5>
        </li>
        <li
          onClick={handleClick4}
          className={active === "tab4" ? Styles.active : ""}
        >
          <h5>Books</h5>
        </li>
      </ul>
    </div>
  );
}

export default LibraryHeader;
// <DiyCourses className={active === "tab2" ? Styles.show : Styles.hide} />
//       <Journals className={active === "tab3" ? Styles.show : Styles.hide} />
