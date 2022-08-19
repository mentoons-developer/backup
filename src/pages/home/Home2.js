import React, { useEffect, useRef, useState } from "react";
import Styles from "./home2.module.scss";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext"
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.png";
import bg6 from "../../assets/bg6.png";
import meerkat from "../../assets/meerkat2.png";
import pinkcard from "../../assets/pinkcard.png";
import fifi from "../../assets/fifi.png";
import hi from "../../assets/hi.png";
import dialogueBox from "../../assets/dialogue_box.png";
import toto from "../../assets/toto.png";
import tubbykuma from "../../assets/tubby_kuma.png";
import nala from "../../assets/nala.png";
// import meme from "../../assets/meme_of_the_day1.png";
import meme from "../../assets/meme.png";
import contest from "../../assets/contest.png";
import contest2 from "../../assets/contest2.png";
import signin from "../../assets/signin.png";
import dummy2 from "../../assets/dummy2.jpeg";
import dummy3 from "../../assets/dummy3.jpeg";
import mute from "../../assets/mute.png";
import volume from "../../assets/volume.png";
import music from "../../assets/toonlandmusic.mpeg";

import illustratedStories from "../../assets/illustrated-stories.png";
import audioStories from "../../assets/audio-stories.png";
import murderMystery from "../../assets/murder_mystery.png";
import stellaBella from "../../assets/stella_bella.png";

import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import happyChildhood from "../../assets/happy-childhood.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiCalls";

