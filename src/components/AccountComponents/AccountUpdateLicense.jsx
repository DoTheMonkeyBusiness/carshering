import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Style from './AccountComponents.sass';
import classNames from 'classnames';
import {DriversLicenseContext} from '../../context';

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

class UpdateLicense extends PureComponent {

  constructor(){
    super();

    this.state = {
      updateDriversLicense:null,
      id: null,
      license: null,
      issuedBy: null,
      whenIssued: null,
      validUntil: null,
      licenseCategory: null
    };
  }

  componentDidMount(){
    this.setState({
      id: this.props.person.id,
      license: this.props.person.license,
      issuedBy: this.props.person.issuedBy,
      whenIssued: this.props.person.whenIssued,
      validUntil: this.props.person.validUntil,
      licenseCategory: this.props.person.licenseCategory,})
  }

  handleSubmit = () => {
    console.log(this.state.updateDriversLicense);

    this.state.updateDriversLicense({
      userID: this.state.id,
      license: this.state.license,
      issuedBy: this.state.issuedBy,
      whenIssued: this.state.whenIssued,
      validUntil: this.state.validUntil,
      licenseCategory: this.state.licenseCategory,
    });
  };


  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };


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
      // const { license, issuedBy, whenIssued, validUntil, licenseCategory } = this.state;
      console.log('!!!!!!!!!!!props!!!!!!!!!!',this.props.updateDriversLicense);
      return (

            <div>
              <DriversLicenseContext.Consumer>
                { updateDriversLicense => (this.setState({updateDriversLicense: updateDriversLicense})) }</DriversLicenseContext.Consumer>
              <h3 className={Style.account_head}>Driver's license</h3>
              <div className={classNames(classes.container, Style.account_block)}>
                    <TextField
                      id="licenseSeriesAndNumber"
                      label="License Series and Number"
                      className={classes.textField}
                      // onChange={this.handleChange('License Series and Number')}
                       onBlur={this.handleChangeState('license')}
                      margin="normal"
                    />
                    <TextField
                      id="licenseIssuedBy"
                      label="Issued by"
                      className={classes.textField}
                      // onChange={this.handleChange('Issued by')}
                      onBlur={this.handleChangeState('issuedBy')}

                      margin="normal"
                    />
                    <TextField
                      id="LicenseIssuedDate"
                      label="When issued"
                      type="date"
                      margin="normal"
                      onChange={this.handleChangeState('whenIssued')}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="LicenseValidUntil"
                      label="Valid until"
                      type="date"
                      margin="normal"
                      onChange={this.handleChangeState('validUntil')}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="licenseCategory"
                      label="license category"
                      className={classes.textField}
                      onBlur={this.handleChangeState('licenseCategory')}
                      // onChange={this.handleChange('license category')}
                      margin="normal"
                    />
                  <Button className={Style.account_button} variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>

              </div>

            </div>
        );
    }
}

UpdateLicense.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateLicense)
