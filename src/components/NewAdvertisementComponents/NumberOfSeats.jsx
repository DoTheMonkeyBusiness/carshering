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


const numbersOfSeats = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
];

class NumberOfSeats extends PureComponent {

  constructor() {
    super();

  }



  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        select
        label="Numbers of seats"
        className={classes.textField}
        value={this.props.numberOfSeats}
        onChange={this.props.handleChange('numberOfSeats')}
        margin="normal"

      >
        {numbersOfSeats.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField></div>
    );
  }
}
NumberOfSeats.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumberOfSeats)
