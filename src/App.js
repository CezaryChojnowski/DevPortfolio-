import React, { useEffect } from 'react'
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './NavBarStyle.css';
import Contact from "./mainPages/Contact";
import Experience from './mainPages/Experience';
import Hobbies from './mainPages/Hobbies';
import Projects from './mainPages/Projects';
import Skills from './mainPages/Skills';
import Qualifications from './mainPages/Qualifications';
import Guestbook from './mainPages/Guestbook';
import Cv from './mainPages/Cv';
import Education from './mainPages/Education';

import {
  HiTrendingUp,
  HiCollection,
  HiChartBar,
  HiAcademicCap,
  HiBookOpen,
  HiDocumentText,
  HiMail,
  HiFolder,
  HiOutlinePuzzle
} from "react-icons/hi";

import {
  ImGithub,
  ImLinkedin
} from "react-icons/im"

function App() {
  const [hiddenMain, setHiddenMain] = React.useState(true);
  const [seconds, setSeconds] = React.useState(0);


  useEffect(() => {
    if (hiddenMain) {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      if (seconds == 0) {
        setHiddenMain(false)
      }
    }
  })

  if (hiddenMain) {
    return (
      <div>

      </div>
    )
  }


  return (
    <HashRouter>
      <div className="header">
        <ul>
          <li className="logo">
            <NavLink exact activeClassName="activeLogo" to="/">
              <img src="/dev.png" alt="Home" width="75" height="75" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/experience">
              <HiTrendingUp size="25px" color="#64ffda" />
              <span> Experience</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/projects">
              <HiCollection size="20px" color="#3f51b5" />
              <span> Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/skills">
              <HiChartBar size="20px" color="#9c27b0" />
              <span> Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/qualifications">
              <HiFolder size="20px" />
              <span> Qualifications and courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/education">
              <HiAcademicCap size="20px" color="#ff9800" />
              <span> Education</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/cv">
              <HiDocumentText size="20px" color="#F44336 " />
              <span> CV</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/hobbies">
              <HiOutlinePuzzle size="20px" />
              <span> Hobbies</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/contact">
              <HiMail size="20px" />
              <span> Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/guestbook">
              <HiBookOpen size="20px" color="#795548" />
              <span> Guestbook</span>
            </NavLink>
          </li>
          <hr></hr>
          <li>
            <a href="https://github.com/CezaryChojnowski" exact activeClassName="active" target="_blank">
            <ImGithub size="20px" color="#fafafa " />
              <span> Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cezary-chojnowski-500362182/" exact activeClassName="active" target="_blank">
            <ImLinkedin size="20px" color="#0072b1"/>
              <span> Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <Route path="/contact" component={Contact} />
        <Route path="/experience" component={Experience} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/projects" component={Projects} />
        <Route path="/qualifications" component={Qualifications} />
        <Route path="/skills" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/cv" component={Cv} />
        <Route path="/guestbook" component={Guestbook} />
      </div>
    </HashRouter>
  );
}

export default App;
