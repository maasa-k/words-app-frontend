import React from 'react';

const Result = (props) => {
	console.log(props.definition && props.definition.map(def => {console.log(def.definition)}))

	return (
		<div>
			{props.definition && props.definition.map(def => <li>{def.definition}</li>)}			
		</div>
	)
};

export default Result;
