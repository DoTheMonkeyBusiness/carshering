import React, {Component} from 'react';
import MailNotConfirm from '../components/AccountComponents/AccountMailNotConfirmDialog'
import MailExists from '../components/AccountComponents/AccountMailExistsDialog'



class MailChangeController extends Component {

    constructor() {
        super();

    }

  render() {

      return (
        <div>{this.props.mailExists ? <MailExists open={this.props.open} mail={this.props.mail} closeDialog={this.props.closeDialog}/> : <MailNotConfirm open={this.props.open} closeDialog={this.props.closeDialog}/>}</div>
      );

  }
}

export default MailChangeController
