import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import { Context } from "../../context/langContext";

import "./ToggleLangs.css";

const ToggleLangs = () => {
  const { toggleLanguage } = useContext(Context);
  return (
    <div className="container-langs">
      <img
        onClick={() => toggleLanguage("FR")}
        src={FrenchFlag}
        alt="FrenchFlag"
      />
      <img
        onClick={() => toggleLanguage("EN")}
        src={EnglishFlag}
        alt="EnglishFlag"
      />
      <img
        onClick={() => toggleLanguage("ES")}
        src={SpanishFlag}
        alt="SpanishFlag"
      />
    </div>
  );
};

export default ToggleLangs;
