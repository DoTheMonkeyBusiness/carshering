import constants from '../constants'

//redux actions
export const addNewUser = ({userID, userMail, userPassword}) => {

  return {
    type: constants.ADD_NEW_USER,
    userID,
    userMail,
    userPassword
  }
};

export const updateDriversLicense = ({userID, license, issuedBy, whenIssued, validUntil, licenseCategory}) => {
  console.log('lookatme',(userID, license, issuedBy, whenIssued, validUntil, licenseCategory));
  return {
    type: constants.UPDATE_DRIVERS_LICENSE,
    userID,
    license,
    issuedBy,
    whenIssued,
    validUntil,
    licenseCategory
  }
};
export const updatePassportData = ({userID, name, surname, passportSeriesAndNumber, passportIssuedBy, passportIssuedDate}) => {
  return {
    type: constants.UPDATE_PASSPORT_DATA,
    userID,
    name,
    surname,
    passportSeriesAndNumber,
    passportIssuedBy,
    passportIssuedDate
  }
};
export const updateUserData = ({userID, fileName, imagePreviewUrl, phoneNumber, mail, password}) => {
  return {
    type: constants.UPDATE_USER_DATA,
    userID,
    fileName,
    imagePreviewUrl,
    phoneNumber,
    mail,
    password
  }
};

export const receiveNewMessage = ({ text, author, time }) => {
  return {
    type: constants.RECEIVE_NEW_MESSAGE,
    author, text, time
  }
};
