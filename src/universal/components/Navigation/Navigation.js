import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import React, {PropTypes, Component} from 'react';
import styles from './Navigation.css';
import {Link} from 'react-router';

export default class Navigation extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  render() {
    return (
      <Paper zDepth={0} className={styles.nav}>
        <Link to="/" className={styles.brand}>
          <span>Artemis Drive</span>
        </Link>
        <div className={styles.menuButtons}>
          {this.props.isAuthenticated ? this.renderLoggedIn() : this.renderLoggedOut()}
        </div>
      </Paper>
    );
  }

  renderLoggedIn() {
    return (
      <Link className={styles.buttonBuffer} to="/logout">
        <FlatButton className={styles.menuButton} label="Logout"/>
      </Link>
    );
  }

  renderLoggedOut() {
    return (
      <span>
        <Link className={styles.buttonBuffer} to="/login">
          <FlatButton className={styles.menuButton} label="Login"/>
        </Link>
        <Link className={styles.buttonBuffer} to="/signup">
          <RaisedButton secondary className={styles.menuButton} label="Sign up"/>
        </Link>
      </span>
    );
  }
}
