import React, { Component } from 'react';

import './Controller.css';


const itemList = {
    0: 'Passage',
    1: 'Rigid',
    2: 'Wood',
    3: 'Bomb',
    6: 'ExtraBomb',
    7: 'IncrRange',
    8: 'Kick',
    9: 'Skull',
    10: 'AgentDummy',
    11: 'Agent0',
    12: 'Agent1',
    13: 'Agent2',
    14: 'Agent3',
}

const hiddenItemList = {
    6: 'ExtraBomb',
    7: 'IncrRange',
    8: 'Kick',
    9: 'Skull',
}

class Controller extends Component {

    state = {
        currentItem: 0
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {board, selectedTile: {x, y} } = nextProps;
        const currentItem = x !== null && y !== null ? board[x][y] : 0;
        return {currentItem};
    }

    changeCurrentItem = (event) => {
        this.setState({currentItem: event.target.value});
    }

    handleChange = () => {
        const {updateTile} = this.props;
        const {currentItem} = this.state;
        const hiddenItem = this.refs.hiddenItem.value;
        updateTile(currentItem, hiddenItem);
    }

    render() {
        const {currentItem} = this.state;

        return (<div className="controller">
            <div className="pannel">
                <h2>Tile Setting</h2>

                <div className="form-group">
                    <label>Item</label>
                    <select value={currentItem} onChange={this.changeCurrentItem}>
                        {Object.entries(itemList).map(([key, value]) => (
                            <option key={value + '=' + key} value={key}>{value}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Hidden Item</label>
                    <select ref="hiddenItem">
                        {Object.entries(hiddenItemList).map(([key, value]) => (
                            <option key={value + '=' + key} value={key} >{value}</option>
                        ))}
                    </select>
                </div>

                <button onClick={this.handleChange}>Change</button>
            </div>
        </div>);
    }
}


export default Controller;