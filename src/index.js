import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { applyMiddleware, createStore, compose } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import App from './components/App'
import reducers from './store/reducers'
// import middlewares from './middlewares'
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'
import './css/main.css'
// firebase
import fbConfig from './config/fbConfig'

const logger = createLogger({
  collapsed: false,
  duration: true,
  diff: false,
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),
      logger,
      // loadingBarMiddleware,
    ),
    reactReduxFirebase(fbConfig),
    // reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(fbConfig), // redux bindings for firestore
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
