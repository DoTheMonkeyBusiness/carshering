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

class InsuranceInformation  extends PureComponent {

  constructor() {
    super();


  }


  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        id="insuranceInformation"
        label="Insurance information"
        className={classes.textField}
        onBlur={this.props.handleChange('insuranceInformation')}
        margin="normal"
        multiline

      /></div>
    );
  }
}
InsuranceInformation .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsuranceInformation)
