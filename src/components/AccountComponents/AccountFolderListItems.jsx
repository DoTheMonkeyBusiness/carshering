import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import {Link} from 'react-router-dom';


export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/account/information">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="personal data" />
    </ListItem>
    <ListItem button component={Link} to="/account/advertisements">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="my advertisements" />
    </ListItem>
    <ListItem button component={Link} to="/account/messages">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="messages" />
    </ListItem>
    <ListItem button  component={Link} to="/account/termsOfAdvertisement">
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="new advertisement" />
    </ListItem>
  </div>
);


export const otherMailFolderListItems = (
  <div>
    <ListItem button
              component={Link}
              to="/account/update"
    >
      <ListItemIcon>
        <RefreshIcon />
      </ListItemIcon>
      <ListItemText primary="Update account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="delete the account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
