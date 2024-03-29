import React, { useEffect } from 'react'
import './App.css';
import {
  Route,
  NavLink,
  HashRouter,
  Redirect
} from "react-router-dom";
import './NavBarStyle.css';
import Contact from "./Contact/Contact";
import Experiences from './Experience/Experiences';
import Projects from './Projects/Projects';
import Skills from './Skill/Skills';
import Qualifications from './Qalifications/Qualifications';
import Guestbook from './Guestbook/Guestbook';
import Education from './Education/Education';
import About from './About/About';

import {
  HiTrendingUp,
  HiCollection,
  HiChartBar,
  HiAcademicCap,
  HiBookOpen,
  HiDocumentText,
  HiMail,
  HiFolder,
} from "react-icons/hi";

import {
  ImGithub,
  ImLinkedin
} from "react-icons/im"

import { message } from './messages/navBarMessage.js';
// import PdfCV from './Cezary_Chojnowski_CV.pdf';
import PdfCV from './randomPDF_CV.pdf';

import { LanguageContext } from "./Contexts/LanguageContext";

export const Context = React.createContext();

function App() {
  const [hiddenMain, setHiddenMain] = React.useState(true);
  const [seconds, setSeconds] = React.useState(0);
  const [language, setLanguage] = React.useState("EN");
  const value = { language, setLanguage };

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
          {language == "EN" ? <img src="/PL.png" alt="Home" width="30" height="20" /> : <img src="/EN.png" alt="Home" width="30" height="20" />}
        </button>
      </div>
      <div className="navbar">
        <ul>
          <li className="logo">
            <NavLink exact activeClassName="activeLogo" to="/about">
              <img src="/dev.png" alt="Home" width="75" height="75" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={{
              pathname: "/experience",
              state: {
                language: language
              }
            }}>
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
            <a href={PdfCV} exact activeClassName="active" target="_blank">
              <HiDocumentText size="20px" color="#F44336 " />
              <span> {message[language].cv}</span>
            </a>
          </li>
          {/* <li>
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
          </li> */}
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
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/about" component={About} /></LanguageContext.Provider>
        {/* <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/contact" component={Contact} /></LanguageContext.Provider> */}
        <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/experience" component={Experiences} /></LanguageContext.Provider>
        <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/projects" component={Projects} /></LanguageContext.Provider>
        <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/qualifications" component={Qualifications} /></LanguageContext.Provider>
        <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/skills" component={Skills} /></LanguageContext.Provider>
        <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/education" component={Education} /></LanguageContext.Provider>
        {/* <LanguageContext.Provider value={{ language, setLanguage }}><Route path="/guestbook" component={Guestbook} /></LanguageContext.Provider> */}
      </div>
    </HashRouter>
  );
}

export default App;
