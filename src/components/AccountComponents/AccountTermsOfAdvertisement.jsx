import React, {PureComponent} from 'react';
import Style from './AccountComponents.sass';
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';



class TermsOfAdvertisement extends PureComponent {

    constructor() {
        super();

    }


    render() {
        return (
            <div>

              <h2 className={Style.account_head}>Read the rules</h2>

              <div className={Style.account_rules}>
                <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, soluta!</li>
                  <br/>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                  <br/>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cumque eos quos reiciendis.</li>
                  <br/>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A!</li>
                  <br/>
                <li>Lorem ipsum dolor.</li>
                  <br/>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>

                </ul>
              </div>


                <br/>
                <h2 className={Style.account_head}>watch the training video</h2>
                <br/>
              <div >
                <ReactPlayer className={Style.account_video} url="https://www.youtube.com/watch?v=ttOYnOFkKEQ"/>
              </div>
              <br/>
                <Button className={Style.account_rulesButton} variant="contained" color="primary" component={Link} to="/new-advertisement">Submit</Button>
            </div>
        );
    }
}

export default TermsOfAdvertisement
