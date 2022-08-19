import React from "react";
import LibraryHeader from "../../components/library_header/LibraryHeader";
import Navbar from "../../components/navbar/Navbar";
import workshop1 from "../../assets/workshop1.jpeg";
import workshop2 from "../../assets/workshop2.jpeg";
import workshop3 from "../../assets/workshop3.jpeg";
import workshop4 from "../../assets/workshop4.jpeg";
import Styles from "./workshop.module.scss";

function Workshop() {
  return (
    <div>
      <Navbar />
      <LibraryHeader />
      <div className={Styles.workshop_images}>
        <img src={workshop1} alt="workshop1" />
        <img src={workshop2} alt="workshop2" />
        <img src={workshop3} alt="workshop3" />
        <img src={workshop4} alt="workshop4" />
      </div>
      <div className={Styles.content}>
        <h4> Toonland Workshops</h4>
        <p>
          <mark>Creative writing:</mark>
          <br />
          Learning to write is one of the most important skills kids can learn.
          Creative writting allows Kids to express their feelings ideas and
          beliefs. By imagining in more creative writting your child will
          develop stronger self-awarness and observation skills.
        </p>
        <p>
          <mark>Structural writing:</mark>
          <br /> Structural writing entails more than forming one sentence after
          another. It fosters imagination and inspires children to have fun with
          writing
        </p>
        <p>
          <mark> What more do you get from our workshops:</mark>
          <li>DIY Journals</li>
          <li>Fun videos</li>
          <li>Social Skills</li>
          <li>DIY kits</li>
          <li>Habit trackers</li>
          <li>Relationship building</li>
          <li>Time management</li>
        </p>
        <p> Our next Live workshop</p>

        <p>
          <mark> Our Online workshop</mark> will be held over online. You will
          receive e- centeficate on completion of Workshop. Please use the name
          of the participant.
        </p>
        <p>Please fill out the form to get started.</p>
      </div>

      <form className={Styles.content_form}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Second Name" />
        <input type="number" placeholder="Contact number" />
        <input type="number" placeholder="Age" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Workshop;
