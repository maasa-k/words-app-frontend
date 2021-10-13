import React from "react";

const Result = (props) => {
    const word = props.word && props.word;

    const definitions = props.definition && props.definition.map((def) => def.definition);

    const synonymsArr = props.definition && props.definition.map((def) => def.synonyms);
    const synonyms = synonymsArr && synonymsArr.map((synonym) => synonym);

    return (
        <div>
            <h1>{word}</h1>

            <h3>Definitions:</h3>
            {definitions && definitions.map((definition) => <li key={Math.random()}>{definition}</li>)}

            <h3>Synonyms:</h3>
            {synonyms && synonyms.map((synonym) => <li>{synonym}</li>)}
            {/* {synonyms && synonyms.map((synonym) => <li key={Math.random()}>{synonym}</li>)} */}
            {/* {definitions && definitions.map((definition) => <li key={Math.random()}>{definition}</li>)} */}
            {/* {props.definition && props.definition.map((def) => <li key={Math.random()}>{def.definition}</li>)} */}
            {/* <li key={Math.random()}>{synonyms}</li> */}
        </div>
    );
};

export default Result;
