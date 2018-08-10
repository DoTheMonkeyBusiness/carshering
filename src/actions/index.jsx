import constants from '../constants'


export const addNewUser = ({userID, userMail, userPassword}) => {

  return {
    type: constants.ADD_NEW_USER,
    userID,
    userMail,
    userPassword
  }
};

export const getUser = (userID) => {
  return {
    type: constants.UPDATE_DRIVERS_LICENSE,
    userID,
  }
};

export const receiveNewMessage = ({ text, author, time }) => {
  return {
    type: constants.RECEIVE_NEW_MESSAGE,
    author, text, time
  }
};
