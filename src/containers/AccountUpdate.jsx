import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import UpdateLicense from '../components/AccountComponents/AccountUpdateLicense';
import UpdatePassport from '../components/AccountComponents/AccountUpdatePassportData';
import UpdateUserData from '../components/AccountComponents/AccountUpdateUserData';
import Style from './Account.sass';
import {connect} from 'react-redux';
import {updateDriversLicense, updatePassportData, updateUserData} from '../actions';
import {bindActionCreators} from 'redux';


const TabContainer = (props) => {
  return (
    <div style={{ padding: 8 * 3 }}>
      <div className={Style.account_form}>
      {props.children}
      </div>
    </div>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends PureComponent {

  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        {/*<ThemeContext.Consumer>*/}
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Driver's License" />
            <Tab label="Passport Data" />
            <Tab label="User Data" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><UpdateLicense person={this.props.person} updateDriversLicense={this.props.updateDriversLicense}/></TabContainer>}
        {value === 1 && <TabContainer><UpdatePassport person={this.props.person} updatePassportData={this.props.updatePassportData}/></TabContainer>}
        {value === 2 && <TabContainer><UpdateUserData person={this.props.person} updateUserData={this.props.updateUserData}/></TabContainer>}
        {/*</ThemeContext.Consumer>*/}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (State) => {
  return {
    person: State.usersReducer.users[localStorage.getItem('auth')]
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDriversLicense: bindActionCreators(updateDriversLicense, dispatch),
    updatePassportData: bindActionCreators(updatePassportData, dispatch),
    updateUserData: bindActionCreators(updateUserData, dispatch),
  }
};

export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SimpleTabs));
