import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateDriversLicense, updatePassportData, updateUserData} from '../actions';
import AccountPerson from '../components/AccountComponents/AccountPersonContent';


class AccountInformation extends PureComponent {


    render() {
      console.log('sblna',this.props);
      return (
        <div>
        <AccountPerson person={this.props.person}/>
        </div>


        );
    }
}



const mapStateToProps = (State) => {
  return {
    person: State.usersReducer.users[localStorage.getItem('auth')]
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
    // updateDriversLicense: bindActionCreators(updateDriversLicense, dispatch),
    // updatePassportData: bindActionCreators(updatePassportData, dispatch),
    // updateUserData: bindActionCreators(updateUserData, dispatch),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AccountInformation)
