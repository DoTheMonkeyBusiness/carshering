import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../node_modules/normalize.css/normalize.css';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import label from '../images/labe.png';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import SimpleMenu from './../containers/Menu';
import theme from './Theme';






const Navigation = () => (
	<div>
		<Grid container={true}>
			<MuiThemeProvider theme={theme}>
				<AppBar position="static"  color="primary">
					<Toolbar>
						<Grid item xs={4}>
							<img src={label}/>
						</Grid>
						<Hidden only={['xs', 'sm']}>
							<Grid item xs={2}>
								<Button variant="contained" color="secondary" component={Link} to="/">Home</Button>
							</Grid>

							<Grid item xs={2}>
								<Button variant="contained" color="secondary" component={Link} to="/about">About</Button>
							</Grid>
							<Grid item xs={2}>
								<Button variant="contained" color="secondary" component={Link} to="/sample">Sample</Button>
							</Grid>
							<Grid item xs={2}>
								<div>
									<Button variant="outlined" size="large" color="secondary" component={Link} to="/sign-in">Sign-in</Button>
									<Button variant="outlined" size="large" color="secondary" component={Link} to="/registration">Registration</Button>
								</div>
							</Grid>
						</Hidden>
						<Hidden mdUp>
							<Grid container justify="flex-end">
								<SimpleMenu/>
							</Grid>
						</Hidden>
					</Toolbar>
				</AppBar>

			</MuiThemeProvider>
		</Grid>
	</div>
);

export default withWidth()(Navigation);
