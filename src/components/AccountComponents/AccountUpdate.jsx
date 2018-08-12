import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import UpdateLicense from './AccountUpdateLicense';
import UpdatePassport from './AccountUpdatePassport';
import UpdateUserData from './AccountUpdateUserData';
import Style from './AccountComponents.sass';
// import {ThemeContext} from '../../context';


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
    const { person } = this.props.location.state;
    console.log('update', person );

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
        {value === 0 && <TabContainer><UpdateLicense person={person}/></TabContainer>}
        {value === 1 && <TabContainer><UpdatePassport person={person}/></TabContainer>}
        {value === 2 && <TabContainer><UpdateUserData person={person}/></TabContainer>}
        {/*</ThemeContext.Consumer>*/}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleTabs);
