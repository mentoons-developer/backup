import * as React from "react";
import { createRef, useEffect, useRef, useState } from "react";
import Styles from "./home4.module.scss";
import image from "../../../assets/group_image.png";

import audioStories from "../../../assets/audio-stories.png";
import stellaBella from "../../../assets/stella_bella.png";
import murderMystery from "../../../assets/murder_mystery.png";
// import libraryTag from "../../../assets/library-tag.png";
// import mallTag from "../../../assets/mallTag.png";
import bg6 from "../../../assets/bg6.png";
import { Link } from "react-router-dom";

import bg1 from "../../../assets/bg1.jpg";
import bg2 from "../../../assets/bg2.jpg";
import bg3 from "../../../assets/bg3.jpg";
import bg4 from "../../../assets/bg4.jpg";
import bg5 from "../../../assets/bg5.png";
import fifi from "../../../assets/fifi.png";
import tubbykuma from "../../../assets/kuma.png";
import kuma from "../../../assets/tubby_kuma.png";
// import meme from "../../../assets/meme.png";
import volume from "../../../assets/volume.png";
import music from "../../../assets/toonlandmusic.mpeg";
import mute from "../../../assets/mute.png";
import contestNew from "../../../assets/contest-new.png";
import meerkat2 from "../../../assets/fifi1.png";
import lulu from "../../../assets/lulu.png";

import illustratedStories from "../../../assets/illustrated-stories.png";

// import bgNew from "../../../assets/bg-new.jpg";
// import menu from "../../../assets/menu.png";
// import happyChildhood from "../../../assets/happy-childhood.png";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

//   ,
import { Box } from "@mui/system";

