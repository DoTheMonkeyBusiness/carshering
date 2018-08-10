import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Style from './AccountComponents.sass';
import classNames from 'classnames';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  menu: {
    width: 300,
  },
});

class UpdateUserData extends Component {

  constructor(){
    super();

    this.state = {
      name: '',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (

      <div className={Style.account_form}>
        <h3 className={Style.account_head}>User Data</h3>
        <div className={classNames(classes.container, Style.account_block)}>
              <TextField
                type="file"
                id="photo"
                multiple accept="image/jpeg,image/png"
                label="Photo"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="phoneNumber"
                label="Phone number"
                className={classes.textField}
                onChange={this.handleChange('Phone number')}
                margin="normal"
              />

              <TextField
                id="changeMail"
                label="Change mail"
                className={classes.textField}
                onChange={this.handleChange('Change mail')}
                margin="normal"
              />
              <TextField
                id="changePassword"
                label="Change password"
                className={classes.textField}
                onChange={this.handleChange('Change password')}
                margin="normal"
              />
          <Button className={Style.account_button} variant="contained" color="primary">Submit</Button>
        </div>
      </div>
    );
  }
}

UpdateUserData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateUserData)
