import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'
import middlewares from './middlewares'
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'
import './css/main.css'
// firebase
import fbConfig from './config/fbConfig'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

const store = createStore(
  reducers,
  compose(
    middlewares,
    reduxFirestore(),
    reactReduxFirebase(),
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
