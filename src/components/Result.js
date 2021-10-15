import React from 'react';

const Result = (props) => {
    return (
        <div>
            <p>Noun: {props.noun}</p>
            <p>Verb: {props.verb}</p>
            <p>Adverb: {props.adverb}</p>
            <p>Adjective: {props.adjective}</p>
        </div>
    );
};

export default Result;
