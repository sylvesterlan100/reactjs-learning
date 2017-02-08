import React, {Component} from 'react';
import Board from '../board/board';

class Gui extends Component {

	constructor() {
		super();
		this.state = {
			history: [{
				squares: Array(9).fill(null)}],
			isXNext: true
		}
	}

	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div> {} </div>
					<ol> {} </ol>
				</div>
			</div>

		)
	}
}

export default Gui;