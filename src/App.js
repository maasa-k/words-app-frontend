import React, { useState, useEffect } from "react";
import "./App.css";
// import WordForm from "./WordForm";
// import Result from "./Result";

const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/api/v1/words`);
            const newData = await response.json();
            setDefinition(newData);
        };
        fetchData();
    }, []);

    // const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");
    console.log(definition);

    // const getWord = (word) => {
    //     setWord(word);
    // };

    // const getDefinition = (definition) => {
    //     setDefinition(definition[0].definitions);
    // };

    return (
        <div className="App">
            <h1>Learn the Word</h1>
            <br />

            {/* <WordForm getWord={getWord} getDefinition={getDefinition} />
            <br />
            <br />
            <Result word={word} definition={definition} /> */}
        </div>
    );
};

export default App;
