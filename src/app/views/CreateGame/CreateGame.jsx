import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CreateGame.scss'

import Redirector from "../../components/Redirector.jsx";

class CreateGame extends React.Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className='create-game__container fb--center fb--column'>
        <h1 className='create-game__title'>CREATE A GAME</h1>

        <form className='create-game__form fb--center fb--column'>
          <div className='create-game__form-field fb--center fb--column'>
            <label>GAME NAME</label>
            <input />
          </div>

          <label>GAME PASSWORD</label>
          <input />

          <label>MAX PLAYERS</label>
          <input />
        </form>
      </div>
    );
  }
}

export default CreateGame;
