import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';




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

class FuelConsumption  extends PureComponent {

  constructor() {
    super();


  }


  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        id="fuelConsumption"
        label="Fuel consumption"
        className={classes.textField}
        onBlur={this.props.handleChange('fuelConsumption')}
        margin="normal"
        InputProps={{
          endAdornment: <InputAdornment position="start">/100km</InputAdornment>,
        }}
      /></div>
    );
  }
}
FuelConsumption .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FuelConsumption)
