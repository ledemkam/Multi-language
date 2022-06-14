import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [lang, setLang] = useState("EN");

  const toggleLanguage = (changeLanguage) => {
    setLang(changeLanguage);
  };

  return (
    <Context.Provider value={{ lang, toggleLanguage }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
