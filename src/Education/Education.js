import React,{useContext} from "react";
import {message} from '../messages/tempMessage'
import { LanguageContext } from '../Contexts/LanguageContext'
function Education(){
  const {language} = useContext(LanguageContext)

    return (
      <div>
        <h2>{message[language].commingSoon}</h2>
      </div>
    );

}
 
export default Education;