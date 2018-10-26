import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { applyMiddleware } from 'redux'
// firebase with redux
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

const logger = createLogger({
  collapsed: false,
  duration: true,
  diff: false,
})
export default applyMiddleware(
  thunk,
  thunk.withExtraArgument({ getFirebase, getFirestore }),
  logger,
  loadingBarMiddleware,
)