export default function Home2() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [date]);

  console.log(date, "pp");

  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

  const [playing, setPlaying] = useState(true);

  const audioRef = useRef(null);
  const imageRef = useRef(null);

  const handleClick = (event) => {
    const myAudio = audioRef.current;
    const myImage = imageRef.current;
    console.log(myAudio);
    console.log(myImage);

    setPlaying(!playing);

    if (playing) {
      myAudio.play();
      myImage.src = volume;
    } else {
      myAudio.pause();
      myImage.src = mute;
    }
  };
  // console.log(playing);

  return (
    <>
      {/*<div>
        <button onClick={handleLogout} className={Styles.login_button}>
          <Link to="/login">{currentUser ? "Signout" : "SignIn"}</Link>
        </button>
        </div>*/}
      <div>
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mpeg" />
        </audio>
        <img
          style={{
            position: "fixed",
            cursor: "pointer",
            zIndex: "99",
            maxWidth: "3rem",
            borderRadius: "50%",
            background: "white",
            padding: "0.4rem",
            bottom: 10,
            right: 10,
          }}
          ref={imageRef}
          onClick={handleClick}
          src={volume}
          alt=""
        />
      </div>
      <div className={Styles.homepage}>
        <div className={Styles.pg2}>
          <img className={Styles.pg2_bg} src={bg2} alt="" />
          <div>
            {/*<img className={Styles.nala} src={nala} alt="" />*/}
            <div className={Styles.meme}>
              <img src={meme} alt="" />
              <ul>
                <li className={Styles.quotes}>“</li>
                <li>
                  <p>
                    Let us remember: One book, one pen, one child and one
                    teacher can change the world.
                  </p>
                </li>
                <li className={Styles.quotes}>”</li>
              </ul>
            </div>
          </div>
          <div className={Styles.listy}>
            <div className={Styles.description}>
              <img src={audioStories} alt="" />
              <span>Audio stories</span>
            </div>
            <div className={Styles.description}>
              <img src={illustratedStories} alt="" />
              <span>Illustrated stories</span>
            </div>
            <div className={Styles.description}>
              <img src={stellaBella} alt="" />
              <span>Comics</span>
            </div>
            <div className={Styles.description}>
              <img src={murderMystery} alt="" />
              <span>knowledge Cards</span>
            </div>
          </div>
        </div>

        <div className={Styles.pg3}>
          <img className={Styles.pg3_bg} src={bg3} alt="" />
          {/*<div
            style={{
              position: "absolute",
              top: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "100%",
              gap: "2rem",
              placeItems: "center",
            }}
          >
            <h5 className={Styles.about2}>
              Toonland is a fictitious place created for our kids to help is
              them learn about different aspects of life. The characters! of
              toonland are specially designed and are bascal on the '9 human
              intelligence Theory, which will help oun Reels learn about
              friendships a love, emotions, peace, and harmony. also downlood
              stickers and posters for free from the website
                </h5>
             <div className={Styles.list}>
              <img src={audioStories} alt="" />
              <img src={illustratedStories} alt="" />
              <img src={murderMystery} alt="" />
              <img src={stellaBella} alt="" />
            </div>
          </div>*/}
        </div>

        <div className={Styles.pg4}>
          <img className={Styles.pg4_bg} src={bg4} alt="" />
          <img className={Styles.fifi} src={fifi} alt="" />
          {/*<img className={Styles.meerkat} src={meerkat} alt="" />*/}
        </div>
        <div className={Styles.pg5}>
          <img className={Styles.pg5_bg} src={bg5} alt="" />
          <img className={Styles.tubbykuma} src={tubbykuma} alt="" />
          {/*<span className={Styles.dummy_text}>
            Click here for fun and exciting videos.
        </span>*/}

          {/*<span className={Styles.library_text}>
            Develop your knowledge with our Recommended readings, DIY courses,
            Journals and knowledge cards.
        </span>*/}
        </div>

        <div className={Styles.pg6}>
          <Link to="/explore/mall">
            <img className={Styles.pg6_bg} src={bg6} alt="" />
          </Link>
          {/*<span className={Styles.video_text}>
            Click here for exciting and fun videos.
        </span>*/}
          <div className={Styles.dummy}>
            <iframe
              src="https://www.youtube.com/embed/t0Q2otsqC4I"
              title="YouTube video player"
              allow="accelerometer;"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/K93u6cHVwf8"
              title="YouTube video player"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/vGHz6sJMKsI"
              title="YouTube video player"
            ></iframe>
          </div>
          {/* <img className={Styles.contest} src={contest} alt="" />
          <div className={Styles.pinkcard}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="file" placeholder="Select your File" />
            <button>Submit</button>
        </div>*/}
          {/*<img className={Styles.contest2} src={contest2} alt="" />*/}
        </div>
      </div>
    </>
  );
}
// <img className={Styles.happy_childhood} src={happyChildhood} alt="" />
// <div className={Styles.illustrated_stories}>
//             <img src={illustratedStories} alt="" />
//             <p>
//               read the toonland stories with illustrations and colourful
//               cartoons
//             </p>
//             <ul>
//               <li>nubby cousin marraige</li>
//               <li>theatre ceremony</li>
//               <li>lulu loves toto</li>
//             </ul>
//           </div>
//           <div className={Styles.audio_stories}>
//             <img src={audioStories} alt="" />
//             <p>listen to fun-filled toonland stories, narrated by kids</p>
//             <ul>
//               <li>lulu loves toto</li>
//               <li>theatre ceremony</li>
//               <li>nubby cousin marraige</li>
//             </ul>
//           </div>
// <img className={Styles.logo} src={signin} alt="" />

// <img src={pinkcard} alt="" />

// <span
//             style={{
//               position: "absolute",
//               fontFamily: "Providence",
//               left: 0,
//               zIndex: 99,
//             }}
//           >
//             Toonland Theater, watch exciting and fun videos
//           </span>

// <div className={Styles.iframe}>
//   <iframe
//     className={`Styles.ytp-title-text`}
//     src="https://www.youtube.com/embed/t0Q2otsqC4I"
//     title="YouTube video player"
//     allow="accelerometer;"
//   ></iframe>
//   <iframe
//     src="https://www.youtube.com/embed/K93u6cHVwf8"
//     title="YouTube video player"
//   ></iframe>
//   <iframe
//     src="https://www.youtube.com/embed/vGHz6sJMKsI"
//     title="YouTube video player"
//   ></iframe>
// </div>;

// <div className={Styles.header}>
//   <div className={Styles.header_menu}>
//     <img src={menu} alt="" />
//     <img src={logo} className={Styles.logo} alt="" />
//     <button>Signup</button>
//   </div>
// </div>;
