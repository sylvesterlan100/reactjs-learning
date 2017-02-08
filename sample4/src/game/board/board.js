import React, {Component} from 'react';
import Square from '../square/square';
import './board.css'; 

class Board extends Component {

	// Switches the marker after a player has went
	alternateMarker() {
		this.setState({isXNext: !this.props.isXNext});
	}

	// Determine winner
	calculateWinner(squares) {
	  const lines = [
	    [0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6],
	  ];
	  for (let i = 0; i < lines.length; i++) {
	    const [a, b, c] = lines[i];
	    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	      return squares[a];
	    }
	  }
	  return null;
	}

	// Sets the value of a square
	placeMarker(i) {
		// creates a deep copy of an array
		const squares = this.props.squares.slice();

		if(!(squares[i] || this.calculateWinner(squares))){
			squares[i] = this.props.isXNext ? 'X' : 'O';
			this.setState({squares: squares});
			this.alternateMarker();
		}
	}

	renderSquare(i) {
		return <Square value={this.props.squares[i]} onClick={() => this.props.placeMarker(i)}/>;
	}

	render() {
		var winner = this.calculateWinner(this.props.squares);
		let status;
		if(winner) {
			status = 'Winner: ' + winner;
		}
		else{
			status = 'Next Player: ' + (this.props.isXNext ? 'X' : 'O');
		}
		return (
			<div>
				<div className="status">{status}</div>
				<div className="grid">	
					<div className="board-row">
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</div>
					<div className="board-row">
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
					</div>
					<div className="board-row">
						{this.renderSquare(6)}
						{this.renderSquare(7)}
						{this.renderSquare(8)}
					</div>
				</div>
			</div>	
		)
	}
}

export default Board;