import React, { useState, useEffect } from "react";
import "./App.css";
import WordForm from "./WordForm";
// import Result from "./Result";

const App = () => {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`http://localhost:3001/api/v1/words`);
    //         const newData = await response.json();
    //         setDefinition(newData);
    //     };
    //     fetchData();
    // }, []);

    fetch("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=horse", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
            "x-rapidapi-key": "caaac4088amsh273e15f4876e7f1p170c48jsnc31e01bd75c1",
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.error(err);
        });

    // const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");

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

            <WordForm />
            {/* <WordForm getWord={getWord} getDefinition={getDefinition} /> */}
            {/* <br />
            <br />
            <Result word={word} definition={definition} /> */}
        </div>
    );
};

export default App;
