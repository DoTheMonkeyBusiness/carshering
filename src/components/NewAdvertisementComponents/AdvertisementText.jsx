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

class AdvertisementText  extends PureComponent {

  constructor() {
    super();


  }


  render() {
    const { classes } = this.props;
    return (
      <div><TextField
        id="advertisementText"
        label="Advertisement text"
        className={classes.textField}
        onBlur={this.props.handleChange('advertisementText')}
        margin="normal"
        multiline

      /></div>
    );
  }
}
AdvertisementText .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvertisementText)
