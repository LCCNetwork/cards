import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './GameSelection.scss'

import Redirector from "../../components/Redirector.jsx";

class GameSelection extends React.Component {
  render() {
    return (
      <div className='game-selection__container fb--center'>
        <a className='game-selection__button game-selection__button--join'>
          <p>JOIN A GAME</p>
          <FontAwesomeIcon icon='door-open' size='2x' />
        </a>

        <p className='game-selection'>OR</p>

        <a className='game-selection__button game-selection__button--create'>
          <p>CREATE A GAME</p>
          <FontAwesomeIcon icon='plus-circle' size='2x' />
        </a>
      </div>
    );
  }
}

export default GameSelection;
