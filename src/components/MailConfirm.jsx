import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class MailExists extends Component {

  render() {

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Check the mail"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We sent a confirmation email to mail {this.props.mail}, please go to your mail and confirm it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeDialog} color="primary" >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );


  }
}

export default MailExists
