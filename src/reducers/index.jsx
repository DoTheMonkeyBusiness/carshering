import { combineReducers } from 'redux'
import usersReducer from './UsersReducer'

//redux reducers
const chatReducer = combineReducers({
  usersReducer
})

export default chatReducer
