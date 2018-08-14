import React, {PureComponent} from 'react';
import classNames from 'classnames';
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
import Style from '../containers/registration.sass';
import RegistrationController from  '../controllers/RegistrationController';
import {whyDidYouUpdate} from 'why-did-you-update';
import Store from '../store';
import Grid from '@material-ui/core/Grid';

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

whyDidYouUpdate(React);
class InputAdornments extends PureComponent {
  constructor(){
    super();

    this.state={
      mail: '',
      password: '',
      showPassword: false,
      helperHidden: true,
      error: false,
      mailExists: false,
      correctForm: false,
      open: false,
    };
  }

  handleChange = prop => event => {
  	this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
  	event.preventDefault();
  };

  checkPassword = (event) => {
    var passwordString = event.target.value;
    this.setState(({ showPassword: passwordString }));
  };

  handleClickShowPassword = () => {
  	this.setState(state => ({ showPassword: !state.showPassword }));
  };
  validMail = (event) => {
  	var regex = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
  	var mailString = event.target.value;
  	if(!regex.test(mailString)) {
  		this.setState(({helperHidden: false}));
  		this.setState(({error: true}));
  		this.setState(({mail: ''}));
  	}
  	else {this.setState(({mail: mailString}));}
  };

  setHelperHidden = () => {
  	this.setState(({helperHidden: true}));
  	this.setState(({error: false}));
  };

  checkForMail = () => {
    const userList = this.props.users;
    console.log(userList);
    let usersMail = Object.keys(userList).map(c => {
      return (userList[c].email)
    });
    console.log(usersMail);
    if (usersMail.indexOf(this.state.mail) !== -1){
      this.setState({mailExists: true});
    }
    else {
      this.setState({mailExists: false});
      this.props.addNewUser({userID: Date.now(), userMail: this.state.mail, userPassword: this.state.password});
      console.log('addNewUser',this.props.addNewUser);
      console.log(Store.getState());
    }
  };

  checkCorrectness = () => {
    this.setState(({open: true}));
    if((this.state.mail.length !== 0) && (this.state.password.length !==0))
    {  	this.setState(({correctForm: true}));
        this.checkForMail();
    }
    else {this.setState(({correctForm: false}));}
  };

  closeDialog = () => {
    this.setState(({open: false}));
    // this.setState(({mail: ''}));
  };

  render() {
  	const { classes } = this.props;
    console.log('!!!!!!!!!!!!!!!!!!',this.props.addNewUser);

    return (
  		<div className={classes.root}>
  			<form>
  				<Grid item xs={12}>
  					<FormControl
  						className={classNames(classes.margin, classes.withoutLabel, classes.textField, Style.inputStyle)}
  						aria-describedby="registration-mail"
  					>
  						<InputLabel htmlFor="registration-mail">Mail</InputLabel>
  						<Input
  							error={this.state.error}
  							id="registration-mail"
  							onChange={this.handleChange('mail')}
  							onClick={this.setHelperHidden}
  							onBlur={this.validMail}
  						/>
  						<FormHelperText id="adornment-mail" hidden={this.state.helperHidden}>check the correctness of the mail</FormHelperText>
  					</FormControl>
  				</Grid>
  				<Grid item xs={12}>
  					<FormControl className={classNames(classes.margin, classes.textField, Style.inputStyle)}>
  						<InputLabel htmlFor="registration-password">Password</InputLabel>
  						<Input
  							id="registration-password"
  							type={this.state.showPassword ? 'text' : 'password'}
  							value={this.state.password}
                onBlur={this.checkPassword}
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
  						<Button className={Style.formButton} onClick={this.checkCorrectness} >Submit</Button>
  					</Grid>
  				</Grid>
  			</form>
        <div><RegistrationController mailExists={this.state.mailExists} mail={this.state.mail} open={this.state.open} correctForm={this.state.correctForm} closeDialog={this.closeDialog}/></div>
  		</div>
  	);
  }
}

InputAdornments.propTypes = {
	classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(InputAdornments);
