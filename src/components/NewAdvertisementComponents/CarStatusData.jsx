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
    width: 500,
  },
  menu: {
    width: 500,
  },
});

class CarStatusData  extends PureComponent {

  constructor() {
    super();


  }


  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        id="carStatusData"
        label="Car status data"
        className={classes.textField}
        onBlur={this.props.handleChange('carStatusData')}
        margin="normal"
        multiline

      /></div>
    );
  }
}
CarStatusData .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarStatusData)
