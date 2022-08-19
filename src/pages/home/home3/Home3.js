import React, { useEffect, useRef } from "react";

import "./home3.css";

export default function Home3() {
  //document.getElementById("starter").focus();
  // eslint-disable-next-line no-restricted-globals
  document.body.addEventListener("onload", focus());
  document.addEventListener("keydown", detectSpaceKey);

  function detectSpaceKey(event) {
    if (event.keyCode === 13) {
      showTime();
    }
  }

  function showTime() {
    var curtain = document.getElementById("curtain");
    curtain.className = "open";

    var scene = document.getElementById("scene");
    scene.className = "expand";

    var starter = document.getElementById("starter");
    starter.className = "fade-out";

    setTimeout(function () {
      starter.style.display = "none";
    }, 2000);
  }

  return (
    <div>
      <div id="starter">Enter toonland</div>
      <div id="scene">
        <div id="curtain">
          <div className="ifram">
            <iframe
              src="https://www.youtube.com/embed/LG8brAlJXpk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="ground"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}
