import React, {Component} from 'react';
import MailExists from '../components/MailExists';
import MailConfirm from '../components/MailConfirm';
import ErrorDialog from '../components/ErrorDialog';

class MyComponents extends Component {
    render() {
      if (this.props.correctForm) {
        return (
          <div>{console.log('go')}{this.props.mailExists ? <MailExists open={this.props.open} mail={this.props.mail} closeDialog={this.props.closeDialog}/> : <MailConfirm open={this.props.open} mail={this.props.mail} closeDialog={this.props.closeDialog}/>}</div>
        );
      }
      else return (<div>{console.log('error')}<ErrorDialog open={this.props.open} closeDialog={this.props.closeDialog}/></div>);
    }
}

export default MyComponents
