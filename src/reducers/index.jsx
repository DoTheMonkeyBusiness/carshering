import { combineReducers } from 'redux'
import usersReducer from './UsersReducer'
import personReducer from './PersonReducer'

const chatReducer = combineReducers({
  usersReducer,
  personReducer
})

export default chatReducer
