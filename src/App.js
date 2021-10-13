import React, { useState } from "react";
import "./App.css";
import WordForm from "./WordForm";
import Result from "./Result";

const App = () => {
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");

    const getWord = (word) => {
        setWord(word);
    };

    const getDefinition = (definition) => {
        setDefinition(definition);
    };

    return (
        <div className="App">
            <h1>Learn the Word</h1>
            <br />

            <WordForm getWord={getWord} getDefinition={getDefinition} />
            <br />
            <br />
            <Result word={word} definition={definition} />
        </div>
    );
};

export default App;
