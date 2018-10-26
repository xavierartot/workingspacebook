import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { applyMiddleware } from 'redux'

const logger = createLogger({
  collapsed: false,
  duration: true,
  diff: false,
})
export default applyMiddleware(
  thunk,
  logger,
  loadingBarMiddleware,
)
