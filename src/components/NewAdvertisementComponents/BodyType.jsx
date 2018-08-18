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


const bodyType = [
  {
    value: 'Hatchback',
    label: 'Hatchback',
  },
  {
    value: 'Sedan',
    label: 'Sedan',
  },
  {
    value: 'Universal',
    label: 'Universal',
  },
  {
    value: 'Cabriolet',
    label: 'Cabriolet',
  },
  {
    value: 'Coupe',
    label: 'Coupe',
  },
];

class BodyType extends PureComponent {

  constructor() {
    super();


  }



  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        select
        label="Body Type"
        className={classes.textField}
        value={this.props.bodyType}
        onChange={this.props.handleChange('bodyType')}
        margin="normal"

      >
        {bodyType.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField></div>
    );
  }
}
BodyType.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyType)
