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

class Mileage extends PureComponent {

  constructor() {
    super();


  }





  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        id="Mileage"
        label="Mileage"
        margin="normal"
        className={classes.textField}
        onBlur={this.props.handleChange('mileage')}
      /></div>
    );
  }
}
Mileage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mileage)
