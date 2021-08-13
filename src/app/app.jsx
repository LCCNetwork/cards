import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";

import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from "connected-react-router";

import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";
import "firebase/firestore";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

import createHistory from "history/createBrowserHistory";

import { ui } from "./reducers.js";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";

import 'normalize.css'
import flexbox from './styles/flexbox.scss'
console.log(flexbox)

import './modules/fontawesome.jsx'

const history = createHistory();
const routerMiddlewareHistory = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const firebaseConfig = {
  apiKey: "AIzaSyDXZxvFfx87uigcpeeQ_KtT7N10y7gPrF4",
  authDomain: "lcc-cards.firebaseapp.com",
  projectId: "lcc-cards"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  profileFactory: user => {
    return {
      roles: ["user"],
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL
    };
  }
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const reducers = combineReducers({
  ui: ui,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

let store = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)(
  connectRouter(history)(reducers),
  {
    ui: {
      drawer: {
        open: false
      },
      calendar: {
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      }
    }
  },
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

const Home = Loadable({
  loader: () => import("./views/Home/Home.jsx"),
  loading() {
    return <Loader />;
  }
});

// const Login = Loadable({
//   loader: () => import("./views/Login.jsx"),
//   loading() {
//     return <Loader />;
//   }
// });
//
// const Logout = Loadable({
//   loader: () => import("./views/Logout.jsx"),
//   loading() {
//     return <Loader />;
//   }
// });

const GameSelection = Loadable({
  loader: () => import("./views/GameSelection/GameSelection.jsx"),
  loading() {
    return <Loader />;
  }
});

const CreateGame = Loadable({
  loader: () => import("./views/CreateGame/CreateGame.jsx"),
  loading() {
    return <Loader />;
  }
});
const JoinGame = Loadable({
  loader: () => import("./views/JoinGame/JoinGame.jsx"),
  loading() {
    return <Loader />;
  }
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/selection" component={GameSelection} />
        <Route exact path="/create" component={CreateGame} />
        <Route exact path="/join" component={JoinGame} />
        {/*<Route exact path="/login" component={Login} />*/}
        {/*<Route exact path="/logout" component={Logout} />*/}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
