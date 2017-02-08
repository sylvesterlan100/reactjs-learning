import React, {Component} from 'react';
import './square.css';


// No state means stateless functional compo

function Square(props) {

	return (
		<button className="square" onClick={() => props.onClick()}>
			{props.value}
		</button>
	) 
}

export default Square;