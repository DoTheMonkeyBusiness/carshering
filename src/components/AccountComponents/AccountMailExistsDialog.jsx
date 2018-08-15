import React, {PureComponent} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Style from '../mailView.sass'

class MailExists extends PureComponent {

  render() {

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'This mail already exists'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We found mail <span className={Style.mail_view}>{this.props.mail}</span> in our system.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.props.closeDialog} autoFocus >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );


  }
}

export default MailExists
