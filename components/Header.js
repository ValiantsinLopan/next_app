import Link from 'next/link'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const linkStyle = {
    marginRight : 15
}

const styles = {
    title: {
      cursor: 'pointer',
    },
  };

const Header = () => (
    <MuiThemeProvider>
        <AppBar
            title="Batman TV Shows"
            iconElementLeft={<IconButton href="/" tooltip="Home page"><ActionHome /></IconButton>}
            iconElementRight={<FlatButton label="About" href="/about"/>}
        />
        
    </MuiThemeProvider>
)

export default Header