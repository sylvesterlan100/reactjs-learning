import React, { Component } from 'react';

class Square extends Component {
	render() {
		return (
			<button className="square">
        		{/*need some code*/}
        		{this.props.number}
      		</button>
		)
	}
}

export default Square;