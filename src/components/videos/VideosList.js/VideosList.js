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
      <div className={Styles.videos_container}>
        <div className={Styles.videos}>
          <div className={Styles.header}>
            <div>
              <h5>Welcome to mentoons</h5>
              <p>An introduction to mentoons by Sahil</p>
            </div>
            <h6>01 Aug, 2022</h6>
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
        <div className={Styles.videos}>
          <div className={Styles.header}>
            <div>
              <h5>Accept mistakes</h5>
              <p>We should always accept mistakes and do not repeat</p>
            </div>
            <h6>01 Aug, 2022</h6>
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
                  src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2FNew%20Project%2010.MP4?alt=media&token=a4e0b0da-d298-4974-803b-9acfc3514b5c#t=0.9"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className={Styles.videos}>
          <div className={Styles.header}>
            <div>
              <h5>Mentor Mahesh</h5>
              <p>About Toonland founder</p>
            </div>
            <h6>03 Aug, 2022</h6>
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
                  src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2Fmentormahesh.mp4?alt=media&token=449fa600-7a8b-4089-bc5e-362030fe1a18#t=1.9"
                  type="video/mp4"
                />
              </video>
            </div>
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
