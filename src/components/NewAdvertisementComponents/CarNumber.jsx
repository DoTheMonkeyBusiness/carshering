import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




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

class CarNumber extends PureComponent {

  constructor() {
    super();

  }

  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        id="carNumber"
        label="Car number"
        margin="normal"
        className={classes.textField}
      /></div>
    );
  }
}
CarNumber.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarNumber)
