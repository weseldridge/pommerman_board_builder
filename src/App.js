import React, { Component } from 'react';
import reject from 'lodash/reject';

import Borad from './Board';
import Controller from './Controller';
import {emptyBoard} from './helpers';

import './App.css';

const PATH_VALUE = 0;

/**
 * Helper to identify an agent
 * 
 * @param int value 
 */
const isAgent = (value) => {
  return value >= 11 && value <= 14;
}

/**
 * Returns an agents id based off of its value.
 * 
 * @param int agentValue 
 * @return int
 */
const getAgentId = (agentValue) => {
  return agentValue - 11;
}

class App extends Component {

    state = {
      agents: null,
      board: emptyBoard,
      board_size: null,
      bombs: null,
      flames: null,
      items: null,
      step_count: null,
      selectedTile: {
        x: null,
        y: null
      }
    };

  /**
   * Loads and sets the board from a game state.
   */
  load = () => {
    const state = JSON.parse(this.refs.textArea.value);

    this.setState({
      agents: JSON.parse(state.agents),
      board: JSON.parse(state.board),
      board_size: Number(state.board_size),
      bombs: JSON.parse(state.bombs),
      flames: JSON.parse(state.flames),
      items: JSON.parse(state.items),
      step_count: Number(state.step_count)
    });
  }

  /**
   * Generates a new game state based off of changes made in the editor
   */
  generate = () => {
  const {agents,board,board_size,bombs,flames,items,step_count} = this.state;

    const newState = {
      agents: JSON.stringify(agents),
      board: JSON.stringify(board),
      board_size: board_size,
      bombs: JSON.stringify(bombs),
      flames: JSON.stringify(flames),
      items: JSON.stringify(items),
      step_count: step_count
    }

    this.refs.textArea.value = JSON.stringify(newState, null, ' ');
  }

  /**
   * Updates state to reflect current select tile.
   * 
   * @param int x
   * @param int y
   */
  selectTile = (x, y) => {
    this.setState({selectedTile: {x,y}});
  }

  /**
   * Updates the select tile with the new value.
   * 
   * If there is a hiddenItem it adds it to the
   * hidden items.
   * 
   * If it is an agent it updates the agent.
   */
  updateTile = (value, hiddenItem) => {
    let {board, selectedTile: {x, y}} = this.state;
    
    // Update board with new value
    board[x][y] = value;
    this.setState({board});

    // clear item for selected tile.
    this.clearItem();

    // if new item is wood and there is a hiddenItem add it.
    if(value === 2 && hiddenItem !== 0) {
      this.addItem(hiddenItem);
    }

    if(isAgent(value)) {
      this.updateAgent(value);
    }

  }

  /**
   * Moves an agent to a new location.
   * 
   * @param int agent
   */
  updateAgent = (agent) => {
    let {agents, selectedTile: {x, y}, board, board_size} = this.state;

    // Remove the old agent. Replace with path way.
    for(let _x = 0; _x < board_size; _x++) {
      for(let _y = 0; _y < board_size; _y++) {
        const boardValue = board[_x][_y];
        if(boardValue == agent && (_x !== x && _y !== y  )) {
          board[_x][_y] = PATH_VALUE
        }
      }
    }

    const agentId = getAgentId(agent);

    // Updates agent
    agents = agents.map((a) => {
      if(a.agent_id == agentId) {
        a.position = [x, y];
      }

      return a;
    });

    this.setState({board, agents});

  };


  /**
   * If there is a hidden item in the newly updated tile it removes it
   */
  clearItem = () => {
    let {items, selectedTile: {x, y}} = this.state;

    if (!items || items.length === 0) {
      return;
    }

    // Reject all items at current postion
    items = reject(items, item => {
      const position = item[0];
      return position[0] === x && position[1] === y;
    });

    this.setState({items});

  }

  /**
   * Adds an item to the items array
   * 
   * @param int item
   */
  addItem = (item) => {
    let {items, selectedTile: {x, y}} = this.state;
    const newItem = [[x, y], item];
    items.push(newItem);
    this.setState({items});
  }

  render() {

    const {board, items} = this.state;

    return (
      <div className="App">
          <div className="container">
            <Borad items={items} board={board} selectTile={this.selectTile} selectedTile={this.state.selectedTile} />
            <Controller items={this.state.items} board={board} selectedTile={this.state.selectedTile} updateTile={this.updateTile} />
          </div>
          <div className="output">
            <textarea ref="textArea" rows="9" styles={{backgroundColor: "#eee"}}></textarea>
            <div className="buttons">
              <button onClick={this.load}>Load</button>
              <button onClick={this.generate}>Generate</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
