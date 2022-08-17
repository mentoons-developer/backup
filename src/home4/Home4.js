import React, { createRef, useEffect, useRef, useState } from "react";
import Styles from "./home4.module.scss";
import image from "../assets/group_image.png";

import audioStories from "../assets/audio-stories.png";
import illustratedStories from "../assets/illustrated-stories.png";
import stellaBella from "../assets/stella_bella.png";
import murderMystery from "../assets/murder_mystery.png";
import libraryTag from "../assets/library-tag.png";
import mallTag from "../assets/mallTag.png";
// import confetti from "https://cdn.skypack.dev/canvas-confetti";

function Home4() {
  const [animate, setAnimate] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const curtainRef = createRef();

  useEffect(() => {
    curtainRef.current.addEventListener("click", function () {
      setAnimate(!animate);
    });
  }, [animate, curtainRef]);

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 900);
      document.body.style.maxHeight = "none";
      document.body.style.overflow = "scroll";
    } else {
      window.scrollTo(0, 0);
      document.body.style.maxHeight = "100vh";
      document.body.style.overflow = "hidden";
    }
  }, [scroll]);

  const toggleScroll = () => {
    setScroll((prev) => !prev);
    console.log("pp");
  };
  console.log(scroll);
  const toggleAnimation = () => {
    setAnimate(!animate);
    setScroll((prev) => !prev);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     confetti();
  //     confetti();
  //     confetti();
  //   }, 3000);

  //   setTimeout(() => {
  //     confetti();
  //     confetti();
  //     confetti();
  //   }, 4000);
  // }, []);

  useEffect(() => {
    const targeet1 = document.querySelector("#target1");

    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          entry.isIntersecting ? setVisible(true) : setVisible(false);
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    // targeet1.forEach((item) => observer.observe(item));
    observer.observe(targeet1);
  }, []);

  useEffect(() => {
    const targeet5 = document.querySelector("#target5");

    const observer2 = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          entry.isIntersecting ? setVisible1(true) : setVisible1(false);
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );
    observer2.observe(targeet5);
  }, []);

  useEffect(() => {
    const targeet6 = document.querySelector("#target6");

    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          entry.isIntersecting ? setVisible2(true) : setVisible2(false);
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    // targeet1.forEach((item) => observer.observe(item));
    observer.observe(targeet6);
  }, []);

  return (
    <div>
      <div className={Styles.curtain}>
        <div
          className={`${Styles.left}  ${
            animate ? Styles.leftForward : Styles.leftReverse
          }`}
        ></div>
        <div
          ref={curtainRef}
          className={`${Styles.right}  ${
            animate ? Styles.rightForward : Styles.rightReverse
          }`}
        ></div>
      </div>
      <div className={Styles.ifram}>
        <div className={Styles.iframe_container}>
          <iframe
            src="https://www.youtube.com/embed/LG8brAlJXpk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div>
          <img className={Styles.teamImage} src={image} alt="" />
        </div>
        <div className={Styles.con}>
          <button onClick={toggleScroll}>Continue</button>
          <button onClick={toggleAnimation}>Exit</button>
        </div>
      </div>
      <div className={Styles.listy}>
        <div
          id="target1"
          className={`${Styles.description} ${visible ? Styles.visible : ""}`}
        >
          <img src={audioStories} alt="" />
          <span>Audio stories</span>
        </div>
        <div
          id="target2"
          className={`${Styles.description} ${visible ? Styles.visible : ""}`}
        >
          <img src={illustratedStories} alt="" />
          <span>Illustrated stories</span>
        </div>
        <div
          id="target3"
          className={`${Styles.description} ${visible ? Styles.visible : ""}`}
        >
          <img src={stellaBella} alt="" />
          <span>Comics</span>
        </div>
        <div
          id="target4"
          className={`${Styles.description} ${visible ? Styles.visible : ""}`}
        >
          <img src={murderMystery} alt="" />
          <span>knowledge Cards</span>
        </div>
      </div>
      <div id="target5" className={Styles.bg2}>
        <img
          src={libraryTag}
          className={`${Styles.libraryTag} ${visible1 ? Styles.visible2 : ""}`}
          alt=""
        />
      </div>
      <div id="target6" className={Styles.bg3}>
        <img
          src={mallTag}
          className={`${Styles.mallTag} ${visible2 ? Styles.visible3 : ""}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home4;

// <div className={Styles.frame}>
// <button
//   onClick={toggleScroll}
//   className={`${Styles.customBtn} ${Styles.btn12}`}
// >
//   <span>Site</span>
//   <span>Continue</span>
// </button>
// </div>

// <div className={Styles.frame}>
// <button
//   onClick={toggleAnimation}
//   className={`${Styles.customBtn} ${Styles.btn12}`}
// >
//   <span>Exit site!</span>
//   <span>Exit site</span>
// </button>
// </div>
