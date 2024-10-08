import React, { useEffect } from "react";

import NavBar from "../NavBar/NavBar";
import AboutMe from "../Sections/AboutMe/AboutMe";
import Technologies from "../Sections/Technologies/Technologies";
import Projects from "../Sections/Projects/Projects";
import Experiences from "../Sections/Experiences/Experiences";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2 min-h-screen text-app-text-color">
        <NavBar className="navBar" />

        <section id="About Me">
          <AboutMe />
        </section>

        <section id="Technologies">
          <Technologies />
        </section>

        <section id="Projects">
          <Projects />
        </section>

        <section id="Experiences">
          <Experiences />
        </section>
      </div>
    );
  }
}

export default App;
