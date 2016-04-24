import React, {PropTypes, Component} from 'react';

import ArtemisTheme from './theme';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import styles from './App.css';


class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(ArtemisTheme)}>
        <div className={styles.app}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
