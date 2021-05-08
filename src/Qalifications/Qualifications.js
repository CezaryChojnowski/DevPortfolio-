import React, { useContext } from "react";
import { LanguageContext } from '../Contexts/LanguageContext'
import Qualification from "./Qalification"
import './qualification.css';
import { message } from '../messages/qualificationsMessage'

function Qalifications() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="main">
      <Qualification
        whoIssuedDocument={message.engineer[language].whoIssuedDocument}
        documentName={message.engineer[language].documentName}
        documentRange={message.engineer[language].documentRange}
        documents={message[language].documents}
        suplementInEN={message.engineer[language].suplementInEN}
        suplementInPL={message.engineer[language].suplementInPL}
        diplomaInEN={message.engineer[language].diplomaInEN}
        diplomaInPL={message.engineer[language].diplomaInPL}
        isEngineer={true}
      />
      <Qualification
        whoIssuedDocument={message.itTechnican[language].whoIssuedDocument}
        documentName={message.itTechnican[language].documentName}
        documentRange={message.itTechnican[language].documentRange}
        documents={message[language].documents}
        suplementInPL={message.itTechnican[language].suplementInPL}
        suplementInEN={message.itTechnican[language].suplementInEN}
        diploma={message.itTechnican[language].diploma}
        isTechnican={true}
      />
    </div>
  );

}

export default Qalifications;