import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import 'styles/base/_main.sass'  // Global styles
import 'styles/base/_common.sass'  // Global styles
import '../../node_modules/normalize.css/normalize.css';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



class SimpleMenu extends PureComponent{

  constructor(){
    super();

    this.state={
      anchorEl: null
    };

  }


  handleClick = (event) => {
    console.log(event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
    console.log(event);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        > <MenuIcon/></IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} variant="contained" color="secondary" component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={this.handleClose} variant="contained" color="secondary" component={Link} to="/about">About</MenuItem>
          <MenuItem onClick={this.handleClose} variant="contained" color="secondary" component={Link} to="/sample">Sample</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
