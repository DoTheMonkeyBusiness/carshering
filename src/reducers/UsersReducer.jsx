import usersList from '../normalized/normalizeUsers'
import constants from '../constants'

const usersReducer = (state = usersList.entities, action) => {
  switch(action.type) {
    case constants.ADD_NEW_USER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.userID]: {
          id: action.userID,
          email: action.userMail,
          password: action.userPassword
          }
        }
        };
    default:
      return state
  }


};

export default usersReducer
