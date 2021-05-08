import React, { useContext } from "react";
import { LanguageContext } from '../Contexts/LanguageContext'
import PlaceOfStudy from "./PlaceOfStudy"
import { message } from '../messages/educationMessage'
import './education.css';

function Education() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="main">
      <PlaceOfStudy
        graduated={message.secondCycleProgramme[language].graduated}
        dyscypline={message.secondCycleProgramme[language].dyscypline}
        name={message.secondCycleProgramme[language].name}
        scienceClub={message.secondCycleProgramme[language].scienceClub}
        schoolarship={message.secondCycleProgramme[language].schoolarship}
        dateRange={message.secondCycleProgramme[language].dateRange}
        documents={message[language].documents}
        secondCycleProgramme={true}
        certificates={message.secondCycleProgramme[language].certificates}
      />
      <PlaceOfStudy
        graduated={message.firstCycleProgramme[language].graduated}
        dyscypline={message.firstCycleProgramme[language].dyscypline}
        name={message.firstCycleProgramme[language].name}
        scienceClub={message.firstCycleProgramme[language].scienceClub}
        schoolarship={message.firstCycleProgramme[language].schoolarship}
        dateRange={message.firstCycleProgramme.const.dateRange}
        speaker={message.firstCycleProgramme[language].speaker}
        bti={message.firstCycleProgramme[language].bti}
        documents={message[language].documents}
        btiCertificate={message.firstCycleProgramme[language].btiCertificate}
        speakerCertificate={message.firstCycleProgramme[language].speakerCertificate}
        certificatee={message.firstCycleProgramme[language].certificate}
        firstCycleProgramme={true}
      />
      <PlaceOfStudy
        profile={message.technicalSchool[language].profile}
        name={message.technicalSchool[language].name}
        dateRange={message.technicalSchool.const.dateRange}
        documents={message[language].documents}
        technicalSchool={true}
      />
    </div>
  );

}

export default Education;