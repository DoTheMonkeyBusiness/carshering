import { createStore } from 'redux'
import chatReducer from '../reducers/index'

//redux store

const chatStore = createStore(
  chatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default chatStore
