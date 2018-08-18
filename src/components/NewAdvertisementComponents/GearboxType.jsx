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


const gearboxType = [
  {
    value: 'mechanical',
    label: 'mechanical',
  },
  {
    value: 'automatic',
    label: 'automatic',
  },
  {
    value: 'robot',
    label: 'robot',
  }
];

class GearboxType extends PureComponent {

  constructor() {
    super();


  }



  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        select
        label="Gearbox Type"
        className={classes.textField}
        value={this.props.gearboxType}
        onChange={this.props.handleChange('gearboxType')}
        margin="normal"
      >
        {gearboxType.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField></div>
    );
  }
}
GearboxType.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GearboxType)
