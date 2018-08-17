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


const iceElectric = [
  {
    value: 'ICE',
    label: 'ICE',
  },
  {
    value: 'Electric',
    label: 'Electric',
  },
];

class IceElectric extends PureComponent {

  constructor() {
    super();

    this.state={

      iceElectric: ''

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
        label="ICE/Electric"
        className={classes.textField}
        value={this.state.iceElectric}
        onChange={this.handleChange('iceElectric')}
        margin="normal"

      >
        {iceElectric.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField></div>
    );
  }
}
IceElectric.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IceElectric)
