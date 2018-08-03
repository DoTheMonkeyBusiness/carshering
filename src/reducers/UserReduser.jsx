import usersList from '../normalized/normalizeUsers'
import constants from '../constants'

const userReducer = (state = usersList.entities, action) => {

  // switch(action.type) {
  //   case constants.CONNECTED_NEW_USER:
  //     return state.concat({
  //       id: action.userID,
  //       userName: action.userName
  //     });
  //   default:
  //     return state
  // }

  return state

};

export default userReducer
