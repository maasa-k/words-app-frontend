import React from "react";

const Result = (props) => {
  // console.log(props.definition && props.definition.map(def => {console.log(def.definition)}))
  // console.log(props && props.word)

  return (
    <div>
      <h1>{props.word}</h1>
      {props.definition && props.definition.map((def) => <li key={props.word}>{def.definition}</li>)}
    </div>
  );
};

export default Result;
