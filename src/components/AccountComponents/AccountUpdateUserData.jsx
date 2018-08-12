import React, {PureComponent} from 'react';
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

class UpdateUserData extends PureComponent {

  constructor(){
    super();

    this.state = {
      name: '',
      age: '',
      photo: null,
      multiline: 'Controlled',
      currency: 'EUR',
    };
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   return this.state.photo !== nextState.photo
  // }


  setPhoto = event => {
    console.log('event',event.target.value);
  };

  render() {
    const { classes } = this.props;
    console.log('re-render');
    return (

      <div>
        <h3 className={Style.account_head}>User Data</h3>
        <form className={classNames(classes.container, Style.account_block)}>
              <TextField
                type="file"
                id="userPhoto"
                multiple accept="image/jpeg,image/png"
                label="Photo"
                onChange={this.setPhoto}
                className={classes.textField}
                margin="normal"

              />
              <TextField
                id="userPhoneNumber"
                label="Phone number"
                className={classes.textField}
                margin="normal"
              />

              <TextField
                id="userChangeMail"
                label="Change mail"
                className={classes.textField}

                margin="normal"
              />
              <TextField
                id="userChangePassword"
                label="Change password"
                className={classes.textField}
                margin="normal"
              />
          <Button className={Style.account_button} variant="contained" color="primary">Submit</Button>
        </form>
      </div>
    );
  }
}

UpdateUserData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateUserData)
