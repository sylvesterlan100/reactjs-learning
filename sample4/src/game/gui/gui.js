import React, {Component} from 'react';
import Board from '../board/board';

class Gui extends Component {
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