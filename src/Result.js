import React from "react";

const Result = (props) => {
    const word = props.word && props.word;

    console.log(props);

    // const definitions = props.definition && props.definition.map((def) => def.definition);

    // const synonymsArr = props.definition && props.definition.map((def) => def.synonyms);
    // const synonyms = synonymsArr && synonymsArr.map((synonym) => synonym);

    return (
        <div>
            <h1>{word}</h1>

            <h3>Definitions:</h3>
            {/* {definitions && definitions.map((definition) => <li key={Math.random()}>{definition}</li>)} */}

            <h3>Synonyms:</h3>
            {/* {synonyms && synonyms.map((synonym) => <li>{synonym}</li>)} */}
        </div>
    );
};

export default Result;
