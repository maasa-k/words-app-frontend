import React from 'react';

const Result = (props) => {
    const word = props.word && props.word;

    const noun = props.definition && props.definition.meaning.noun;
    const verb = props.definition && props.definition.meaning.verb;
    const adverb = props.definition && props.definition.meaning.adverb;
    const adjective = props.definition && props.definition.meaning.adjective;

    return (
        <div>
            <h1>{word}</h1>

            <h3>Definitions:</h3>
            <p>{noun}</p>
            <p>{verb}</p>
            <p>{adverb}</p>
            <p>{adjective}</p>

            <h3>Synonyms:</h3>
        </div>
    );
};

export default Result;
