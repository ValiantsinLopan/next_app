import Header from './Header'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Layout = (props) => (
  <MuiThemeProvider>
    
    <Paper style={layoutStyle} zDepth={3}>
      <Header/>
      {props.children}
    </Paper>
  </MuiThemeProvider>
)

export default Layout