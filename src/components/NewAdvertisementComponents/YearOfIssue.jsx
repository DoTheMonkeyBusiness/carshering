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

class YearOfIssue extends PureComponent {

  constructor() {
    super();

  }

  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        id="YearOfIssue"
        label="Year of issue"
        margin="normal"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /></div>
    );
  }
}
YearOfIssue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YearOfIssue)
