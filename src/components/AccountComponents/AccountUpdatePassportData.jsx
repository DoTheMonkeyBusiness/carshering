import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Style from './AccountComponents.sass';
import classNames from 'classnames';
import hocLoader from './AccountHocLoader'



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

class UpdatePassport extends PureComponent {

  constructor(){
    super();

    this.state = {
      id: null,
      name: null,
      surname: null,
      passportSeriesAndNumber: null,
      passportIssuedBy: null,
      passportIssuedDate: null,
    };
  }

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };


  componentWillMount(){
    this.setState({
      id: this.props.person.id,
      name: this.props.person.name,
      surname: this.props.person.surname,
      passportSeriesAndNumber: this.props.person.passportSeriesAndNumber,
      passportIssuedBy: this.props.person.passportIssuedBy,
      passportIssuedDate: this.props.person.passportIssuedDate})
  }


  handleSubmit = () => {
    this.props.updatePassportData({
      userID: this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      passportSeriesAndNumber: this.state.passportSeriesAndNumber,
      passportIssuedBy: this.state.passportIssuedBy,
      passportIssuedDate: this.state.passportIssuedDate,
    });
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
    return (

      <div>
        <h3 className={Style.account_head}>Passport Data</h3>
        <div className={classNames(classes.container, Style.account_block)}>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                onBlur={this.handleChangeState('name')}
                // onChange={this.handleChange('Name')}
                margin="normal"
              />
              <TextField
                id="surname"
                label="Surname"
                className={classes.textField}
                onBlur={this.handleChangeState('surname')}
                // onChange={this.handleChange('Surname')}
                margin="normal"
              />

              <TextField
                id="passportSeriesAndNumber"
                label="Passport Series and Number"
                className={classes.textField}
                onBlur={this.handleChangeState('passportSeriesAndNumber')}
                // onChange={this.handleChange('Passport Series and Number')}
                margin="normal"
              />
              <TextField
                id="passportIssuedBy"
                label="Issued by"
                className={classes.textField}
                // onChange={this.handleChange('Issued by')}
                onBlur={this.handleChangeState('passportIssuedBy')}
                margin="normal"
              />
              <TextField
                id="PassportIssuedDate"
                label="Issued Date"
                margin="normal"
                type="date"
                className={classes.textField}
                onChange={this.handleChangeState('passportIssuedDate')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
          <Button className={Style.account_button} variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

UpdatePassport.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default hocLoader('person')(withStyles(styles)(UpdatePassport))
