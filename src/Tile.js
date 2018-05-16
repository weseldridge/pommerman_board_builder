import React, { Component } from 'react';
import find from 'lodash/find';

import './Tile.css';

const Images = {
    0: '/images/Passage.png',
    1: '/images/Rigid.png',
    2: '/images/Wood.png',
    3: '/images/Bomb.png',
    4: '/images/Flames.png',
    5: '/images/Fog.png',
    6: '/images/ExtraBomb.png',
    7: '/images/IncrRange.png',
    8: '/images/Kick.png',
    9: '/images/Skull.png',
    10: '/images/AgentDummy.png',
    11: '/images/Agent0.png',
    12: '/images/Agent1.png',
    13: '/images/Agent2.png',
    14: '/images/Agent3.png',
}


class Tile extends Component {

    handelSelect = () => {
        const {x, y, selectTile} = this.props;
        selectTile(x, y);
    }

  render() {
    const {itemValue, x, y, selectedTile, items} = this.props;

    const isSelected = selectedTile.x === x && selectedTile.y === y ? true : false;

    const itemBlock = find(items, item => {
        const position = item[0];
        console.log(position, x, y);
        //console.log(x,y, position[0] === x && position[1] === y, item[1]);
        return position[0] === x && position[1] === y;
    });

    return (
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={this.handelSelect}>
        <img src={Images[itemValue]} alt="tile"/>
        <div className="overlay"></div>
        {itemBlock ? (<div className="tile-item">
            <img src={Images[itemBlock[1]]} alt="hidden item" />
        </div>) : null}
      </div>
    );
  }
}

export default Tile;