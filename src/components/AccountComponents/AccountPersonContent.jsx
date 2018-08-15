import React, {PureComponent} from 'react';
import hocLoader from './AccountHocLoader';
import Style from './AccountComponents.sass';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';



const styles = theme => ({
  root: {

    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
});


let id = 0;
function createData(name, data) {
  id += 1;
  return { id, name, data };
}





class MyComponents extends PureComponent {

    constructor() {
        super();

        this.state = {
          id: null,
          fileName: null,
          imagePreviewUrl: null,
          phoneNumber: null,
          mail: null,
          password: null,
          name: null,
          surname: null,
          passportSeriesAndNumber: null,
          passportIssuedBy: null,
          passportIssuedDate: null,
          license: null,
          issuedBy: null,
          whenIssued: null,
          validUntil: null,
          licenseCategory: null,

        }

    }

  componentWillMount(){
    console.log('fuck shit');
    this.setState({
      id: this.props.person.id,
      fileName: this.props.person.fileName,
      imagePreviewUrl: this.props.person.imagePreviewUrl,
      phoneNumber: this.props.person.phoneNumber,
      mail: this.props.person.mail,
      password: this.props.person.password,
      name: this.props.person.name,
      surname: this.props.person.surname,
      passportSeriesAndNumber: this.props.person.passportSeriesAndNumber,
      passportIssuedBy: this.props.person.passportIssuedBy,
      passportIssuedDate: this.props.person.passportIssuedDate,
      license: this.props.person.license,
      issuedBy: this.props.person.issuedBy,
      whenIssued: this.props.person.whenIssued,
      validUntil: this.props.person.validUntil,
      licenseCategory: this.props.person.licenseCategory})

  }

    render() {
      const { classes } = this.props;

      const rows = [
        createData('mail', this.state.mail),
        createData('Name', this.state.name),
        createData('Surname',this.state.surname),
        createData('Passport series and number', this.state.passportSeriesAndNumber),
        createData('Passport issued by', this.state.passportIssuedBy),
        createData('Passport issued date', this.state.passportIssuedDate),
        createData('License number', this.state.license),
        createData('License issued by', this.state.issuedBy),
        createData('License issued date', this.state.whenIssued),
        createData('License valid until', this.state.validUntil),
        createData('License category', this.state.licenseCategory),
        createData('Phone Number', this.state.phoneNumber),
      ];


      return (
        <div>
          <h3 className={Style.account_head}>User Data</h3>
          <div className={Style.account_userImage} >
          <img className={Style.account_border} width="200" src={this.state.imagePreviewUrl}/>
          </div>
        <Paper className={classNames(classes.root, Style.account_table)}>
          <Table className={classes.table}>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.data}</TableCell>

                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        </div>
      );
    }
}

MyComponents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  hocLoader('person')(withStyles(styles)(MyComponents))
