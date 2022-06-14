import React, { useContext } from "react";
import "./Contenu.css";
import data from "../../assets/data";
import { Context } from "../../context/langContext";

const Content = () => {
  const { lang } = useContext(Context);

  return (
    <div className="content">
      <h1 className="title">{data[lang].title}</h1>
      <p className="content-txt">{data[lang].txt}</p>
    </div>
  );
};

export default Content;
