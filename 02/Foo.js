import React from 'react';
import styles from './Foo.css';

export default class Foo extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header}>Foo</div>
        <label className={styles.label}>This is a custom label.</label>
      </div>
    );
  }
}
