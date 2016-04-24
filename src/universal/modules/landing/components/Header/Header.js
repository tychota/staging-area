import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Welcome to Artemis Drive</h1>
          <h3 className={styles.bannerDesc}>An Interface to Google Drive</h3>
        </div>
      </div>
    );
  }
}
