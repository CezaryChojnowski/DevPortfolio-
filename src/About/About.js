import React, { useContext } from "react";
import { message } from '../messages/tempMessage'
import { LanguageContext } from '../Contexts/LanguageContext'

function About() {
  const { language } = useContext(LanguageContext)
  return (
    <div>
      {language != undefined && Boolean(language) &&
        <h2>{message[language].commingSoon}</h2>
      }
    </div>
  );
}

export default About;