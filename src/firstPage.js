import { useState, useEffect } from "react";
import React from "react";
import checkInput from "./checkContainerName";

const FirstPage = () => {
  const [containerName, setContainerName] = useState("");
  useEffect(() => {
    checkInput(containerName);
  }, [containerName]);

  const formSubmit = (e) => {
    e.preventDefault();
    setContainerName(e.target[0].value);
  };

  return (
    <div id="page">
      <h1 id="name">Vitransa</h1>
      <form id="container-form" onSubmit={(e) => formSubmit(e)}>
        <input
          id="container-input"
          name="konteinerio numeris"
          placeholder="Konteineris"
          maxLength="11"
        />
        <input type="submit" id="container-submit" />
      </form>
    </div>
  );
};

export default FirstPage;
