import React, { useContext } from "react";
import './experience.css';
import {message} from '../messages/experienceMessage.js'
import { LanguageContext } from '../Contexts/LanguageContext'


function Experience() {
    const {language} = useContext(LanguageContext)

    return (
      <div classname="experienceContent">
      <div className="experience">
        <div className="companyInfo">
          <div className="companyLogo">
          <img src="/exadel.png" alt="Home" width="100" height="100"/>
          </div>
          <div className="company">
            <span id="company">{message.staticExadel.companyName}</span>
          </div>
          <div className="location">
          <span id="location">{message.staticExadel.companyLocation}, {message[language].countryPoland}</span>
          </div>
        </div>
        <div className="title">
        <span id="title">{message.staticExadel.titleExadel}</span>
        </div>
        <div className="dates">
          <span id="dates">{message.staticExadel.workRangeDate}</span><br></br>
          <span id="dates">{message[language].jobTimeExadel}</span>
        </div>
        <div className="responsibilities">
          <span id="responsibilities">{message[language].responsibilitiesExadel}</span>
        </div>
        <div className="stack">
          <span id="stack">{message.staticExadel.technologyStack}</span>
        </div>
        <div className="reference">
        <p></p>
        </div>
      </div>


      <div className="experience">
        <div className="companyInfo">
          <div className="companyLogo">
          <img src="/nordcom.jpg" alt="Home" width="85" height="85"/>
          </div>
          <div className="company">
            <span id="company">{message.staticNordCom.companyName}</span>
          </div>
          <div className="location">
          <span id="location">{message.staticNordCom.companyLocation}, {message[language].countryPoland}</span>
          </div>
        </div>
        <div className="title">
        <span id="title">{message[language].titleNordCom}</span>
        </div>
        <div className="dates">
          <span id="dates">{message.staticNordCom.workRangeDate}</span><br></br>
          <span id="dates">{message[language].jobTimeNordCom}</span>
        </div>
        <div className="responsibilities">
          <span id="responsibilities">{message[language].responsibilitiesNordcom}</span>
        </div>
        <div className="stack">
          <span id="stack"></span>
        </div>
        <div className="reference">
        <p></p>
        </div>
      </div>

      </div>
    );
}

export default Experience;