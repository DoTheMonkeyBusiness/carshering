import constants from '../constants'


export const addNewUser = ({userID, userMail, userPassword}) => {

  return {
    type: constants.ADD_NEW_USER,
    userID,
    userMail,
    userPassword
  }
};

export const updateDriversLicense = (userID, license, issuedBy, whenIssued, validUntil, licenseCategory) => {
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

export const receiveNewMessage = ({ text, author, time }) => {
  return {
    type: constants.RECEIVE_NEW_MESSAGE,
    author, text, time
  }
};
