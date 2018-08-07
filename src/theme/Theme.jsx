import {createMuiTheme} from '@material-ui/core/styles/index';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2d2d2d',
      main: '#101010',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FFE032',
      main: '#FFD123',
      dark: '#FDC315',
      contrastText: '#000',
    },
  },
});


export default theme;
