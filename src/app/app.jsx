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

const history = createHistory();
const routerMiddlewareHistory = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const firebaseConfig = {
  apiKey: "REPLACEME_APIKEY",
  authDomain: "REPLACEME_AUTHDOMAIN",
  projectId: "REPLACEME_PROJECTID"
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

const Dashboard = Loadable({
  loader: () => import("./views/Dashboard.jsx"),
  loading() {
    return <Loader />;
  }
});

const Login = Loadable({
  loader: () => import("./views/Login.jsx"),
  loading() {
    return <Loader />;
  }
});

const Logout = Loadable({
  loader: () => import("./views/Logout.jsx"),
  loading() {
    return <Loader />;
  }
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navbar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
