import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';




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

class OptionalAccessories  extends PureComponent {

  constructor() {
    super();


  }


  render() {
    const { classes } = this.props;
    return (
      <div><FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Optional Accessories</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={this.props.bikeCarrier} onChange={this.props.handleAccessoriesChange('bikeCarrier')} value="bikeCarrier" />
            }
            label="Bike Carrier"
          />
          <FormControlLabel
            control={
              <Checkbox  checked={this.props.airConditioning} onChange={this.props.handleAccessoriesChange('airConditioning')} value="airConditioning" />
            }
            label="Air Conditioning"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.babyChair}
                onChange={this.props.handleAccessoriesChange('babyChair')}
                value="babyChair"
              />
            }
            label="Baby chair"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl></div>
    );
  }
}
OptionalAccessories .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionalAccessories)
