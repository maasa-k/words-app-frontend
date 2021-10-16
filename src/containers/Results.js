import React from 'react';
import Result from '../components/Result';

const Results = (props) => {
    const word = props.word && props.word;

    const resultCode = props.results.result_code;

    if (resultCode === '200') {
        // const results = props.results && props.results;
        const noun = props.results && props.results.meaning.noun;
        const verb = props.results && props.results.meaning.verb;
        const adverb = props.results && props.results.meaning.adverb;
        const adjective = props.results && props.results.meaning.adjective;

        return (
            <div>
                <h1>{word}</h1>

                <h3>Definition:</h3>
                <Result noun={noun} verb={verb} adverb={adverb} adjective={adjective} />
                {/* <Result verb={verb} />
                <Result adverb={adverb} />
                <Result adjective={adjective} /> */}
            </div>
        );
    } else if (!resultCode) {
        return (
            <div>
                <h2>PLEASE ENTER A WORD TO LEARN</h2>
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

export default Results;
