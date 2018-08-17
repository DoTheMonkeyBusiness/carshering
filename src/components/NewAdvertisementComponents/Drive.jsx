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


const drive = [
  {
    value: 'front-wheel ',
    label: 'front-wheel ',
  },
  {
    value: 'rear',
    label: 'rear',
  },
  {
    value: 'four-wheel',
    label: 'four-wheel',
  },

];

class Drive extends PureComponent {

  constructor() {
    super();

    this.state={

      drive: ''

    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        select
        label="Drive"
        className={classes.textField}
        value={this.state.drive}
        onChange={this.handleChange('drive')}
        margin="normal"

      >
        {drive.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField></div>
    );
  }
}
Drive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drive)
