import { combineReducers } from 'redux'
import usersReducer from './UsersReducer'
const chatReducer = combineReducers({
  usersReducer
})

export default chatReducer
