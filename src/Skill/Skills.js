import React, { useContext } from "react";
import Skill from './Skill';
import './skills.css';
import { LanguageContext } from '../Contexts/LanguageContext'
import { message } from '../messages/skillsMessage'

function Skills() {
  const { language } = useContext(LanguageContext)
  return (
    <div className="container">
      <Skill
        skillsType={message[language].programmingLanguage}
        firstTechnology={message.const.java}
        secondTechnology={message.const.cplusplus}
      />
      <Skill
        skillsType={message.const.javaFrameworks}
        firstTechnology={message.const.springFramework}
      />
      <Skill
        skillsType={message[language].webTechnologies}
        firstTechnology={message.const.javaScript}
        secondTechnology={message.const.reactJS}
      />
      <Skill
        skillsType={message[language].versionControlSystem}
        firstTechnology={message.const.git}
      />
      <Skill
        skillsType={message[language].containerizationTools}
        firstTechnology={message.const.docker}
      />
      <Skill
        skillsType={message[language].testingTools}
        firstTechnology={message.const.spock}
      />
      <Skill
        skillsType={message[language].buildTools}
        firstTechnology={message.const.maven}
      />
      <Skill
        skillsType={message[language].databaseManagementSystem}
        firstTechnology={message.const.mysql}
        secondTechnology={message.const.mongoDB}
      />
      <Skill
        skillsType={message[language].otherTools}
        firstTechnology={message.const.swagger}
        secondTechnology={message.const.postman}
      />
    </div>
  );
}

export default Skills;