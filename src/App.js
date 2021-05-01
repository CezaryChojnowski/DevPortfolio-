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

import { message } from './message.js';

function App() {
  const [hiddenMain, setHiddenMain] = React.useState(true);
  const [seconds, setSeconds] = React.useState(0);
  const [language, setLanguage] = React.useState("PL");

  function changeLanguage() {
    language == "PL" ? setLanguage("EN") : setLanguage("PL")
  }

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
        <button className="language" onClick={changeLanguage}>
          {language == "EN" ? <img src="/PL.png" alt="Home" width="30" height="20" /> : <img src="/EN.svg" alt="Home" width="30" height="20" />}
        </button>
      </div>
      <div className="navbar">
        <ul>
          <li className="logo">
            <NavLink exact activeClassName="activeLogo" to="/">
              <img src="/dev.png" alt="Home" width="75" height="75" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/experience">
              <HiTrendingUp size="25px" color="#64ffda" />
              <span> {message[language].experience}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/projects">
              <HiCollection size="20px" color="#3f51b5" />
              <span> {message[language].projects}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/skills">
              <HiChartBar size="20px" color="#9c27b0" />
              <span> {message[language].skills}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/qualifications">
              <HiFolder size="20px" />
              <span> {message[language].qualifications}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/education">
              <HiAcademicCap size="20px" color="#ff9800" />
              <span> {message[language].education}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/cv">
              <HiDocumentText size="20px" color="#F44336 " />
              <span> {message[language].cv}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/hobbies">
              <HiOutlinePuzzle size="20px" />
              <span> {message[language].hobbies}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/contact">
              <HiMail size="20px" />
              <span> {message[language].contact}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/guestbook">
              <HiBookOpen size="20px" color="#795548" />
              <span> {message[language].guestbook}</span>
            </NavLink>
          </li>
          <hr></hr>
          <li>
            <a href="https://github.com/CezaryChojnowski" exact activeClassName="active" target="_blank">
              <ImGithub size="20px" color="#fafafa " />
              <span> {message[language].github}</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cezary-chojnowski-500362182/" exact activeClassName="active" target="_blank">
              <ImLinkedin size="20px" color="#0072b1" />
              <span> {message[language].linkedin}</span>
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
