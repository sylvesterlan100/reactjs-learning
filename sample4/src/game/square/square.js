import React, {Component} from 'react';
import './square.css';

class Square extends Component {

	constructor() {
		super();
		this.state = {
			value: null
		}
	}

	render() {
		return (
			<button className="square" onClick={() => this.setState({value: 'X'})}>
				{this.state.value}
			</button>
		) 
	}
}

export default Square;