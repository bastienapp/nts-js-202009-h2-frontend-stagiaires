import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function StudiesFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Niveau d&apos;études :&nbsp;</p>
      <label htmlFor="bac2studies">
        <input type="radio" id="bac2studies" name="studies" />
        Bac +2
      </label>
      <label htmlFor="bac3studies">
        <input type="radio" id="bac3studies" name="studies" />
        Bac +3
      </label>
    </div>
  );
}