function Home4() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [animate, setAnimate] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const curtainRef = createRef();

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

  // var myCanvas = document.createElement("canvas");
  // document.body.appendChild(myCanvas);

  // var myConfetti = confetti.create(myCanvas, { resize: true });

  // useEffect(() => {
  //   myConfetti();
  // });

  // useEffect(() => {
  //   const targeet1 = document.querySelector("#target1");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       console.log(entries);
  //       entries.forEach((entry) => {
  //         entry.isIntersecting ? setVisible(true) : setVisible(false);
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: "100px" }
  //   );
  //   observer.observe(targeet1);
  // }, []);

  // useEffect(() => {
  //   const targeet5 = document.querySelector("#target5");

  //   const observer2 = new IntersectionObserver(
  //     (entries) => {
  //       console.log(entries);
  //       entries.forEach((entry) => {
  //         entry.isIntersecting ? setVisible1(true) : setVisible1(false);
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: "100px" }
  //   );
  //   observer2.observe(targeet5);
  // }, []);

  // useEffect(() => {
  //   const targeet6 = document.querySelector("#target6");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       console.log(entries);
  //       entries.forEach((entry) => {
  //         entry.isIntersecting ? setVisible2(true) : setVisible2(false);
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: "100px" }
  //   );

  //   // targeet1.forEach((item) => observer.observe(item));
  //   observer.observe(targeet6);
  // }, []);

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
            {/*<div className={Styles.meme}>
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
            </div>*/}
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
          <img className={Styles.meerkat2} src={meerkat2} alt="" />
          {/*<img className={Styles.meerkat} src={meerkat} alt="" />*/}
        </div>
        <div className={Styles.pg5}>
          <img className={Styles.pg5_bg} src={bg5} alt="" />
          <img className={Styles.tubbykuma} src={tubbykuma} alt="" />
          <img className={Styles.lulu} src={lulu} alt="" />
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
          <img src={contestNew} className={Styles.contestNew} alt="" />

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
      <div className={Styles.bg7}>
        <Paper
          style={{
            padding: "20px 20px",
            background: "rgba( 255, 255, 255, 0.75 )",
          }}
          elevation={3}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h3 style={{ margin: 0, textAlign: "left" }}>
                Interact with us{" "}
              </h3>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Share your opinions" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Leave your Ideas" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Interact with other parents and kids" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tell us how we can improve" />
                </ListItemButton>
              </List>
              <Box
                sx={{ border: 1 }}
                style={{
                  padding: 20,
                  borderRadius: 10,
                  border: "0.1px solid gray",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      aria-label="Share your opinions"
                      minRows={3}
                      placeholder="Share your opinions"
                      style={{
                        width: "100%",
                        padding: 10,
                        minHeight: 20,
                        border: "0.1px solid gray",
                        borderRadius: 3,
                        background: "none",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={kuma} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Kuma</h4>
              <p style={{ textAlign: "left" }}>
                molestie porttitor metus. Pellentesque et neque risus. Aliquam
                vulputate, mauris vitae tincidunt interdum, mauris mi vehicula
                urna, nec feugiat quam lectus vitae ex.{" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={meerkat2} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Fifi</h4>
              <p style={{ textAlign: "left" }}>
                molestie porttitor metus. Pellentesque et neque risus. Aliquam
                vulputate, mauris vitae tincidunt interdum, mauris mi vehicula
                urna, nec feugiat quam lectus vitae ex.{" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
        </Paper>
        <br />
        <br />
        <Accordion
          elevation={2}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h3 sx={{ width: "100%", flexShrink: 0 }}>
              Frequently asked questions
            </h3>
          </AccordionSummary>
        </Accordion>
        <Accordion
          elevation={2}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{ background: "ffffff86" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <p>How to buy from this site</p>
          </AccordionSummary>
          <AccordionDetails>
            <span>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={2}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <p sx={{ color: "text.secondary" }}>
              Can I GPay? (to be illustrated)
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <span>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={2}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <p sx={{ width: "33%", flexShrink: 0 }}>
              Can I pay through cards?{" "}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <span>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </span>
          </AccordionDetails>
        </Accordion>
        <footer style={{ textAlign: "center" }}>
          <h3>Subscribe Newsletter</h3>
          <div className={Styles.embed}>
            <input placeholder="Enter Email" />
            <ArrowRightAltIcon className={Styles.arrow} />
          </div>
          <h3>Follow us on</h3>
          <div className={Styles.social}>
            <InstagramIcon />
            <YouTubeIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </footer>
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

// <div className={Styles.listy}>
// <div
//   id="target1"
//   className={`${Styles.description} ${visible ? Styles.visible : ""}`}
// >
//   <img src={audioStories} alt="" />
//   <span>Audio stories</span>
// </div>
// <div
//   id="target2"
//   className={`${Styles.description} ${visible ? Styles.visible : ""}`}
// >
//   <img src={illustratedStories} alt="" />
//   <span>Illustrated stories</span>
// </div>
// <div
//   id="target3"
//   className={`${Styles.description} ${visible ? Styles.visible : ""}`}
// >
//   <img src={stellaBella} alt="" />
//   <span>Comics</span>
// </div>
// <div
//   id="target4"
//   className={`${Styles.description} ${visible ? Styles.visible : ""}`}
// >
//   <img src={murderMystery} alt="" />
//   <span>knowledge Cards</span>
// </div>
// </div>
// <div id="target5" className={Styles.bg2}>
// <img
//   src={libraryTag}
//   className={`${Styles.libraryTag} ${visible1 ? Styles.visible2 : ""}`}
//   alt=""
// />
// </div>
// <div id="target6" className={Styles.bg3}>
// <img
//   src={mallTag}
//   className={`${Styles.mallTag} ${visible2 ? Styles.visible3 : ""}`}
//   alt=""
// />
// </div>

// <div className={Styles.bg7}>
//   <h3>Frequently asked questions!</h3>
//   <ul>
//     <li>
//       <input type="checkbox" checked="checked" />
//       <i></i>
//       <h4>Can I pay through cards? </h4>
//       <p>
//         This page was written in HTML and CSS. The CSS was compiled from SASS. I
//         used Normalize as my CSS reset and -prefix-free to save myself some
//         headaches. I haven't quite gotten the hang of Slim for compiling into
//         HTML, but someday I'll use it since its syntax compliments that of SASS.
//         Regardless, this could all be done in plain HTML and CSS.
//       </p>
//     </li>
//     <li>
//       <input type="checkbox" checked />
//       <i></i>
//       <h4>How to buy from this site.</h4>
//       <p>
//         Using the sibling and checked selectors, we can determine the styling of
//         sibling elements based on the checked state of the checkbox input
//         element. One use, as demonstrated here, is an entirely CSS and HTML
//         accordion element. Media queries are used to make the element responsive
//         to different screen sizes.
//       </p>
//     </li>
//     <li>
//       <input type="checkbox" checked />
//       <i></i>
//       <h4>Can I GPay? (to be illustrated)</h4>
//       <p>
//         By making the open state default for when :checked isn't detected, we
//         can make this system accessable for browsers that don't recognize
//         :checked. The fallback is simply an open accordion. The accordion can be
//         manipulated with Javascript (if needed) by changing the "checked"
//         property of the input element.
//       </p>
//     </li>{" "}
//     <li>
//       <input type="checkbox" checked />
//       <i></i>
//       <h4>Workshops - Bangalore (offline)</h4>
//       <p>
//         By making the open state default for when :checked isn't detected, we
//         can make this system accessable for browsers that don't recognize
//         :checked. The fallback is simply an open accordion. The accordion can be
//         manipulated with Javascript (if needed) by changing the "checked"
//         property of the input element.
//       </p>
//     </li>{" "}
//     <li>
//       <input type="checkbox" checked />
//       <i></i>
//       <h4>Workshops - Online</h4>
//       <p>
//         By making the open state default for when :checked isn't detected, we
//         can make this system accessable for browsers that don't recognize
//         :checked. The fallback is simply an open accordion. The accordion can be
//         manipulated with Javascript (if needed) by changing the "checked"
//         property of the input element.
//       </p>
//     </li>{" "}
//     <li>
//       <input type="checkbox" checked />
//       <i></i>
//       <h4>Can I GPay? (to be illustrated)</h4>
//       <p>
//         By making the open state default for when :checked isn't detected, we
//         can make this system accessable for browsers that don't recognize
//         :checked. The fallback is simply an open accordion. The accordion can be
//         manipulated with Javascript (if needed) by changing the "checked"
//         property of the input element.
//       </p>
//     </li>{" "}
//     <li>
//       <input type="checkbox" checked />
//       <i></i>
//       <h4>Can I GPay? (to be illustrated)</h4>
//       <p>
//         By making the open state default for when :checked isn't detected, we
//         can make this system accessable for browsers that don't recognize
//         :checked. The fallback is simply an open accordion. The accordion can be
//         manipulated with Javascript (if needed) by changing the "checked"
//         property of the input element.
//       </p>
//     </li>
//   </ul>
// </div>;
