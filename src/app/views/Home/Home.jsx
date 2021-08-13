import React from "react";

import './Home.scss'

import Redirector from "../../components/Redirector.jsx";

class Home extends React.Component {
  render() {
    return (
      <div className='home__container fb--center fb--column'>
        <p className='home__title'>cards.io</p>
        <p className='home__subtitle'>THE MOST FUN YOU'LL EVER HAVE IN CARDS AGAINST HUMANITY</p>

        <button
          onClick={() =>
            this.props.firebase.login({ provider: "google", type: "popup" })
          }
        >
          Login With Google
        </button>
      </div>
    );
  }
}

export default Home;
