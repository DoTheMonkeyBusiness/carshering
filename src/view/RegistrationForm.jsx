import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import Style from './registration.sass';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});


class InputAdornments extends Component {
  state = {
    password: '',
    showPassword: false,
    helperHidden: true,
    error: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  validMail = (event) =>{
    var regex = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    var searchQuery = event.target.value;
    if(!regex.test(searchQuery)) {
      this.setState(({helperHidden: false}));
      this.setState(({error: true}));
    }
  };

  setHelperHidden = () =>{
    this.setState(({helperHidden: true}));
    this.setState(({error: false}));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <FormControl>
        <Grid item xs={12}>
        <FormControl
          className={classNames(classes.margin, classes.withoutLabel, classes.textField, Style.inputStyle)}
          aria-describedby="adornment-mail"
        >
          <InputLabel htmlFor="adornment-mail">Mail</InputLabel>
          <Input
            error={this.state.error}
            id="adornment-mail"
            onChange={this.handleChange('mail')}
            onClick={this.setHelperHidden}
            onBlur={this.validMail}
          />
          <FormHelperText id="adornment-mail" hidden={this.state.helperHidden}>check the correctness of the mail</FormHelperText>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classNames(classes.margin, classes.textField, Style.inputStyle)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Grid>


          <Grid container justify="center">
            <Grid item xs={4}>
              <Button className={Style.formButton} component={Link} to="/account">Submit</Button>
            </Grid>
          </Grid>
          </FormControl>

      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
