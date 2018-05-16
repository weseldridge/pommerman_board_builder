import React, { Component } from 'react';

import Tile from './Tile';
import {Random} from './helpers';

import './Board.css';

class Board extends Component {
    render() {
        const {board, selectTile, selectedTile, items} = this.props;;

        const Row = ({row, rowIndex}) => (<div className="row">
            {row.map((item, colIndex) => (
                <Tile items={items} key={Random.key()} selectTile={selectTile} selectedTile={selectedTile} itemValue={item} x={rowIndex} y={colIndex} />
            ))}
        </div>);

        return (<div className="board">
            {board.map(( row, rowIndex ) => (<Row  key={Random.key()} row={row} rowIndex={rowIndex} />))}
        </div>);
    }
}


export default Board;