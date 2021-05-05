import React, { useContext } from "react";
import './projects.css';
import Project from "./Project"
import { LanguageContext } from '../Contexts/LanguageContext'
import { message } from '../messages/projectMessage'

function Projects() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="projects">
      <div className="horizontal">
        <div className="left">
          <Project
            title={message.airlineTicketReservationSystem[language].title}
            techstack={message.airlineTicketReservationSystem.const.techStack}
            content={message.airlineTicketReservationSystem[language].projectDescription} 
            github={message.airlineTicketReservationSystem.const.gitHubLink}
            youtube={message.airlineTicketReservationSystem.const.youtubeLink}
            />
        </div>
        <div className="right">
          <Project
            title={message.monitoringAndAnalyzingHomeCashFlows[language].title}
            techstack={message.monitoringAndAnalyzingHomeCashFlows.const.techStack}
            content={message.monitoringAndAnalyzingHomeCashFlows[language].projectDescription} 
            github={message.monitoringAndAnalyzingHomeCashFlows.const.gitHubLink}
            youtube={message.monitoringAndAnalyzingHomeCashFlows.const.youtubeLink}
            />
        </div>
      </div>
      <div className="horizontal">
        <div className="left">
          <Project
            title={message.decisionSupportSystem[language].title}
            techstack={message.decisionSupportSystem.const.techStack}
            content={message.decisionSupportSystem[language].projectDescription} 
            github={message.decisionSupportSystem.const.gitHubLink}
            youtube={message.decisionSupportSystem.const.youtubeLink}
            />
        </div>
        <div className="right">
          <Project
            title={message.controlOFHealthParameters[language].title}
            techstack={message.controlOFHealthParameters.const.techStack}
            content={message.controlOFHealthParameters[language].projectDescription} 
            github={message.controlOFHealthParameters.const.gitHubLink}
            youtube={message.controlOFHealthParameters.const.youtubeLink}
            />
        </div>
      </div>
      <div className="horizontal">
        <div className="left">
          <Project
            title={message.realWorld.const.title}
            techstack={message.realWorld.const.techStack}
            content={message.realWorld[language].projectDescription} 
            github={message.realWorld.const.gitHubLink}
            youtube={message.realWorld.const.youtubeLink}
            />
        </div>
        <div className="right">
          <Project
            title={message.chatBotPBWI.const.title}
            techstack={message.chatBotPBWI.const.techStack}
            content={message.chatBotPBWI[language].projectDescription} 
            github={message.chatBotPBWI.const.gitHubLink}
            youtube={message.chatBotPBWI.const.youtubeLink}
            />
        </div>
      </div>
    </div>
  );
}

export default Projects;