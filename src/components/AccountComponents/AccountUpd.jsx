import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// // import Style from './AccountComponents.sass';
// // import classNames from 'classnames';
// // import TextField from '@material-ui/core/TextField';
import UpdateLicense from './AccountUpdateLicense';
import UpdatePassport from './AccountUpdatePassport';
import UpdateUserData from './AccountUpdateUserData';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Driver's License" />
            <Tab label="Passport Data" />
            <Tab label="User Data" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><UpdateLicense/></TabContainer>}
        {value === 1 && <TabContainer><UpdatePassport/></TabContainer>}
        {value === 2 && <TabContainer><UpdateUserData/></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
