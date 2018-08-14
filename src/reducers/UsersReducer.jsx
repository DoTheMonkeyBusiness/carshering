import usersList from '../normalized/normalizeUsers'
import constants from '../constants'

const usersReducer = (state = usersList.entities, action) => {
  switch(action.type) {
    case constants.ADD_NEW_USER:
      return ({
        ...state,
        users: {
          ...state.users,
          [action.userID]: {
          id: action.userID,
          email: action.userMail,
          password: action.userPassword
          }
        }
      });
    case constants.UPDATE_DRIVERS_LICENSE:
      return ({
        ...state,
        users: {
          ...state.users,
          [action.userID]: {
            license: action.license,
            issuedBy: action.issuedBy,
            whenIssued: action.whenIssued,
            validUntil: action.validUntil,
            licenseCategory:  action.licenseCategory
          }
        }
      });
    default:
      return state
  }


};

export default usersReducer
