import React, { useState } from "react";
import "./App.css";
import WordForm from "./WordForm";
import Result from "./Result";

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const getWord = (word) => {
    setWord(word);
  };

  const getDefinition = (definition) => {
    setDefinition(definition[0].definitions);
  };

  return (
    <div className="App">
      <h1>Learn the Word</h1>
      <WordForm getWord={getWord} getDefinition={getDefinition} />
      <br />
      <Result word={word} definition={definition} />
    </div>
  );
}

export default App;
