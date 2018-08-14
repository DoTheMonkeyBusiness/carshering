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
          mail: action.userMail,
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
            ...state.users[action.userID],
            license: action.license,
            issuedBy: action.issuedBy,
            whenIssued: action.whenIssued,
            validUntil: action.validUntil,
            licenseCategory:  action.licenseCategory
          }
        }
      });
    case constants.UPDATE_PASSPORT_DATA:
      return ({
        ...state,
        users: {
          ...state.users,
          [action.userID]: {
            ...state.users[action.userID],
            name: action.name,
            surname: action.surname,
            passportSeriesAndNumber: action.passportSeriesAndNumber,
            passportIssuedBy: action.passportIssuedBy,
            passportIssuedDate:  action.passportIssuedDate
          }
        }
      });
      case constants.UPDATE_USER_DATA:
      return ({
        ...state,
        users: {
          ...state.users,
          [action.userID]: {
            ...state.users[action.userID],
            fileName: action.fileName,
            imagePreviewUrl: action.imagePreviewUrl,
            phoneNumber: action.phoneNumber,
            mail: action.mail,
            password:  action.password
          }
        }
      });
    default:
      return state
  }


};

export default usersReducer
