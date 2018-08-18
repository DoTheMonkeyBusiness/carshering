import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';



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


const fuelType = [
  {
    value: 'petrol',
    label: 'petrol',
  },
  {
    value: 'diesel',
    label: 'diesel',
  },
  {
    value: 'gas',
    label: 'gas',
  },
  {
    value: 'electrical',
    label: 'electrical',
  },

];

class FuelType extends PureComponent {

  constructor() {
    super();


  }



  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        select
        label="Fuel Type"
        className={classes.textField}
        value={this.props.fuelType}
        onChange={this.props.handleChange('fuelType')}
        margin="normal"

      >
        {fuelType.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField></div>
    );
  }
}
FuelType.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FuelType)
FuelType
