import React, {PureComponent} from 'react';
import Style from './newAdvertisementContent.sass';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


class NewAdvertisementContent extends PureComponent {

    constructor() {
        super();

    }

    render() {
        return (
            <div className={Style.newAdvertisementContent_container}>
              <Grid container={true}>
                <Grid container item xs={12} justify="center">
              <h2>New Advertisement</h2>
                </Grid>

                <Grid container={true}>
                  <Grid container item xs={6} justify="center">
                    <h2>New Advertisement</h2>
                  </Grid>

                  <Grid container item xs={6} justify="center">
                    <h2>New Advertisement</h2>
                  </Grid>
                </Grid>
              </Grid>
            </div>
        );
    }
}

export default NewAdvertisementContent
