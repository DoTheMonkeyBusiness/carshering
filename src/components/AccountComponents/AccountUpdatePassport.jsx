import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
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

class MyComponents extends PureComponent {

  constructor(){
    super();

    this.state = {
      name: '',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    };
  }

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };

  render() {
    const { classes } = this.props;
    console.log('re-render1');

    return (

      <div>
        <h3 className={Style.account_head}>Passport Data</h3>
        <div className={classNames(classes.container, Style.account_block)}>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                // onChange={this.handleChange('Name')}
                margin="normal"
              />
              <TextField
                id="surname"
                label="Surname"
                className={classes.textField}
                // onChange={this.handleChange('Surname')}
                margin="normal"
              />

              <TextField
                id="passportSeriesAndNumber"
                label="Passport Series and Number"
                className={classes.textField}
                // onChange={this.handleChange('Passport Series and Number')}
                margin="normal"
              />
              <TextField
                id="passportIssuedBy"
                label="Issued by"
                className={classes.textField}
                // onChange={this.handleChange('Issued by')}
                margin="normal"
              />
              <TextField
                id="PassportIssuedDate"
                label="When issued"
                margin="normal"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
          <Button className={Style.account_button} variant="contained" color="primary">Submit</Button>
        </div>
      </div>
    );
  }
}

MyComponents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyComponents)
