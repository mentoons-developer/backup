import React, { useEffect, useRef } from "react";
import Styles from "./videoslist.module.scss";
function VideosList() {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = useRef();
  const imageRef = useRef(null);

  // const handleClick = (event) => {
  //   const myAudio = videoRef.current;
  //   const playPause = imageRef.current;

  //   console.log(myAudio);

  //   setPlaying(!playing);

  //   if (playing) {
  //     playPause.style.clipPath =
  //       "polygon(0 0,100% 0,100% 100%,63% 100%,63% 0,36% 0,36% 100%,0 100%)";
  //     myAudio.play();
  //   } else {
  //     playPause.style.clipPath = "polygon(100% 50%, 0 0, 0 100%)";
  //     myAudio.pause();
  //   }
  // };

  return (
    <div>
      <div className={Styles.videos}>
        <div className={Styles.header}>
          <div>
            <h5>Nala and Tubby</h5>
            <p>On a fine day nala and tubby...</p>
          </div>
          <h6>02 sep, 2022</h6>
        </div>
        <div style={{ position: "relative" }}>
          <div>
            <video
              ref={videoRef}
              className={Styles.video}
              preload="metadata"
              controls
            >
              <source
                src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2Fvideo.mp4?alt=media&token=2498cca3-e134-40da-9262-e0ff5058ab67#t=0.5"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default VideosList;
// <img src={video} alt="oo" />
// <div
//             ref={imageRef}
//             onClick={handleClick}
//             className={Styles.play_pause}
//           ></div>

// <div className={Styles.interaction}>
//           <img src={heart} alt="oo" />
//           <span>83</span>
//         </div>