import React from "react";

const Result = (props) => {
  return (
    <div>
      <h1>{props.word}</h1>
      {props.definition && props.definition.map((def) => <li key={Math.random()}>{def.definition}</li>)}
    </div>
  );
};

export default Result;
