import React, { useContext, useState } from "react";
import './experience.css';
import { LanguageContext } from '../Contexts/LanguageContext'
import Experience from "./Experience"
import { message } from '../messages/experienceMessage.js'
import { exadelReferenceMessages } from '../messages/exadelReference.js'

function Experiences() {
  const { language } = useContext(LanguageContext)
  return (
    <div className="main">
      <Experience
        companyNameAndLocation={message.staticExadel.companyNameAndLocation}
        title={message.staticExadel.titleExadel}
        workRangeDate={message.staticExadel.workRangeDate}
        jobTime={message[language].jobTimeExadel}
        responsibilities={message[language].responsibilitiesExadel}
        technologyStack={message.staticExadel.technologyStack}
        reference={exadelReferenceMessages[language].reference}
        thereAreReference={true}
      />
      <Experience
        companyNameAndLocation={message.staticNordCom.companyNameAndLocation}
        title={message[language].titleNordCom}
        workRangeDate={message.staticNordCom.workRangeDate}
        jobTime={message[language].jobTimeNordCom}
        responsibilities={message[language].responsibilitiesNordcom}
        technologyStack={message.staticNordCom.technologyStack}
        thereAreReference={false}
      />
    </div>
  );
}

export default Experiences;