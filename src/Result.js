import React from 'react';

const Result = (props) => {
    const word = props.word && props.word;

    const resultCode = props.definition.result_code;
    // If resultCode === "200" render definition, else render error message

    if (resultCode === '200') {
        const noun = props.definition && props.definition.meaning.noun;
        const verb = props.definition && props.definition.meaning.verb;
        const adverb = props.definition && props.definition.meaning.adverb;
        const adjective = props.definition && props.definition.meaning.adjective;

        return (
            <div>
                <h1>{word}</h1>

                <h3>Definitions:</h3>
                <li>{noun}</li>
                <li>{verb}</li>
                <li>{adverb}</li>
                <li>{adjective}</li>

                <h3>Synonyms:</h3>
            </div>
        );
    } else {
        return (
            <div>
                <h1>{word}</h1>
                <h2>NO DEFINITION FOUND</h2>
            </div>
        );
    }
};

export default Result;
