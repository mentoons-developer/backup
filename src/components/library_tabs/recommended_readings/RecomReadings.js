import React from "react";
import Styles from "./recomreadings.module.scss";
import cover1 from "../../../assets/comic1.jpg";
import cover3 from "../../../assets/comic3.jpg";
import cover4 from "../../../assets/comic4.jpg";
import cover5 from "../../../assets/comic5.jpg";
import cover6 from "../../../assets/comic6.jpg";

function RecomReadings() {
  return (
    <>
      <ul className={Styles.container}>
        <li className={Styles.recomm}>
          <img src={cover1} alt="" />
          <button>Read</button>
        </li>
        <li className={Styles.recomm}>
          <img src={cover3} alt="" />
          <button>Read</button>
        </li>
        <li className={Styles.recomm}>
          <img src={cover4} alt="" />
          <button>Read</button>
        </li>
        <li className={Styles.recomm}>
          <img src={cover5} alt="" />
          <button>Read</button>
        </li>
        <li className={Styles.recomm}>
          <img src={cover6} alt="" />
          <button>Read</button>
        </li>
      </ul>
    </>
  );
}

export default RecomReadings;
