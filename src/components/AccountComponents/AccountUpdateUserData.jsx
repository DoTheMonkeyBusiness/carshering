import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Style from './AccountComponents.sass';
import classNames from 'classnames';
import hocLoader from './AccountHocLoader';
import Store from '../../store';
// import ReactFileReader from 'react-file-reader';
import MailChangeController from '../../controllers/MailChangeController';

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
      fileName: '',
      imagePreviewUrl: '',
      phoneNumber: null,
      mail: null,
      password: null,
      mailConfirm: true,
      mailExists: false,
      open: false,
      inputMail: ''
    };
  }

  componentWillMount(){
    this.setState({
      id: this.props.person.id,
      fileName: this.props.person.fileName,
      imagePreviewUrl: this.props.person.imagePreviewUrl,
      phoneNumber: this.props.person.phoneNumber,
      mail: this.props.person.mail,
      password: this.props.person.password,})

  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return this.state.photo !== nextState.photo
  // }

  handleCheckMail = (event) => {
    const regex = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    const mailString = event.target.value;
    console.log('hello mutherfuckers',mailString);
    if(!regex.test(mailString)) {
      this.setState(({mailConfirm: false}));
    }
    else {
      this.setState(({mailConfirm: true}));
      this.checkForMail(event);
    }

  };

  checkForMail = (event) => {
    const userList = Store.getState().usersReducer.users;
    console.log(userList);
    let usersMail = Object.keys(userList).map(c => {
      return (userList[c].email)
    });
    if (usersMail.indexOf(event.target.value) !== -1){
      this.setState({mailExists: true, inputMail: event.target.value});
    }
    else {
      this.setState({mailExists: false, mail: event.target.value});
    }
  };


  handleFiles = event => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        fileName: file.name,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file)

  };

  handleSubmit = () => {
    if (this.state.mailConfirm === true && this.state.mailExists === false) {
      this.props.updateUserData({
        userID: this.state.id,
        fileName: this.state.fileName,
        imagePreviewUrl: this.state.imagePreviewUrl,
        phoneNumber: this.state.phoneNumber,
        mail: this.state.mail,
        password: this.state.password,
      });
    }
    else {
      this.setState({open: true});
    }
  };
  closeDialog = () => {

    this.setState({open: false});

  };



  handleChangeState = (state) => (event) => {
    (event.target.value !== '')?(
      this.setState({
        [state]: event.target.value,
      })
    ):(this.setState({
      [state]: this.props.person[state],
    }))
  };

  render() {
    const { classes } = this.props;
    console.log('re-render');
    return (

      <div>
        <h3 className={Style.account_head}>User Data</h3>
        <form className={classNames(classes.container, Style.account_block)}>
          {/*<ReactFileReader r fileTypes={['.jpg','.png', '.jpeg']} handleFiles={this.handleFiles}>*/}
              {/*<Button*/}
                {/*style={{width: 300}}*/}
                {/*variant="contained"*/}
                {/*color="primary"*/}
                {/*id="userPhoto"*/}
              {/*>Update Photo</Button>*/}
          {/*</ReactFileReader>*/}

          <TextField
            id="userPhoto"
            label="Photo"
            type="file"
            onChange={this.handleFiles}
            accept=".jpg, .jpeg, .png"
            className={classes.textField}
            margin="normal"
          />
              <TextField
                id="phoneNumber"
                label="Phone number"
                className={classes.textField}
                onBlur={this.handleChangeState('phoneNumber')}
                margin="normal"
              />

              <TextField
                id="userChangeMail"
                label="Change mail"
                className={classes.textField}
                onBlur={this.handleCheckMail}
                margin="normal"
              />
              <TextField
                id="userChangePassword"
                label="Change password"
                onBlur={this.handleChangeState('password')}
                className={classes.textField}
                margin="normal"
              />
          <Button className={Style.account_button} variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
        </form>
        <div><MailChangeController mailExists={this.state.mailExists} open={this.state.open} mail={this.state.inputMail} closeDialog={this.closeDialog}/></div>
      </div>
    );
  }
}

UpdateUserData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default hocLoader('person')(withStyles(styles)(UpdateUserData))
