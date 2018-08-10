import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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

class UpdateLicense extends Component {

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
              <h3 className={Style.account_head}>Driver's license</h3>
              <div className={classNames(classes.container, Style.account_block)}>
                    <TextField
                      id="licenseSeriesAndNumber"
                      label="License Series and Number"
                      className={classes.textField}
                      onChange={this.handleChange('License Series and Number')}
                      margin="normal"
                    />
                    <TextField
                      id="licenseIssuedBy"
                      label="Issued by"
                      className={classes.textField}
                      onChange={this.handleChange('Issued by')}
                      margin="normal"
                    />
                    <TextField
                      id="LicenseIssuedDate"
                      label="When issued"
                      type="date"
                      margin="normal"
                      defaultValue="1-1-2018"
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
                      defaultValue="1-1-2018"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="licenseCategory"
                      label="license category"
                      className={classes.textField}
                      onChange={this.handleChange('license category')}
                      margin="normal"
                    />
                <Button className={Style.account_button} variant="contained" color="primary">Submit</Button>

              </div>

            </div>
        );
    }
}

UpdateLicense.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateLicense)
