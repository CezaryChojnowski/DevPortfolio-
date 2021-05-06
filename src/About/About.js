import React, { useContext } from "react";
import { message } from '../messages/aboutMessage'
import { LanguageContext } from '../Contexts/LanguageContext'
import './about.css'

function About() {
  const { language } = useContext(LanguageContext)
  return (
    <div className="container">
      <div className="aboutme">
        <h4>{message[language].hi}</h4>
        <h2>{message.const.name}</h2>
      <span className="somethinkAboutMe">{message[language].about}</span>
      </div>
      <div className="photo">
      <img className="photo2" src="/myPhoto.jpg" alt="Home" width="40%" />
      </div>
    </div>
  );
}

export default About;